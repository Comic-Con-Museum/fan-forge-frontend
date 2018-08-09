import { NOT_FOUND } from 'redux-first-router'

// try dispatching these from the redux devTools

export const goToPage = (type, category) => ({
  type,
  payload: category && { category }
})

export const goSubmit = () => ({
  type: 'SUBMIT'
})

export const goHome = () => ({
  type: 'HOME'
})

export const goEntry = () => ({
  type: 'ENTRY'
})

export const goDetailPage = () => ({
  type: 'DETAILPAGE'
})

export const goFeed = () => ({
  type: 'FEED'
})

export const notFound = () => ({
  type: NOT_FOUND
})

export const localeSwitch = locale => ({
  type: LOCALE_SWITCH,
  payload: locale
})

export const userLogin = username => ({
  type: 'USER_LOGGED_IN',
  payload: username
})

export const url = 'https://yu1pn4u266.execute-api.us-west-2.amazonaws.com/latest/api/exhibits';
export const postExhibit = (exhibit) => {
  return (dispatch) => {
    dispatch({type : POST_EXHIBIT});

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(exhibit)
    }).then(res => {
      dispatch({type: POST_EXHIBIT_SUCCESS})
    }).catch(err => {
      dispatch({type: POST_EXHIBIT_FAIL})
    });
  };
}

export const LOCALE_SWITCH = 'LOCALE_SWITCH'
export const POST_EXHIBIT = 'POST_EXHIBIT'
export const POST_EXHIBIT_SUCCESS = 'POST_EXHIBIT_SUCCESS'
export const POST_EXHIBIT_FAIL = 'POST_EXHIBIT_FAIL'
