import axios from 'axios'
import { serverUrl } from './env.json'

const api = axios.create({
    baseURL: serverUrl
})

//for call the apis in backend
export default api