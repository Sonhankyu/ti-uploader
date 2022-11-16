import React, {useEffect} from 'react';
import axios from "axios";
import {message} from "antd";

const AxiosInterceptor = ({children}) => {
    axios.defaults.baseURL = 'http://192.168.0.100:3031/';
    axios.defaults.headers['X-AUTH-TOKEN'] = window.localStorage.getItem('token');

    useEffect(() => {
        const resInterceptor = response => {
            return response;
        }

        const errInterceptor = error => {
            console.log(error.response)
            if (error.response.status === 401) {
                message.error({content: 'Please check ID or Password.'}).then();
            }
            if (error.response.status === 500) {
                message.error({content: 'Please contact the administrator.'}).then();
            }
            return Promise.reject(error);
        }

        const interceptor = axios.interceptors.response.use(resInterceptor, errInterceptor);

        return () => axios.interceptors.response.eject(interceptor);

    }, []);
    return children;
};

export {AxiosInterceptor};