import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'  //首页
import Notice from '@/components/notice'  //公告列表页
import Activity from '@/components/activity.vue'  //活动列表页
import Suit from '@/components/suit.vue'  //合服列表页
import Gamestrategy from '@/components/gamestrategy.vue'  //游戏攻略列表页
import Openservice from '@/components/openservice.vue'  //开服表
import Kefu from '@/components/kefu.vue'  //客服
import Gift from '@/components/gift.vue'  //礼包
import New from '@/components/new.vue'  //资讯详情

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',  // /stat/v1/sansheng/2/home
      name: 'index',
      component: Index
    },
    {
      path: '/notice',
      name: 'notice',
      component: Notice
    },
    {
      path: '/activity',
      name: 'activity',
      component: Activity
    },
    {
      path: '/suit',
      name: 'suit',
      component: Suit
    },
    {
      path: '/gamestrategy',
      name: 'gamestrategy',
      component: Gamestrategy
    },
    {
      path: '/openservice',
      name: 'openservice',
      component: Openservice
    },
    {
      path: '/kefu',
      name: 'kefu',
      component: Kefu
    },
    {
      path: '/gift',
      name: 'gift',
      component: Gift
    },
    {
      path: '/new',
      name: 'new',
      component: New
    }
  ]
})
