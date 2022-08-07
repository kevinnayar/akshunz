/* eslint-disable no-console */
import * as chalk from 'chalk'
import { Color } from 'chalk'
import { Request } from 'express'

export default class Logger {
  namespace: string

  constructor(namespace: string) {
    this.namespace = chalk.magenta(namespace)
  }

  private print = (type: 'log' | 'warn' | 'error' | 'req', messages: any[]) => {
    let color: typeof Color

    switch (type) {
    case 'log': {
      color = 'bgGreen'
      break
    }
    case 'warn': {
      color = 'bgYellow'
      break
    }
    case 'error': {
      color = 'bgRed'
      break
    }
    case 'req': {
      color = 'bgCyan'
      break
    }
    default: throw new Error(`Unrecognized label type: ${type}`)
    }

    const fn = type === 'error' ? console.error : console.log

    fn(
      chalk.inverse(` ${Date.now()} `),
      chalk[color].rgb(0, 0, 0).bold(` ${type} `),
      this.namespace,
      ...messages,
    )
  }

  log(...messages: any) {
    this.print('log', messages)
  }

  warn(...messages: any) {
    this.print('warn', messages)
  }

  error(e: Error | string) {
    const message = e instanceof Error ? { name: e.name, message: e.message, stack: e.stack } : e
    this.print('error', [message])
  }

  request(req: Request) {
    const url = req.url.split('?')[0]
    const {
      method, body, params, query,
    } = req
    const message = {
      url,
      method,
      body,
      params,
      query,
      utcTimestamp: Date.now(),
    }

    this.print('req', [message])
  }

  timer(operation: string) {
    const begin = Date.now()

    const end = (extra?: string) => {
      const diff = Date.now() - begin
      const messages = extra ? [`${operation} -> ${extra}`, diff] : [operation, diff]
      this.print('log', messages)
    }

    return {
      end,
    }
  }
}
