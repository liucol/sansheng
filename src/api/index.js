/**
 * Created by User on 2018/3/27.
 */
let url ={
    game: '/stat/api/game'  //所有游戏信息列表 
  }
  
  //开发环境和真实环境的切换
  let  host = 'http://web.chuxinhudong.com'  //http://web.chuxinhudong.com http://192.168.1.174:8080
  
  for(let  key in url){
    if(url.hasOwnProperty(key)){
        url[key] = host + url[key]
    }
  }
  
  export default url
  