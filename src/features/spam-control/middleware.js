const PASS_DELAY = 1000

const spamControl = (ctx, next) => {
  const now = Date.now()
  const timeFromLastMessage = now - ctx.session.lastMessageTime

  ctx.session.lastMessageTime = now

  if (ctx.callbackQuery || timeFromLastMessage > PASS_DELAY) {
    next()
  }
}

export const useSpamControl = bot => {
  bot.use(spamControl)
}
