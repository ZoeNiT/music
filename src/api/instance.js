import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://ryio.vercel.app/',
    time: 1000 * 60,
    withCredentials: true,
})

instance.defaults.headers.post['Content-Type'] = 'application/json';

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})
// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    const status = response.status
    // 在发送请求之前做些什么
    if (status === 200 || status === 501) {
        return Promise.resolve(response)
    } else if (status === 301) {
        window.location.replace('/login')
        return false
    } else {
        return Promise.reject(response)
    }
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})

const ajaxMethod = ['get', 'post']

let http = {}

ajaxMethod.forEach(method => {
    http[method] = function (url, data, config) {
        return new Promise(function (resolve, reject) {
            instance[method](url, data, config)
                .then(response => {
                    if (response.status === 200) {
                        resolve(response)
                    }
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
})

export default http