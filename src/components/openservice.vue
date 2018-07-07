<template>
        <article class="art_wrap">
                <h3 class="local">开服表</h3>
                <div class="__data__" data_id="__data__[15608]" page="article" postfix="category_12317" style="display: none; ">
                    <div></div>
                    <span>开服列表调用</span>
                </div>
                <ul class="kai_ul">
                    <li class="kai_tit">
                        <span class="k1">游戏名称</span>
                        <span class="k2">日期</span>
                        <span class="k3">时间</span>
                        <span class="k4">区服</span>
                        <span class="k5">下载</span>
                    </li>
                    <li
                        v-for="(list,index) in openservicelist"
                    >
                        <span class="k1">{{list.Game.Name}}</span>
                        <span class="k2">{{list.time1}}</span>
                        <span class="k3">{{list.time2}}</span>
                        <span class="k4">{{list.Name}}</span>
                        <span class="k5">
                            <a href="#/gift" class="kgift">
                                <img src="static/sanshengsanshi/image/kgift.png-20180509113549.png" alt="" title="" />
                            </a>
                            <a :href="list.Game.DownPath" @click="Down()" class="kdown">
                                <img src="static/sanshengsanshi/image/kdown.png-20180509113549.png" alt="" title="" />
                            </a>
                        </span>
                    </li>
                </ul>
            </article>
</template>
<script>
    //import url from '../api/api.js'
    import axios from 'axios' 

    export default {
        name: 'openservice',
        props: {
            openservicelist:{
              required: true
            }
          },
        data () {
            return {
            }
        },
        methods: {
            Down(){
                this.$parent.Down()
            }
        }
    }
</script>