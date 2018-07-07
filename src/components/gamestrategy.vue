<template>
    <div class="art_bg">
        <article class="art_wrap">
            <h3 class="local">游戏攻略</h3>
            <div class="art-tab">
                <a href="#/notice" class="">公告</a>
                <a href="#/activity" class="">活动</a>
                <!-- <a href="#/openserviceinfo" class="">开服</a> -->
                <a href="#/suit" class="">合服</a>
                <a href="#/gamestrategy" class="" id="infoactive">攻略</a>
            </div>
            <ul class="art-list">
                <li
                    v-for="(list,index) in strategy"
                >
                    <i class="gg_i">游戏</i>
                    <a :href="'#/new?id='+list.Id">【攻略】{{list.Title}}</a>
                    <span>{{list.Addtime}}</span>
                </li>
            </ul>
        </article>
    </div>
</template>
<script>
    export default {
        name: 'gamestrategy',
        props: {
            strategy:{
                required: true
            }
        }
    }
</script>
<style>
    #infoactive{
        background-color: #8E0E4C;
    }
</style>