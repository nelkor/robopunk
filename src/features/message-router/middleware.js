import { showEnterName } from '@/views/enter-name.js'
import { writeNewRobotMessage } from '@/views/robot.js'

export const useMessageRouter = bot => {
  bot.on('message', ctx => {
    if (ctx.session.nameEnterInProgress) {
      const name = ctx.message.text.trim().split(/\s/).filter(Boolean).join(' ')

      if (name.length > 16) {
        ctx.reply('Имя не должно быть длиннее 16 символов.')

        return
      }

      if (name.length < 2) {
        ctx.reply('Имя не должно быть короче 2 символов.')

        return
      }

      if (!name[0].match(/^[A-zА-яЁё]/)) {
        ctx.reply('Имя должно начинаться с буквы.')

        return
      }

      ctx.session.name = name
      ctx.session.nameEnterInProgress = false

      writeNewRobotMessage(ctx)

      return
    }

    // Команды
    if (ctx.message.text === '/start') {
      showEnterName(ctx)
    }
  })
}
