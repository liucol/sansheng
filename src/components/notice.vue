<template>
    <div class="art_bg">
        <article class="art_wrap">
                <h3 class="local">公告中心</h3>
                <div class="art-tab">
                    <a href="#/notice" class="" id="infoactive">公告</a>
                    <a href="#/activity" class="">活动</a>
                    <!-- <a href="#/openserviceinfo" class="" >开服</a>   @click="indexnv(3)" -->
                    <a href="#/suit" class="">合服</a>
                    <a href="#/gamestrategy" class="">攻略</a>
                </div>
                <ul class="art-list">
                    <li
                        v-for="(list,index) in noticelist"
                    >
                        <i class="gg_i">公告</i>
                        <a :href="'#/new?id='+list.Id">【公告】{{list.Title}}</a>
                        <span>{{list.Addtime}}</span>
                    </li>
                </ul>
            </article>
    </div>
</template>

<script>
export default {
    name: 'notice',
    props: {
      noticelist:{
        required: true
      }
    },
    methods:{
        indexnv(num){
            this.$emit('my-index',num)
        }
    }
}
</script>
<style>
    #infoactive{
        background-color: #8E0E4C;
    }
</style>