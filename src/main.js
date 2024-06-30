import { config } from 'dotenv'

import { createBot } from '@/app/bot.js'
import { handleRobot } from '@/views/robot.js'
import { handleFightReport } from '@/views/fight-report.js'

config()

const bot = createBot()

bot.chatType('private').command('start', ctx => {
  void ctx.reply('Старт')
})

handleRobot(bot)
handleFightReport(bot)
