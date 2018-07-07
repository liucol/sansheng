<template>
    <div class="inside_con">
        <ul>
            <li class="game-row main-gift"
                v-for="(list,index) in maingift"
            >
                    <a class="game-link-new">
                        <div class="game-icon-new">
                            <img src="static/sanshengsanshi/image/icon.png">
                        </div>
                        <div class="game-msg-new">
                            <div class="gamei-title">{{list.Name}}</div>
                            <div class="game-summary">有效期：{{list.EffectiveTime}}至{{list.Deadline}}</div>
                            <div class="sum">
                                <span>剩余数量：</span> <span>{{list.Remaining}}</span>
                            </div>
                        </div>
                    </a>
                <div class="game-down-btn-new">
                    <a class="blue_down" @click="getgift()">领取</a>
                </div>
            </li>
        </ul>
        <div class="card_main">
            <div class="card_down">
                <!-- :href="maingift.Game.DownPath" -->
                <a  :href="maingift[0].Game.DownPath" @click="Down()">下载游戏</a>
            </div>
            <div class="card_con">
                <div>
                    <span>【礼包内容】</span>
                    <!-- 初级翅膀精华(绑) * 10、初级法宝精华(绑) * 10、1级蓝宝石(绑) * 1、1级红宝石(绑) * 1 -->
                    {{maingift[0].Description}}
                </div>
                <div>
                    <span>【兑换方式】游戏界面福利-礼包兑换</span>
                </div>
            </div>
        </div>
        <div class="game_tit">
            <a class="cur">其他礼包</a>
        </div>
        <ul>
            <li class="game-row"
                v-for="(list,index) in othergiftlist"
            >
                <a class="game-link-new">
                    <div class="game-icon-new">
                        <img src="static/sanshengsanshi/image/icon.png">
                    </div>
                    <div class="game-msg-new">
                        <div class="gamei-title">{{list.Name}}</div>
                        <div class="game-summary">有效期：{{list.EffectiveTime}}至{{list.Deadline}}</div>
                        <div class="sum">
                            <span>剩余数量：</span> <span>{{list.Remaining}}</span>
                        </div>
                    </div>
                </a>
                <div class="game-down-btn-new">
                    <a class="blue_down" @click="getgift()">领取</a>
                </div>
            </li>
            <!-- <li class="game-row">
                <a class="game-link-new">
                    <div class="game-icon-new">
                        <img src="static/sanshengsanshi/image/logo.png">
                    </div>
                    <div class="game-msg-new">
                        <div class="gamei-title">【圣墟】特权礼包</div>
                        <div class="game-summary">有效期：2017-12-30至2018-12-31</div>
                        <div class="sum">
                            <span>剩余数量：</span> <span>15545</span>
                        </div>
                    </div>
                </a>
                <div class="game-down-btn-new">
                    <a class="blue_down">领取</a>
                </div>
            </li> -->
        </ul>
        <div class="popwrap" v-show="pop">
            <div class="pop">
                <div class="title">亲爱的玩家，您好：</div>
                <div class="content">
                    <p class="p1">如需获得<span>【三生三世】特权礼包请联系客服</span></p>
                    <p>客服联系方式为：customerservice01cx@gmail.com</p>
                </div>
                <div class="btn">
                    <p><span class="ensure" @click="closepop()">确定</span></p>
                </div>
            </div>
        </div>
       
    </div>
</template>
<script>
    //import url from '../api/api.js'
    import axios from 'axios' 

    export default {
        name: 'gift',
        props: {
            maingift:{
              required: true
            },
            othergiftlist:{
              required: true
            }
          },
        data () {
            return {
                pop: false
            }
        },
        methods: {
            getgift(){
                this.pop = true
            },
            closepop(){
                this.pop = false
            },
            Down(){
                this.$parent.Down()
            }
        }
    }
</script>
<style>
    .main-gift{
        padding-top: .3rem;
    }
    .popwrap{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,.4);
        z-index: 10;
    }
    .pop{
        position: absolute;
        padding: 70px 50px;
        width: 70%;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        border-radius: 20px;
        font-size: .23rem;
        background-color: #fff;
    }
    .content{
        margin-top: 25px;
        margin-bottom:  90px;
    }
    .content p{
        line-height: .4rem;
    }
    .pop .content .p1{
        text-indent: 48px;
    }
    .btn p{
        text-align: center;
    }
    .ensure{
        display: inline-block;
        padding: 10px 100px;
        background-color: #6AA84F;
        color: #fff;
        -moz-box-shadow:-3px 3px 12px #333333;
        -webkit-box-shadow:-3px 3px 12px #333333;
        box-shadow:-3px 3px 12px #333333;
        border-radius: 5px;
    }
</style>