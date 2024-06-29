export const useCallbackQuery = bot => {
  bot.on('callback_query:data', ctx => {
    void ctx.answerCallbackQuery(ctx.callbackQuery.data)
  })
}
