import { config } from 'dotenv'

import { createBot } from '@/bot.js'
import { handleRobot } from '@/views/robot.js'
import { handleArena } from '@/views/arena.js'
import { handleSoftware } from '@/views/software.js'
import { handleFightReport } from '@/views/fight-report.js'
import { handleInstallModule } from '@/views/install-module.js'

config()

const bot = createBot()

bot.chatType('private').command('start', ctx => {
  void ctx.reply('Старт')
})

handleRobot(bot)
handleArena(bot)
handleSoftware(bot)
handleFightReport(bot)
handleInstallModule(bot)
