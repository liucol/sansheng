<template>
        <div>
                <!--新闻资讯-->
                 <div class="shop" id="news">
                     <!-- <h1 class="title"><img src="img/title-1.png" alt=""></h1> -->
                     <!--轮播-->
                     <div class="swiper-container slides">
                         <div class="swiper-wrapper">
                             <div class="swiper-slide">
                                 <a href=""><img src="img/newsslide1.jpg" alt="" /></a>
                             </div>
                             <div class="swiper-slide">
                                 <a href=""><img src="img/newsslide2.jpg" alt="" /></a>
                             </div>
                             <div class="swiper-slide">
                                 <a href=""><img src="img/newsslide3.jpg" alt="" /></a>
                             </div>
                             <div class="swiper-slide">
                                 <a href=""><img src="img/newsslide4.jpg" alt="" /></a>
                             </div>
                         </div>
                         <div class="swiper-pagination slides-pagination"></div>
                     </div>
                     <!--tab切换-->
                     <div class="tab">
                         <div class="tabset1 pws_tabs_list">
                             <div data-pws-tab="tab1" data-pws-tab-name="最新" class="pws_hide pws_tab_single pws_show" data-pws-tab-id="1">
                                 <div class="tab_list ">
                                     <ul>
                                         <li
                                            v-for="(list,index) in handleinfolist7"
                                         >
                                             <a :href="'#/infocontent?id='+list.Id">
                                                 <div class="tab_icon">[{{list.Tag}}]</div>
                                                 <div class="tab_title">{{list.Title}}</div>
                                                 <div class="tab_date">【{{list.Addtime}}】</div>
                                             </a>
                                         </li>
                                     </ul>
                                 </div>
                             </div>
                             <div data-pws-tab="tab2" data-pws-tab-name="公告" class="pws_hide pws_tab_single" data-pws-tab-id="2">
                                 <div class="tab_list ">
                                     <ul>
                                         <li
                                             v-for="(list,index) in noticelist7"
                                         >
                                             <a :href="'#/infocontent?id='+list.Id">
                                                 <div class="tab_icon">[公告]</div>
                                                 <div class="tab_title">{{list.Title}}</div>
                                                 <div class="tab_date">【{{list.Addtime}}】</div>
                                             </a>
                                         </li>
                                     </ul>
                                 </div>
                             </div>
                             <div data-pws-tab="tab3" data-pws-tab-name="活動" class="pws_hide pws_tab_single" data-pws-tab-id="3">
                                 <div class="tab_list ">
                                     <ul>
                                         <li
                                            v-for="(list,index) in activitylist7"
                                         >
                                             <a :href="'#/infocontent?id='+list.Id">
                                                 <div class="tab_icon">[活動]</div>
                                                 <div class="tab_title">{{list.Title}}</div>
                                                 <div class="tab_date">【{{list.Addtime}}】</div>
                                             </a>
                                         </li>
                                     </ul>
                                 </div>
                             </div>
                             <div data-pws-tab="tab4" data-pws-tab-name="合服" class="pws_hide pws_tab_single" data-pws-tab-id="4">
                                 <div class="tab_list ">
                                     <ul>
                                         <li
                                            v-for="(list,index) in suit7"
                                         >
                                             <a :href="'#/infocontent?id='+list.Id">
                                                 <div class="tab_icon">[合服]</div>
                                                 <div class="tab_title">{{list.Title}}</div>
                                                 <div class="tab_date">【{{list.Addtime}}】</div>
                                             </a>
                                         </li>
                                     </ul>
                                 </div>
                             </div>
                             <div data-pws-tab="tab5" data-pws-tab-name="攻略" class="pws_hide pws_tab_single" data-pws-tab-id="5">
                                 <div class="tab_list ">
                                     <ul>
                                         <li
                                         v-for="(list,index) in strategy7"
                                         >
                                             <a :href="'#/infocontent?id='+list.Id">
                                                 <div class="tab_icon">[攻略]</div>
                                                 <div class="tab_title">{{list.Title}}</div>
                                                 <div class="tab_date">【{{list.Addtime}}】</div>
                                             </a>
                                         </li>
                                     </ul>
                                 </div>
                             </div>
                         </div>
                         <a href="#/infolist" class="btn-more">+</a>
                     </div>
                    </div>
         
                 <!--角色展示-->
                 <div id="role" class="role">
                     <h1 class="title"><img src="img/title-2.png" alt=""></h1>
                     <div class="role-content">
                         <ul class="role-carousel">
                             <li class="role-item">
                                 <!-- <p class="role-word"><img src="img/role-word-1.png" alt=""></p> -->
                                 <div class="role-pic"><img src="img/role1.png" alt=""></div>
                             </li>
                             <li class="role-item">
                                 <!-- <p class="role-word"><img src="img/role-word-2.png" alt=""></p> -->
                                 <div class="role-pic"><img src="img/role2.png" alt=""></div>
                             </li>
                             <li class="role-item">
                                 <!-- <p class="role-word"><img src="img/role-word-3.png" alt=""></p> -->
                                 <div class="role-pic"><img src="img/role3.png" alt=""></div>
                             </li>
                             <li class="role-item">
                                 <!-- <p class="role-word"><img src="img/role-word-4.png" alt=""></p> -->
                                 <div class="role-pic"><img src="img/role4.png" alt=""></div>
                             </li>
                         </ul>
                         <ul class="role-index"></ul>
                         <div class="role-carousel-prev"></div>
                         <div class="role-carousel-next"></div>
                     </div>
                    </div>
         
                 <!--游戏特色section-->
                 <div id="feature" class="feature">
                     <h1 class="title"><img src="img/title-3.png" alt=""></h1>
                     <div class="swiper-container features">
                         <div class="swiper-wrapper">
                             <div class="swiper-slide">
                                 <a href="javascript:void (0);"><img src="img/fpic1.jpg" alt="" /></a>
                             </div>
                             <div class="swiper-slide">
                                 <a href="javascript:void (0);"><img src="img/fpic2.jpg" alt="" /></a>
                             </div>
                             <div class="swiper-slide">
                                 <a href="javascript:void (0);"><img src="img/fpic3.jpg" alt="" /></a>
                             </div>
                             <!-- <div class="swiper-slide">
                                 <a href="javascript:void (0);"><img src="img/feature-pic-4.jpg" alt="" /></a>
                             </div>
                             <div class="swiper-slide">
                                 <a href="javascript:void (0);"><img src="img/feature-pic-5.jpg" alt="" /></a>
                             </div> -->
                         </div>
                         <!-- <div class="swiper-pagination features-pagination"></div> -->
                          <div class="swiper-button-prev features-button-prev"></div>
                          <div class="swiper-button-next features-button-next"></div>
                     </div>
                    </div>
             </div>
</template>


<script>
    import axios from 'axios'
    import url from '../api/index.js'

    export default {
        name: 'index',
        props: {
            handleinfolist7: { //所有资讯
                required: true
            },
            noticelist7: {
                required: true
            },
            activitylist7: {
                required: true
            },
            suit7: {
                required: true
            },
            openserver7: {
                required: true
            },
            strategy7: {
                required: true
            }
        },
        data() {
            return {}
        },
        created() {},
        methods: {}
    }
</script>

<style>

</style>