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

const fetchTags = () => axios.get(`${appURL}/tags`);

const fetchExhibit = (id) => axios.get(`${appURL}/exhibit/${id}`);

// TODO: Still need to add request body as survey
const supportExhibit = (id) => axios.put(`${appURL}/support/exhibit/${id}`);

const createExhibit = (formData, onComplete, onFailed) =>
    axios.post(`${appURL}/exhibit`, formData)
    .then( () => onComplete() )
    .catch( () => onFailed() );

export {
  fetchFeed,
  fetchTags,
  fetchExhibit,
  pageSize,
  supportExhibit,
  createExhibit
}
