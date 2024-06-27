import { InlineKeyboard } from 'grammy'

const inlineKeyboard = new InlineKeyboard().text('◀️ Назад', 'back')
const header = 'Арена ⚔️'
const text = '<b>Карапузик</b> 🤖 ожидает подбора соперника...'

export const handleArena = bot => {
  bot.chatType('private').command('arena', ctx => {
    void ctx.reply(`<b>${header}</b>\n\n${text}`, {
      parse_mode: 'HTML',
      reply_markup: inlineKeyboard,
    })
  })
}
