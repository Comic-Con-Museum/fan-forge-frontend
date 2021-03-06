import { appURL } from '../../utils/constants';
import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Authorization'] = 'Bearer admin'

const fetchRawSurveyData = (id) => axios.get(`${appURL}/admin/supports/${id}`);

const fetchFormattedSurveyData = (id) => axios.get(`${appURL}/admin/survey-data/${id}`);

const featureExhibit = (id) => axios.post(`${appURL}/admin/feature/${id}`);

const removeExhibit = (id) => axios.delete(`${appURL}/exhibit/${id}`);

export {
  fetchFormattedSurveyData,
  fetchRawSurveyData,
  featureExhibit,
  removeExhibit
}