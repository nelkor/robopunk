import { showRobot } from '@/views/robot.js'
import { showArena } from '@/views/arena.js'
import { showSoftware } from '@/views/software.js'
import { showModules } from '@/views/install-module.js'

export const useCallbackQuery = bot => {
  bot.on('callback_query:data', ctx => {
    switch (ctx.callbackQuery.data) {
      // robot
      case 'back':
      case 'cancel':
        return showRobot(ctx)

      // arena
      case 'fight':
        return showArena(ctx)

      // software
      case 'software':
      case 'optimal':
      case 'careful':
      case 'aggressive':
        return showSoftware(ctx)

      // modules
      case 'modules':
      case 'attack':
      case 'defence':
      case 'support':
      case 'mobility':
      case 'suppression':
        return showModules(ctx)

      // unknown
      default:
        return ctx.answerCallbackQuery('Неизвестная команда 🥲')
    }
  })
}
