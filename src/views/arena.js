import { InlineKeyboard } from 'grammy'

const inlineKeyboard = new InlineKeyboard().text('❌ Отменить', 'cancel')
const header = 'Арена ⚔️'
const text = '<b>Карапузик</b> 🤖 ожидает подбора соперника...'

export const showArena = ctx => {
  ctx.editMessageText(`<b>${header}</b>\n\n${text}`, {
    parse_mode: 'HTML',
    reply_markup: inlineKeyboard,
  })
}
