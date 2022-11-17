import axios from "axios";

const Axios = axios.create({
  baseURL: 'https://dummyjson.com/'
})

export default Axios