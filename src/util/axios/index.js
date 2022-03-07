import http from './axios'

//封装登录接口
export function Login(data){
    // console.log(data,'入参');
    return http.post('/api/login',data)
}
//封装注册接口
export function Reg(data){
    return http.post('/api/register',data)
}
//获取首页轮播图
export function getBanner(){
    return http.get('api/getbanner')
}

//获取首页分类
export async function getCate(){
    let res = await http.get('/api/getcate')
    return res.list
}
//获取限时秒杀分类
export async function getCkill(){
    let res = await http.get('/api/getseckill')
    return res.list
}
//获取商品信息
export async function getGoods(){
    let res = await http.get('/api/getindexgoods')
    return res.list
}
//获取分类树形结构
export async function getTree(){
    let res = await http.get('/api/getcatetree')
    return res.list
}
//获取分类商品
export async function getCateGoods(params){
    let res = await http.get('/api/getgoods',{
        params
    })
    return res.list
}
//获取一个商品信息
export async function getinfo(params){
    let res = await http.get('/api/getgoodsinfo',{
        params
    })
    return res.list
}
//获取购物车列表
export async function getCartList(params){
    let res = await http.get('/api/cartlist',{
        params
    })
    res.list = res.list ? res.list:[]
    return res.list
}
//购物车添加
export async function getCartAdd(data){
    let res = await http.post('/api/cartadd',data)
    return res
}
//购物车编辑
export async function getCartEdit(data){
    let res = await http.post('/api/cartedit',data)
    return res.list
}
//购物车删除
export async function getCartDelete(data){
    let res = await http.post('/api/cartdelete',data)
    return res.list
}