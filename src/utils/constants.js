
const sortOptions = {
  RECENT: {
    value: 'recent',
    label: 'Most recent'
  },
  POPULAR: {
    value: 'popular',
    label: 'Most popular'
  }
}

const defaultTag = { value: 'default', label: 'All exhibits' }

const keyCodes = {
  'enter': 13,
  'space': 32
}

const appURL = process.env.APP_URL

export {
  sortOptions,
  defaultTag,
  keyCodes,
  appURL
}