import { InlineKeyboard } from 'grammy'

const header = 'Программное обеспечение 💾'

const text = [
  'Установите желаемое программное обеспечение,',
  'чтобы изменить стиль боя вашего робота.',
].join(' ')

export const showSoftware = ctx => {
  if (ctx.callbackQuery.data !== 'software') {
    if (ctx.callbackQuery.data === ctx.session.software) {
      ctx.answerCallbackQuery('👍')

      // Не редактируем сообщение при выборе выбранной программы.
      return
    }

    ctx.session.software = ctx.callbackQuery.data
  }

  const checkByCondition = (text, software) =>
    text + (ctx.session.software === software ? ' ✔️' : '')

  const inlineKeyboard = new InlineKeyboard()
    .text(checkByCondition('🤬 Агрессивный', 'aggressive'), 'aggressive')
    .text(checkByCondition('😏 Оптимальный', 'optimal'), 'optimal')
    .row()
    .text(checkByCondition('😐 Осторожный', 'careful'), 'careful')
    .text('◀️ Назад', 'back')

  ctx.editMessageText(`<b>${header}</b>\n\n${text}`, {
    parse_mode: 'HTML',
    reply_markup: inlineKeyboard,
  })
}
