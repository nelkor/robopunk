const text = ['<b>Имя робота 🔤</b>', 'Введите имя вашего робота.'].join('\n\n')
const options = { parse_mode: 'HTML' }

export const showEnterName = ctx => {
  if (ctx.message) {
    ctx.reply(text, options)
  } else {
    ctx.editMessageText(text, options)
  }

  ctx.session.nameEnterInProgress = true
}
