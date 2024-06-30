import { InlineKeyboard } from 'grammy'

const header = 'Модули 🛠'
const text = 'Надевайте и снимайте модули, нажимая на кнопки.'

export const showModules = ctx => {
  const userModules = ctx.session.modules

  if (ctx.callbackQuery.data !== 'modules') {
    if (
      userModules.length > 2 &&
      !userModules.includes(ctx.callbackQuery.data)
    ) {
      ctx.answerCallbackQuery('Достигнут лимит количества модулей')

      // Не редактируем сообщение при обнаружении попытки превышения лимита.
      return
    }

    if (userModules.includes(ctx.callbackQuery.data)) {
      userModules.splice(userModules.indexOf(ctx.callbackQuery.data), 1)
    } else {
      userModules.push(ctx.callbackQuery.data)
    }
  }

  const checkByCondition = (text, moduleName) =>
    text + (userModules.includes(moduleName) ? ' ✔️' : '')

  const inlineKeyboard = new InlineKeyboard()
    .text(checkByCondition('👊 Атака', 'attack'), 'attack')
    .text(checkByCondition('🛡 Защита', 'defence'), 'defence')
    .row()
    .text(checkByCondition('🥁 Поддержка', 'support'), 'support')
    .text(checkByCondition('🏃‍♀️ Подвижность', 'mobility'), 'mobility')
    .row()
    .text(checkByCondition('📡 Подавление', 'suppression'), 'suppression')
    .text('◀️ Назад', 'back')

  ctx.editMessageText(`<b>${header}</b>\n\n${text}`, {
    parse_mode: 'HTML',
    reply_markup: inlineKeyboard,
  })
}
