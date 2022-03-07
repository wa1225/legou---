import axios from 'axios'
let http = axios.create({
     baseURL:'',//基础地址
    // timeout:  //超时控制
})

// http.interceptors.request.use((req)=>{
//     /* 
//         使用场景：
//         一般全局添加请求头！！！
//     */
//    //添加请求头
// //    req.headers.token = 123
//  req.headers.authorization = sessionStorage.getItem('user')?JSON.parse(sessionStorage.getItem('user')).token :''
//     return req
// })

// http.interceptors.response.use((res)=>{
//     //全局拦截统一错误 比如token失效
//     //针对返回的结果进行统一设置！！！
//     return res.data
// })

axios.interceptors.request.use(config=>{
    console.log("123")
    localStorage.getItem("userInfo")&&(config.headers.authorization=JSON.parse(localStorage.getItem('userInfo')).token)
    return config
})

// 4.响应拦截
axios.interceptors.response.use(res => {
    //打印
    console.log("请求地址：" + res.config.url)
    console.log(res);

    //失败弹信息
    if (res.data.code !== 200) {
        Toast(res.data.msg)
    }
    //掉线处理
    if (res.data.msg == "登录已过期或访问权限受限") {
        router.replace("/login")
    }



    return res;
})


export default http