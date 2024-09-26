import axios from 'axios'

//Base url de tubackemd(esto apuntara a tu servidor backend)
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/api'
})

export default axios;