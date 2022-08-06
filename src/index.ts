import * as express from 'express'
import { Request, Response, NextFunction } from 'express'
import puppeteer, { Browser } from 'puppeteer'
import Cache from './utils/cache'
import Logger from './utils/logger'

export function capitalize(text: string) {
  const newWords: string[] = []
  const words = text.split(' ')

  for (const word of words) {
    const newWord = `${word[0].toUpperCase()}${word.substring(1)}`
    newWords.push(newWord)
  }

  return newWords.join(' ')
}

export function replaceInText(textIn: string, replaceTuples: Array<[string, string]>): string {
  const textOut = replaceTuples.reduce((text, [key, value]) => {
    /* eslint-disable no-param-reassign */
    text = text.replace(key, value)
    return text
  }, textIn)
  return textOut
}

async function main() {
  const logger = new Logger('ApiServer')
  const cache = new Cache<any>(2)

  const app = express()
  const apiUrl = 'http://localhost:8080'
  const apiPort = apiUrl.split(':')[2]
  logger.info({ apiPort })

  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(express.static('public'))

  const browser: Browser = await puppeteer.launch()

  async function requestLogger(req: Request, _res: Response, next: NextFunction) {
    logger.request(req)
    next()
  }

  async function getZipsToStates(req: Request, res: Response) {
    const page = await browser.newPage()
    const url = 'https://en.wikipedia.org/wiki/List_of_ZIP_Code_prefixes'

    await page.goto(url)
    await page.waitForSelector('#mw-content-text table')

    const data = await page.evaluate(() => {
      const elems = Array.from(document.querySelectorAll('#mw-content-text table tr td > b'))
      const zips = []

      for (const elem of elems) {
        const text = elem.textContent
        if (text) {
          const [zip, state] = text.split(' ')
          if (state) {
            const abbr = state.slice(0, 2)
            zips.push([zip, abbr])
          }
        }
      }
      return zips
    })

    cache.set('zips-to-states', data)

    res.status(200).send({ data })
  }

  app.get('/api/v1/zips-to-states', requestLogger, getZipsToStates)

  app.listen(apiUrl, () => {
    logger.info(`api server running at ${apiUrl}`)
  })
}

main().catch((e) => {
  console.log(e)
  process.exit(1)
})

main()


