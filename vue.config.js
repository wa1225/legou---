// module.exports ={
// // devServer:{
// //     //解决跨域问题配置
// //     //配置代理
// //     proxy:'http://localhost:3000/'
// // }
// proxyTable:{
//     'api':{
//         target: 'http://localhost:3000',
//         changeOrigin: true,
//         pathRewrite:{
//             '^/api':''
//         }
//     }
// }
// }
module.exports={
    publicPath:"",
    outputDir:"dist",
    assetsDir:"static",
    indexPath:"index.html",
    devServer:{
        proxy:{
            "/api":{
                target:"http://localhost:3000",
                changeOrigin:true,
                ws:true
            }
        }
    }
}