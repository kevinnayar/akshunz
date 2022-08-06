import * as express from 'express'
import { Request, Response, NextFunction } from 'express'
import puppeteer, { Browser } from 'puppeteer'
import Cache from './utils/cache'
import Logger from './utils/logger'

async function main() {
  const logger = new Logger('ApiServer')
  const cache = new Cache<string[]>(1)

  const app = express()
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(express.static('public'))

  const browser: Browser = await puppeteer.launch()

  async function requestLogger(req: Request, _res: Response, next: NextFunction) {
    logger.request(req)
    next()
  }

  async function getNationalParks(req: Request, res: Response) {
    const cacheKey = req.route.path
    const { timerEnd } = logger.timer(cacheKey)

    if (cache.has(cacheKey)) {
      timerEnd('via cache')
      const data = cache.get(cacheKey)
      res.status(200).send(data)
      return
    }

    const page = await browser.newPage()
    const url = 'https://en.wikipedia.org/wiki/List_of_national_parks_of_the_United_States'

    await page.goto(url)
    await page.waitForSelector('#mw-content-text table')

    const data = await page.evaluate(() => {
      const nameElems = Array.from(
        document.querySelectorAll('#mw-content-text table.wikitable tbody tr th > a'),
      )

      const names = []

      for (const elem of nameElems) {
        const name = elem.textContent
        if (name) names.push(name)
      }

      return names
    })

    cache.set(cacheKey, data)

    timerEnd('via puppeteer')

    res.status(200).send(data)
  }

  app.get('/api/v1/national-parks', requestLogger, getNationalParks)

  const apiUrl = 'http://127.0.0.1'
  const apiPort = 3000

  app.listen(apiPort, () => {
    logger.log(`api server running at ${apiUrl}:${apiPort}`)
  })
}

main().catch((e) => {
  console.log(e)
  process.exit(1)
})



