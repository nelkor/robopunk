import { InlineKeyboard } from 'grammy'

const inlineKeyboard = new InlineKeyboard()
  .text('🔤 Изменить имя', 'name')
  .text('⚔️ Сразиться', 'fight')
  .row()
  .text('🛠 Модули', 'modules')
  .text('💾 Программа', 'software')

const header = 'Карапузик 🤖'

const text =
  'Это ваш робот.\nПоменяйте в нём что-нибудь или отправьте на арену сражений.'

export const handleRobot = bot => {
  bot.chatType('private').command('robot', ctx => {
    void ctx.reply(`<b>${header}</b>\n\n${text}`, {
      parse_mode: 'HTML',
      reply_markup: inlineKeyboard,
    })
  })
}
