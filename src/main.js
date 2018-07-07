// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios' 
import router from './router'
import url from './api'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    nav: '0',
    game: null,
    handleinfolist: [], //处理过的资讯列表 
    noticelist: [],  //公告
    noticelist7: null,  //7条公告
    activitylist: [],  //活动
    activitylist7: null, //7条活动
    suit: [],   //合服
    suit7: null, //7条合服
    openserver: [],  //开服
    openserver7: null,  //7条开服 
    strategy: [],  //攻略
    strategy7: null,  //7条攻略
    maingift: [],  //主推礼包
    othergiftlist: [],   //其他礼包
    openservicelist: null,  //开服列表
    recentos: ''
  },
  created(){
     this.getgame()
     this.getgift()
     this.getopenservice()
  },
  methods: { 
      getgame(){
        axios.get(url.game+"/2").then(res => {
          this.game = res.data.Data
        })
      },
      Down(){
        window.location.href = "this.game.DownPath" 
      },
      classify(){
        axios.get(url.game+"/2/pages").then(res => {
            var infolist = res.data.Data
                
            for(var i = 0; i<infolist.length; i++){
              var time = infolist[i].Addtime.split(" ")[0].split("-")
                  infolist[i].Addtime = time[1]+"-"+time[2]

                  this.handleinfolist.push(infolist[i])
                if(infolist[i].Tag == "开服"){
                  this.openserver.push(infolist[i])
                }else if(infolist[i].Tag == "合服") {
                  this.suit.push(infolist[i])
                }else if(infolist[i].Tag == "活动"){
                  this.activitylist.push(infolist[i])
                }else if(infolist[i].Tag == "公告"){
                  this.noticelist.push(infolist[i])
                }else if(infolist[i].Tag =="攻略"){
                  this.strategy.push(infolist[i])
                }

                if(i == infolist.length-1){
                  this.openserver7 = this.openserver.slice(0,7)
                  this.suit7 = this.suit.slice(0,7)
                  this.activitylist7 = this.activitylist.slice(0,7)
                  this.noticelist7 = this.noticelist.slice(0,7)
                  this.strategy7 = this.strategy.slice(0,7)
                }
          }
        })
          
      },
      getgift(){
        axios.get(url.game+"/2/gifts").then(res => {
          var data = res.data.Data
          for(var i=0;i<data.length;i++){
             data[i].EffectiveTime = data[i].EffectiveTime.split(" ")[0]
             data[i].Deadline = data[i].Deadline.split(" ")[0]
             if(data[i].Main){
                this.maingift.push(data[i])
             }else{
                this.othergiftlist.push(data[i])
             }
          }
        })
      },
      getopenservice(){
        axios.get(url.game+"/2/server/list").then(res => {
            var data = res.data.Data
            for(var i =0;i<data.length;i++){
              // var time = data[i].OpenTime.split(" ")
              // data[i].time1 = time[0]
              // data[i].time2 = time[1]
              var OpenTime = data[i].OpenTime,   //开服时间
                  date = OpenTime.replace(/-/g,'/'), 
                  objdate = new Date(date),  //时间对象
                  len = objdate.getTime(),  //得到1970年一月一日到现在的秒数
                  offset = objdate.getTimezoneOffset() * 60000,  //本地时间与GMT时间的时间偏移差
                  utcTime = len + offset,   //得到现在的格林尼治时间
                  utc = new Date().getTimezoneOffset()/60,   //当前时区
                  localdate = new Date(utcTime - 3600000 * utc)   //当前时区时间

                  data[i].OpenTimes = localdate  //设置一个时间戳

                  data[i].time1 = (localdate.getMonth()+1) + '-' + localdate.getDate()
                  var h = localdate.getHours()+'',
                      m = localdate.getMinutes()+'',
                      datautc

                  if(h.length == 1 ){
                      h = "0"+localdate.getHours()
                  }
                  if(m.length == 1){
                      m = "0"+localdate.getMinutes()
                  }
                  if(utc < 0){
                      datautc = '+'+ (-utc)
                  }else{
                      datautc = '+'+ utc
                  }
                  data[i].time2 = 'UTC' + datautc +' '+ h + ':' + m

            }
            this.openservicelist = data

            // 获取最近开服

            var daten = (new Date()).getTime(),  //当前的时间戳
                mindate,   //未来最小间距
                minnum     //未来最小间距对应下标
                

            for(var i = 0; i<data.length; i++){
              var datei = data[i].OpenTimes.getTime(),  //时间戳
                  timed 

              if(datei > daten){
                 if(i == 0){
                    timed = datei - daten
                    minnum = i
                 }else{
                    if(datei - daten < timed){
                      timed = datei - daten
                      minnum = i
                    }
                 }
              }
              if(i == data.length-1){
                if(typeof(minnum) == "number"){
                  this.recentos = data[minnum]
                  this.recentos.year = (data[minnum].OpenTimes).getFullYear()
                }
              }
            }
            
        })
      },
      index(num){
        this.nav = num
      },
      Down(){
        axios.get(url.game+"/2/downcount").then(res => {
        })
      }
  },
  mounted(){
    this.classify()
  }
  // components: { App },
  // template: '<App/>'
})
