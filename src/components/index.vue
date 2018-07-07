<template>
  <div class="wrap">
    <a :href="game.DownPath" @click = "Down()" class="get_down down_url">立即下载</a>
    <div class="info-opens">
      <span>开服公告：</span>
      <ul id="openinfo">
          <li class="ro">{{recentos.Description}} {{recentos.year}}-{{recentos.time1}} {{recentos.time2}}开服</li>
      </ul>
    </div>
    <div class="newsbox">
      <ul class="news-tab">
        <!--<li>最新-->
          <!--<div class="__data__" data_id="__data__[15611]" page="article" postfix="category_12296" style="display: none; ">-->
            <!--<div></div>-->
            <!--<span>最新</span>-->
          <!--</div>-->
        <!--</li>-->
        <li
            v-for="(list,index) in Tabtilte"
            @click = "Tab(index)"
            :class="{'active': Tabindex === index }"
        >{{list}}
          <div class="__data__" data_id="__data__[15614]" page="article" postfix="category_12296" style="display: none; ">
            <div></div>
            <span>{{list}}</span>
          </div>
        </li>
      </ul>
      <div class="news-con">
        <ul v-show="Tabindex == 0">
          <li class="news_li"
              v-for="(list,index) in handleinfolist"
          >
            <em>{{list.Tag}}</em>
            <span>{{list.Addtime}}</span>
            <a :href="'#/new?id='+list.Id"  @click="indexnv(1)">【最新】{{list.Title}}</a>
          </li>
          <li class="more_li">
            <a href="#/notice" @click="indexnv(1)">查看更多>></a>
          </li>
        </ul>
        <ul v-show="Tabindex == 1">
          <li class="news_li"
              v-for="(list,index) in noticelist7"
          >
            <em>公告</em>
            <span>{{list.Addtime}}</span>
            <a :href="'#/new?id='+list.Id"  @click="indexnv(1)">【公告】{{list.Title}}</a>
          </li>
          <li class="more_li">
            <a href="#/notice" @click="indexnv(1)">查看更多>></a>
          </li>
        </ul>
        <ul v-show="Tabindex == 2">
          <li class="news_li"
              v-for="(list,index) in activitylist7"
          >
            <em>活动</em>
            <span>{{list.Addtime}}</span>
            <a :href="'#/new?id='+list.Id" @click="indexnv(1)">【活动】{{list.Title}}</a>
          </li>
          <li class="more_li">
            <a href="#/activity" @click="indexnv(1)">查看更多>></a>
          </li>
        </ul>
        <!-- <ul v-show="Tabindex == 2">
          <li class="news_li" 
              v-for="(list,index) in openserver7"
          >
            <em>开服</em>
            <span>{{list.Addtime}}</span>
            <a :href="'#/new?id='+list.Id" @click="indexnv(1)">【开服】{{list.Title}}</a>
          </li>
          <li class="more_li">
            <a href="#/openserviceinfo" @click="indexnv(1)">查看更多>></a>
          </li>
        </ul> -->
        <ul v-show="Tabindex == 3">
          <li class="news_li" 
              v-for="(list,index) in suit7"
          >
            <em>合服</em>
            <span>{{list.Addtime}}</span>
            <a :href="'#/new?id='+list.Id" @click="indexnv(1)">【合服】{{list.Title}}</a>
          </li>
          <li class="more_li">
            <a href="#/suit" @click="indexnv(1)">查看更多>></a>
          </li>
        </ul>
        <ul v-show="Tabindex == 4">
          <li class="news_li"
              v-for="(list,index) in strategy7"
          >
            <em>游戏</em>
            <span>{{list.Addtime}}</span>       
            <a :href="'#/new?id='+list.Id" @click="indexnv(1)">【攻略】{{list.Title}}</a>
          </li>
          <li class="more_li">
            <a href="#/gamestrategy" @click="indexnv(1)">查看更多>></a>
          </li>
        </ul>
      </div>
    </div>
    <div id="role" class="role">
      <p class="role_tit"></p>
      <div class="role_txt">
        <a href="javascript:void(0)" class="btn prev"></a>
        <a href="javascript:void(0)" class="btn next"></a>
        <ul class="bd">
          <li>
            <img src="static/sanshengsanshi/image/role3.jpg" width="100%" />
          </li>
          <!-- <li><img src="https://static.9377.cn/images/qyjaz_m/role4.jpg?20180509195512" width="100%" /></li> -->
          <li>
            <img src="static/sanshengsanshi/image/role1.jpg" width="100%" />
          </li>
          <!-- <li><img src="https://static.9377.cn/images/qyjaz_m/role2.jpg?20180509195512" width="100%" /></li> -->
        </ul>
        <ul class="hd"></ul>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'index',
    props: {
      game:{
        required: true
      },
      recentos:{
        required: true
      },
      handleinfolist:{
        required: true
      },
      noticelist:{
        required: true
      },
      activitylist:{
        required: true
      },
      suit:{
        required: true
      },
      openserver:{
        required: true
      },
      strategy:{
        required: true
      },
      noticelist7:{
        required: true
      },
      activitylist7:{
        required: true
      },
      suit7:{
        required: true
      },
      openserver7:{
        required: true
      },
      strategy7:{
        required: true
      }
    },
    data () {
      return {
        Tabtilte:["最新","公告","活动","合服","攻略"],
        Tabindex: 0,
        newnotic: null
      }
    },
    created(){
    },
    methods: {
      Tab(index){
          this.Tabindex = index
      },
      touchslide(){
        window.TouchSlide({ slideCell: "#role", titCell: ".hd", mainCell: ".bd", autoPage: true });
      },
      Down(){
        this.$parent.Down()
      },
      indexnv(num){
        this.$emit('my-index',num)
      }
    },
    mounted() {
      this.touchslide()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .info-opens  span{
      display: inline-block;
      height: .55rem;
      line-height: .55rem;
      vertical-align: top;
    }
    #openinfo li{
      float: left;
    }

    @keyframes kf-marque-animation{ 
      0% { transform: translateX(100%); } 
      100% { transform: translateX(-100%); } 
    }
    #openinfo{
        display: inline-block; 
        width: 4.3rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: clip;
        position: relative;
    }
    .ro{
        display: inline-block;
        position: relative;
        padding-right: 0px;
        animation: kf-marque-animation 10s linear infinite;
        white-space: nowrap;
    }
</style>
