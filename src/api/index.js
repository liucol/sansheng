/**
 * Created by User on 2018/3/27.
 */
let url = {
    game: '/stat/api/game/3',
    gameinfo: '/stat/api/game/3/pages', //所有资讯列表 
    getoninfo: '/stat/api/page' //获取一条资讯
}

//开发环境和真实环境的切换
let host = 'http://web.chuxinhudong.com' //http://192.168.1.174:8080  http://web.chuxinhudong.com

for (let key in url) {
    if (url.hasOwnProperty(key)) {
        url[key] = host + url[key]
    }
}

export default url