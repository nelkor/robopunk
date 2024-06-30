import { session } from 'grammy'

import { spamControlSessionEntries } from '@/features/spam-control'

const initial = () => ({
  name: '',
  modules: [],
  software: 1,
  arenaMessageId: 0,
  nameEnterInProgress: false,
  ...spamControlSessionEntries,
})

export const withSession = bot => {
  bot.use(session({ initial }))

  return bot
}
