import axios from 'axios'

const api = axios.create({
    baseURL: 'htto://10.0.2.2:3333/'
})

export default api