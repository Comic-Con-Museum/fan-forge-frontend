import { NOT_FOUND } from 'redux-first-router'
let axiosDefaults = require('axios/lib/defaults');

// try dispatching these from the redux devTools

export const goToPage = (type, category) => ({
  type,
  payload: category && { category }
})

export const goHome = () => ({
  type: 'HOME'
})

export const goDetail = id => ({
    type: 'DETAIL',
    payload: id
})

export const goAbout = () => ({
  type: 'ABOUT'
})

export const goFeed = type => ({
  type: 'FEED',
  payload: type
})

export const notFound = () => ({
  type: NOT_FOUND
})

export const localeSwitch = locale => ({
  type: LOCALE_SWITCH,
  payload: locale
})

export const removeSubmitId = () => ({
  type: REMOVE_SUBMIT_ID,
})

export const userLogin = username => ({
  type: 'USER_LOGGED_IN',
  payload: username
})

export const url = 'https://yu1pn4u266.execute-api.us-west-2.amazonaws.com/latest/api/exhibit';
export const postExhibit = (exhibit) => {
  return (dispatch) => {
    dispatch({type : POST_EXHIBIT});

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(exhibit)
    }).then(res => {
      return res.json();
    }).then(resJson => {
      dispatch({type: POST_EXHIBIT_SUCCESS, 'payload': resJson})
    }).catch(err => {
      dispatch({type: POST_EXHIBIT_FAIL})
    });
  };
}

export const postArtifact = (exhibit) => {
    return (dispatch) => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(exhibit)
        }).then(res => {
          console.log(res)
          return res.json();
        })
    };
}

axiosDefaults.baseURL = 'https://yu1pn4u266.execute-api.us-west-2.amazonaws.com/latest/api';

export const LOCALE_SWITCH = 'LOCALE_SWITCH'
export const POST_EXHIBIT = 'POST_EXHIBIT'
export const POST_EXHIBIT_SUCCESS = 'POST_EXHIBIT_SUCCESS'
export const POST_EXHIBIT_FAIL = 'POST_EXHIBIT_FAIL'
export const REMOVE_SUBMIT_ID = 'REMOVE_SUBMIT_ID'