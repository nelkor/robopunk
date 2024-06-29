import { Bot } from 'grammy'
import { config } from 'dotenv'

import { useSpamControl } from '@/features/spam-control'
import { useCallbackQuery } from '@/features/callback-query/index.js'

import { withSession } from './session.js'

config()

export const createBot = () => {
  const bot = withSession(new Bot(process.env.TELEGRAM_TOKEN))

  useSpamControl(bot)
  useCallbackQuery(bot)

  process.once('SIGINT', () => bot.stop())
  process.once('SIGTERM', () => bot.stop())

  void bot.start()

  bot.api.getMe().then(({ first_name, username }) => {
    console.log(`Hello! My name is ${first_name} and I’m working.`)
    console.log(`Contact me at https://t.me/${username}`)
  })

  return bot
}
