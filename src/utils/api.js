import { appURL } from './constants';
import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Authorization'] = 'Bearer zjones'

const fetchFeed = (page, sortOption, tag) => axios.get(`${appURL}/feed/${sortOption}`, {
  params: {
    startIdx: page,
    tag: tag,
  },
})

const fetchTags = () => axios.get(`${appURL}/tags`)
 
export {
  fetchFeed,
  fetchTags
}