import axios from 'axios';

axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
})

export default axios;
