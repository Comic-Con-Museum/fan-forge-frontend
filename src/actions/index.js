import { NOT_FOUND } from 'redux-first-router'

// try dispatching these from the redux devTools

export const goToPage = (type, category) => ({
  type,
  payload: category && { category }
})

export const goHome = () => ({
  type: 'HOME'
})

export const goEntry = () => ({
  type: 'ENTRY'
})

export const notFound = () => ({
  type: NOT_FOUND
})

export const localeSwitch = (locale) => ({
  type: LOCALE_SWITCH,
  payload: locale
});

export const LOCALE_SWITCH = 'LOCALE_SWITCH'
