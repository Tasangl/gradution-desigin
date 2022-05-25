import axios from 'axios'
export const getLightData = () => {
  axios.post('http://47.95.11.134:11451/data/light',
    {
      date: ''
    }
  ).then((response) => console.log(response))
}