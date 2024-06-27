import { InlineKeyboard } from 'grammy'

const inlineKeyboard = new InlineKeyboard()
  .text('🤬 Агрессивный', 'aggressive')
  .text('😏 Оптимальный ✔️', 'optimal')
  .row()
  .text('😐 Осторожный', 'careful')
  .text('◀️ Назад', 'back')

const header = 'Программное обеспечение 💾'

const text = [
  'Установите желаемое программное обеспечение,',
  'чтобы изменить стиль боя вашего робота.',
].join(' ')

export const handleSoftware = bot => {
  bot.chatType('private').command('software', ctx => {
    void ctx.reply(`<b>${header}</b>\n\n${text}`, {
      parse_mode: 'HTML',
      reply_markup: inlineKeyboard,
    })
  })
}
