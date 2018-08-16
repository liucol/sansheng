<template>
    <!--活动title  活动list-->
    <section class="content">
        <div class="content-header">
            <div class="content-header-list">當前位置：
                <a href="" class="content-header-list-link">官網首頁</a> >
                <a href="javascript:void(0);" class="content-header-list-link">新聞資訊</a>
            </div>
        </div>
        <div class="content-main infolist-content-main">
            <ul class="content-main-tab">
                <li class="content-main-tab-item " :class="{active: tabindex == 1}"  @click="Tabswitch(1)"><a>公告</a></li>
                <li class="content-main-tab-item " :class="{active: tabindex == 2}"  @click="Tabswitch(2)"><a>活動</a></li>
                <li class="content-main-tab-item " :class="{active: tabindex == 3}"  @click="Tabswitch(3)"><a>合服</a></li>
                <li class="content-main-tab-item " :class="{active: tabindex == 4}"  @click="Tabswitch(4)"><a>攻略</a></li>
                <!--<li class="content-main-tab-item "><a href="javascript:void(0);">攻略</a></li>-->
            </ul>
            <div class="infolist-wp">
                <!--公告-->
                <ul class="content-main-list" :class="{active: tabindex == 1}">
                    <li class="content-main-list-item"
                        v-for="(list,index) in noticelist"
                    >
                        <a :href="'#/infocontent?id='+list.Id">
                            <span class="content-main-list-item_icon">[公告]</span>
                            <span class="content-main-list-item_title">{{list.Title}}</span>
                            <span class="content-main-list-item_date">【{{list.Addtime}}】</span>
                        </a>
                    </li>
                </ul>

                <!--活动-->
                <ul class="content-main-list" :class="{active: tabindex == 2}">

                    <li class="content-main-list-item"
                        v-for="(list,index) in activitylist"
                    >
                        <a :href="'#/infocontent?id='+list.Id">
                            <span class="content-main-list-item_icon">[活動]</span>
                            <span class="content-main-list-item_title">{{list.Title}}</span>
                            <span class="content-main-list-item_date">【{{list.Addtime}}】</span>
                        </a>
                    </li>

                </ul>

                <!--合服-->
                <ul class="content-main-list" :class="{active: tabindex == 3}">

                    <li class="content-main-list-item"
                        v-for="(list,index) in suit"
                    >
                        <a :href="'#/infocontent?id='+list.Id">
                            <span class="content-main-list-item_icon">[合服]</span>
                            <span class="content-main-list-item_title">{{list.Title}}</span>
                            <span class="content-main-list-item_date">【{{list.Addtime}}】</span>
                        </a>
                    </li>

                </ul>
                
                <!--攻略-->
                <ul class="content-main-list" :class="{active: tabindex == 4}">

                    <li class="content-main-list-item"
                        v-for="(list,index) in strategy"
                    >
                        <a :href="'#/infocontent?id='+list.Id">
                            <span class="content-main-list-item_icon">[攻略]</span>
                            <span class="content-main-list-item_title">{{list.Title}}</span>
                            <span class="content-main-list-item_date">【{{list.Addtime}}】</span>
                        </a>
                    </li>

                </ul>
            </div>

            <!-- <div class="content-main-page">
                <div class="content-main-page-list">
                    1/1 <a id='firstPageNow' href='javascript:void(0);'>首页</a> <a id='prevPageNow' href='javascript:void(0);'>上一页</a> <a id='nextPageNow' href='javascript:void(0);'>下一页</a> <a id='lastPageNow' href='javascript:void(0);'>尾页</a> </div>
            </div> -->
        </div>
    </section>
</template>
<script>
    export default {
        name: 'index',
        props: {
            noticelist: { //公告
                required: true
            },
            activitylist: { //活动
                required: true
            },
            suit: { //合服
                required: true
            },
            strategy: { //攻略
                required: true
            }
        },
        data() {
            return {
                tabindex: 1
            }
        },
        created() {

        },
        methods: {
            Tabswitch(index) {
                this.tabindex = index
            }
        }
    }
</script>
<style>
    .content-main-list {
        display: none;
    }
    
    .infolist-wp .active {
        display: block;
    }
</style>