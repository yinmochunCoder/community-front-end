// 对axios的一些整体封装
// 封装axios请求，返回封装数据格式
// 对错误进行统一处理

import axios from 'axios'
import errorHandle from './errorHandle'

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    errorHandle(error)
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(res => {
    // 对响应数据做点什么
    if (res.status === 200) {
        return Promise.resolve(res.data)
    } else {
        return Promise.reject(res)
    }
}, error=> {
    // 对响应错误做点什么
    errorHandle(error)
    return Promise.reject(error);
});

export default instance

