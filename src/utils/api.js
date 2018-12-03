import { appURL } from './constants';
import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Authorization'] = 'Bearer zjones'

const pageSize = 10;

const fetchFeed = (startIndex, sortOption, tag) => axios.get(`${appURL}/feed/${sortOption}`, {
  params: {
    startIdx: startIndex,
    pageSize: pageSize,
    tag: tag,
  },
})

const fetchTags = () => axios.get(`${appURL}/tags`)

const fetchExhibit = (id) => axios.get(`${appURL}/exhibit/${id}`)

// TODO: Still need to add request body as survey
const supportExhibit = (id, body, onComplete) => axios.request({
    method: 'put',
    url: `${appURL}/support/exhibit/${id}`,
    data: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
}).then( () => onComplete() );

export {
  fetchFeed,
  fetchTags,
  fetchExhibit,
  pageSize,
  supportExhibit
}
