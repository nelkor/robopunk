import { Bot } from 'grammy'
import { config } from 'dotenv'

config()

export const createBot = () => {
  const bot = new Bot(process.env.TELEGRAM_TOKEN)

  bot.on('callback_query:data', ctx => {
    void ctx.answerCallbackQuery(ctx.callbackQuery.data)
  })

  process.once('SIGINT', () => bot.stop())
  process.once('SIGTERM', () => bot.stop())

  void bot.start()

  bot.api.getMe().then(({ first_name, username }) => {
    console.log(`Hello! My name is ${first_name} and I’m working.`)
    console.log(`Contact me at https://t.me/${username}`)
  })

  return bot
}
