import axios from 'axios'

const api = axios.create({
    baseURL: 'http://loccalhost:3333'
})

export default api;