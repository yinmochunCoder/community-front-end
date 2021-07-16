import axios from '@/utils/axios'

export function getApi() {
    return axios.get('/api')
}

export function getAsync() {
    return axios.get('/async')
}
