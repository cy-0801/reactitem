// import { fetch as fetchPro } from "whatwg-fetch";
// import qs from "qs";

// const get = (url, data) => {
//     if (data) {


//         let str = "";
//         for (var key in data) {
//             str += "&" + key + "=" + data[key];
//         }

//         url = url + "?" + str.substr(1);
//     }
//     let result = fetchPro(url, {
//         credentials: "include",
//         headers: {
//             "content-type": "application/json",
//             // 'Accept': 'application/json'
//         }
//     }).then(res => res.json());

//     return result;


// }

// const post = (url, data) => {

//     let result = fetchPro(url, {
//         credentials: "include",
//         headers: {
//             "content-type": "application/x-www-form-urlencoded"
//         },
//         body: qs.stringify(data)
//     }).then(res => res.json());

//     return result;
// }


// export default {
//     get,
//     post
// }

//---------------------------------------
import axios from "axios";


const server = axios.create({
    timeout: 5000,
    withCredentials: true
})
server.interceptors.request.use((config) => {
    if (config.method.toUpperCase() === "GET") {
        // config.headers["x-uab"] = "119#MlKrfOV9MT3aWMMz2ML4iuVLT7a5X2EvonkvWOlhmcgq6ugPMH59qy+SLAAfOycq3FNF9U+S4lkGdoAL/KVVNNFG9oAzRr6onFY89Gpwnka9A49Ll/nVNpOWWNZHtBsU3FN8zUNg4QkLXOb33hVW8smrMR7scrAjinMs7u7Doi5xPIz6z2nCTgwB5fUIXGbceojBBgjZTamxD7tViyQxxP+C3W/fB5+ez2VOZhykQcehqSbrbyYJSyW1dna390j2MPcvp+3qW4FlcmLQWT9g8Lh1qU5i60LV2ytzGYTfo3MiCIqamZGNNBZhnvN3GANsAJ2jblvTfq1Md4A9Ve80YVP0XDuQMSMNwhfjifsRzDjVIci85vuB7nUbo5XGv2qudK8drR65HkJQvTkIJ7quw0oaIsZ46dRkHwNMatOjIYFnUkyErTr5wLPwTGU7H9qaourz1KuHe31gG/3FScT2/Kx97uFqHImWWzT3ULG7bbpm9bQNwKCwdu0Tp1XeXpu+TmJabLt/bObnlM4d6Wg21buNGcnEDtzzzuKRy3luzOITC1HppH+BytPqoIc9SdnMZDiEuD4y67nVR3FHeS8UToYU+8L7I1+aqT6O";
    } else if (config.method.toUpperCase() === "POST") {
        config.headers["content-type"] = "appliaction/x-www-form-urlencoded";
  
    }
   
    return config;
}, (err) => {
    Promise.reject(err);
})

// 响应拦截器
server.interceptors.response.use((res) => {
    if (res.statusText === "OK") {
       
        return res.data
    }

}, (err) => {
    Promise.reject(err);
})


export default (method, url, data = {}) => {
    if (method.toUpperCase() === "GET") {
        return server.get(url, {
            params: data
        })
        
    } else if (method.toUpperCase() === "POST") {
        return server.post(url, data);
    }
}