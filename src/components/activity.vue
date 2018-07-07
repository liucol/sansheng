<template>
    <div class="art_bg">
        <article class="art_wrap">
            <h3 class="local">活动中心</h3>
            <div class="art-tab">
                <a href="#/notice" class="">公告</a>
                <a href="#/activity" id="infoactive">活动</a>
                <!-- <a href="#/openserviceinfo" class="">开服</a> -->
                <a href="#/suit" class="">合服</a>
                <a href="#/gamestrategy" class="">攻略</a>
            </div>
            <ul class="art-list">
                <li
                    v-for="(list,index) in activitylist"
                >
                    <i class="gg_i">活动</i>
                    <a :href="'#/new?id='+list.Id">【活动】{{list.Title}}</a>
                    <span>{{list.Addtime}}</span>
                </li>
            </ul>
        </article>
    </div>
</template>
<script>
    export default {
        name: 'activity',
        props: {
            activitylist:{
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