<template>
    <div class="banner">
        <div class="banner_text"></div>
        <!--<div class="timer_user">-->
            <!--<h1 class="pull-left">{{currentTime}}</h1>-->
            <!--<div class="pull-left user">-->
                <!--<p>{{currentStatus}}好</p>-->
                <!--<p>{{currentDate}}</p>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
//	import moment from 'moment';
//	moment.locale('zh-cn');
	export default {
//		data () {
//			return {
//				currentTime: '00:00:00',
//				currentDate: '0000-00-00',
//				currentStatus: '早上'
//			}
//		},
		computed: {},
//		created: function () {
//			setInterval(() => {
//				this.currentTime = moment().format('HH:mm:ss');
//				this.currentDate = moment().format('YYYY-MM-DD');
//				this.currentStatus = moment().format('a');
//			}, 1000);
//		}
	}
</script>

<style lang="less" scoped>
    @import "../../lib/style/color";

    .banner {
        background: url("../../imgs/img_moning.jpg") 0 0 no-repeat;
        background-size: cover;
        background-position: center center;
        height: 540px;
        min-width: 640px;
        position: relative;
        .banner_text {
            background: url("../../imgs/motto_text.png") 0 0 no-repeat;
            width: 600px;
            height: 268px;
            background-size: 600px;
            position: absolute;
            top: 120px;
            left: 50%;
            margin-left: -300px;
        }
        .timer_user {
            position: absolute;
            width: 320px;
            height: 75px;
            bottom: 60px;
            left: 50%;
            margin-left: -170px;
            background-color: @background-color350;
            border-radius: 999px;
            box-shadow: 0 4px 4px 1px rgba(0, 0, 0, 0.15);
            h1 {
                font-weight: lighter;
                font-size: 50px;
                padding: 0 20px 0 20px;
            }
            div {
                padding: 15px 0 0 0;
            }
        }
    }
</style>
