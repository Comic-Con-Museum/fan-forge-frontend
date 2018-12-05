import { appURL } from './constants';
import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Authorization'] = 'Bearer admin'

const pageSize = 20;

const fetchFeed = (startIndex, sortOption, tag) => axios.get(`${appURL}/feed/${sortOption}`, {
  params: {
    startIdx: startIndex,
    pageSize: pageSize,
    tag: tag,
  },
})

const fetchTags = () => axios.get(`${appURL}/tags`);

const fetchExhibit = (id) => axios.get(`${appURL}/exhibit/${id}`);

const postComment = (text, id) => axios.post(`${appURL}/comment/`, {
  text: text,
  parent: parseInt(id)
});

const supportExhibit = (id, body, onComplete) => axios.request({
    method: 'put',
    url: `${appURL}/support/exhibit/${id}`,
    data: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
}).then( () => onComplete() );

const createExhibit = (formData, onComplete, onFailed) =>
    axios.post(`${appURL}/exhibit`, formData)
    .then( ({data}) => onComplete(data))
    .catch((e) => onFailed(e));

export {
  fetchFeed,
  fetchTags,
  fetchExhibit,
  postComment,
  pageSize,
  supportExhibit,
  createExhibit
}
