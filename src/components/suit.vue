<template>
    <div class="art_bg">
        <article class="art_wrap">
                <h3 class="local">合服中心</h3>
                <div class="art-tab">
                    <a href="#/notice" class="">公告</a>
                    <a href="#/activity" class="">活动</a>
                    <!-- <a href="#/openserviceinfo" class="">开服</a> -->
                    <a href="#/suit" class="" id="infoactive">合服</a>
                    <a href="#/gamestrategy" class="">攻略</a>
                </div>
                <ul class="art-list">
                    <li
                        v-for="(list,index) in suit"
                    >
                        <i class="gg_i">合服</i>
                        <a :href="'#/new?id='+list.Id">【合服】{{list.Title}}</a>
                        <span>{{list.Addtime}}</span>
                    </li>
                </ul>
            </article>
    </div>
</template>
<script>
    export default {
        name: 'suit',
        props: {
            suit:{
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