import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index' //首页
import Infolist from '@/components/infolist' //资讯列表
import Infocontent from '@/components/infocontent' //资讯列表

Vue.use(Router)

export default new Router({
    routes: [{
            path: '',
            name: 'index',
            component: Index
        },
        {
            path: '/infolist', //资讯列表
            name: 'infolist',
            component: Infolist
        },
        {
            path: '/infocontent', //资讯内容
            name: 'infocontent',
            component: Infocontent
        }
    ]
})