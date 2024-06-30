import { session } from 'grammy'

import { spamControlSessionEntries } from '@/features/spam-control'

const initial = () => ({
  name: '',
  modules: [],
  arenaMessageId: 0,
  software: 'optimal',
  nameEnterInProgress: false,
  ...spamControlSessionEntries,
})

export const withSession = bot => {
  bot.use(session({ initial }))

  return bot
}
