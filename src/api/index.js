import axios from 'axios'

const config = {
    withCredentials: true,
    baseURL: 'https://jsonplaceholder.typicode.com'
}

const api = axios.create(config)

export default api
