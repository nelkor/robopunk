import { InlineKeyboard } from 'grammy'

const inlineKeyboard = new InlineKeyboard()
  .text('🔤 Изменить имя', 'name')
  .text('⚔️ Сразиться', 'fight')
  .row()
  .text('🛠 Модули', 'modules')
  .text('💾 Программа', 'software')

const createText = ctx =>
  [
    `<b>${ctx.session.name || 'Безымянный робот'}</b> 🤖\n`,
    'Это ваш робот.',
    'Поменяйте в нём что-нибудь или отправьте на арену сражений.',
  ].join('\n')

const options = {
  parse_mode: 'HTML',
  reply_markup: inlineKeyboard,
}

export const writeNewRobotMessage = ctx => {
  ctx.reply(createText(ctx), options)
}

export const showRobot = ctx => {
  ctx.editMessageText(createText(ctx), options)
}
