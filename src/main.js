// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import $ from 'jquery'
import axios from 'axios'
import router from './router'
import url from './api'

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: ".main",
    router,
    data: {
        apkdownpath: "",
        dialogdata: {
            showdialog: false,
            dialogcontent: ""
        },
        handleinfolist: [], //处理过的资讯列表 
        handleinfolist7: [], //7条最新资讯
        noticelist: [], //公告
        noticelist7: null, //7条公告
        activitylist: [], //活动
        activitylist7: null, //7条活动
        suit: [], //合服
        suit7: null, //7条合服
        openserver: [], //开服
        openserver7: null, //7条开服 
        strategy: [], //攻略
        strategy7: null, //7条攻略
    },
    created() {
        this.getgame()
        this.gameinfo()
    },
    methods: {
        getgame() {
            axios.get(url.game).then(res => {
                //this.apkdownpath = res.data.Data.DownPath
            })
        },
        gameinfo() {
            axios.get(url.gameinfo).then(res => {
                var infolist = res.data.Data

                for (var i = 0; i < infolist.length; i++) {
                    var time = infolist[i].Addtime.split(" ")[0].split("-")
                    infolist[i].Addtime = time[1] + "-" + time[2]

                    this.handleinfolist.push(infolist[i])
                    if (infolist[i].Tag == "开服") {
                        this.openserver.push(infolist[i])
                    } else if (infolist[i].Tag == "合服") {
                        this.suit.push(infolist[i])
                    } else if (infolist[i].Tag == "活动") {
                        this.activitylist.push(infolist[i])
                    } else if (infolist[i].Tag == "公告") {
                        this.noticelist.push(infolist[i])
                    } else if (infolist[i].Tag == "攻略") {
                        this.strategy.push(infolist[i])
                    }

                    if (i == infolist.length - 1) {
                        this.handleinfolist7 = this.handleinfolist.slice(0, 7)
                        this.openserver7 = this.openserver.slice(0, 7)
                        this.suit7 = this.suit.slice(0, 7)
                        this.activitylist7 = this.activitylist.slice(0, 7)
                        this.noticelist7 = this.noticelist.slice(0, 7)
                        this.strategy7 = this.strategy.slice(0, 7)
                    }
                }
            })
        },
        downandroid() {
            //:href="apkdownpath"
            if (this.apkdownpath != "") {
                window.open("_self", this.apkdownpath)
            } else {
                this.dialogdata.showdialog = true
                this.dialogdata.dialogcontent = "安卓版本正在加緊制作中，敬請期待呦"
                    //禁止body滚动
                $('body').css('overflow', 'hidden')
            }
        },
        downgoogleplayandroid() {
            this.dialogdata.showdialog = true
            this.dialogdata.dialogcontent = "安卓版本正在加緊制作中，敬請期待呦"
                //禁止body滚动
            $('body').css('overflow', 'hidden')
        },
        closedialog() {
            this.dialogdata.showdialog = false
                //释放body滚动
            $('body').css('overflow', 'auto')
        }
    }
})