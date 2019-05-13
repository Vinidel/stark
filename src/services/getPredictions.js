import axios from 'axios';

const URL = 'https://stark-promises-api.herokuapp.com'

export function fetchPredictions() {
  console.log('Let me see')
  return axios.get(`${URL}/predictions`)
}
