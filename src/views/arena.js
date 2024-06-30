import { InlineKeyboard } from 'grammy'

const inlineKeyboard = new InlineKeyboard().text('❌ Отменить', 'cancel')

const createText = ctx =>
  `Арена ⚔️\n\n<b>${ctx.session.name}</b> 🤖 ожидает подбора соперника...`

export const showArena = ctx => {
  ctx.editMessageText(createText(ctx), {
    parse_mode: 'HTML',
    reply_markup: inlineKeyboard,
  })
}
