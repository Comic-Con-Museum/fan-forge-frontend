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

export {
  fetchFeed,
  fetchTags,
  fetchExhibit,
  pageSize
}