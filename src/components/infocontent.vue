<template>
        <!--文章内容-->
        <section class="content">
            <div class="content-header">
                <div class="content-header-list">當前位置：
                    <a href="" class="content-header-list-link">官網首頁</a> >
                    <a href="javascript:history.back();" class="content-header-list-link">新聞資訊</a>
                </div>
            </div>
            <div class="content-main">
                <div class="content-main-inner">
                    <h2 class="content-main-title">{{info.Title}}</h2>
                    <p class="content-main-time">{{info.Addtime}} 瀏覽量：{{info.Views}}</p>
                    <div class="content-main-ctn mCustomScrollbar" data-mcs-theme="dark">
                    </div>
                </div>
            </div>
        </section>
    </template>
<script>
    import url from '../api/index.js'
    import axios from 'axios'
    import qs from 'qs'
    import $ from 'jquery'

    export default {
        name: 'Infocontent',
        data() {
            return {
                infoid: null,
                info: null
            }
        },
        created() {
            this.getinfoid()
            this.tagview()
            this.getcontent()
        },
        methods: {
            getinfoid() {
                let urlarry = location.hash.split('?')[1]

                this.infoid = qs.parse(urlarry).id

            },
            tagview() {
                axios.get(url.getoninfo + '/' + this.infoid + "/viewcount").then(res => {

                })
            },
            getcontent() {
                axios.get(url.getoninfo + '/' + this.infoid).then(res => {
                    var data = res.data.Data
                    this.info = data
                })
            }
        },
        beforeUpdate() {
            this.$nextTick(function() {
                var $content = $(".content-main-ctn")
                $content.html(this.info.Content)

                //滚动条
                // setTimeout(function() {
                //     $(".content-main-ctn").mCustomScrollbar({
                //         theme: "my-theme",
                //         scrollButtons: {
                //             enable: true
                //         }
                //     })
                // }, 10)

            })
        }
    }
</script>