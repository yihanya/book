/*
 * @name: 易寒鸦
 * @Description:
 * @Date: 2021-05-11 14:56:46
 * @LastEditTime: 2021-06-08 10:29:59
 * @FilePath: \vuebook\src\request\request.js
 */
import axios from 'axios';

// import { config } from 'vue/types/umd';

const instance = axios.create({
    baseURL: 'http://3964u8g173.picp.vip',
    // baseURL: 'http://192.168.0.12:8080',
    timeout: 3000,
});
//请求拦截
instance.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

//响应拦截
instance.interceptors.response.use(
    res => {
        return res;
    },
    err => {
        return Promise.reject(err);
    }
);

export default instance;
