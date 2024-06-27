import { InlineKeyboard } from 'grammy'

const inlineKeyboard = new InlineKeyboard()
  .text('👊 Атака ✔️', 'attack')
  .text('🛡 Защита', 'defence')
  .row()
  .text('🥁 Поддержка ✔️', 'support')
  .text('🏃‍♀️ Подвижность ✔️', 'mobility')
  .row()
  .text('📡 Подавление', 'suppression')
  .text('◀️ Назад', 'back')

const header = 'Модули 🛠'
const text = 'Надевайте и снимайте модули, нажимая на кнопки.'

export const handleInstallModule = bot => {
  bot.chatType('private').command('install_module', ctx => {
    void ctx.reply(`<b>${header}</b>\n\n${text}`, {
      parse_mode: 'HTML',
      reply_markup: inlineKeyboard,
    })
  })
}
