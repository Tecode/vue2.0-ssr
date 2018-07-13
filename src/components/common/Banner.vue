<template>
    <div class="banner" :style="{backgroundImage: `url(${imgUrl})`}">
        <div class="banner_text"></div>
        <div class="timer_user">
            <h1 class="pull-left">{{currentTime}}</h1>
            <div class="pull-left user">
                <p>{{currentStatus}}好</p>
                <p>{{currentDate}}</p>
            </div>
        </div>
    </div>
</template>

<script>
	import moment from 'moment';
	import img1 from '../../imgs/img_lijiang.jpg';
	import img2 from '../../imgs/img_mo_sun.jpg';
	import img3 from '../../imgs/img_road.jpg';
	import img4 from '../../imgs/img_sky_afternoon.jpg';
	import img5 from '../../imgs/img_sky_star.jpg';
	import img6 from '../../imgs/img_blue_sky.jpg';
	import img7 from '../../imgs/img_moning.jpg';
	moment.locale('zh-cn');
	export default {
		data () {
			return {
				currentTime: '00:00:00',
				currentDate: '0000-00-00',
				currentStatus: '早上',
			}
		},
		computed: {
			imgUrl: function () {
				const hour = moment().hour();
				if (hour >= 0  && hour < 4) {
					return img5;
                } else if (hour >= 4  && hour < 8) {
				    return img2;
                } else if (hour >= 8  && hour < 12) {
					return img6;
				} else if (hour >= 12  && hour < 16) {
					return img3;
				} else if (hour >= 16  && hour < 20) {
					return img4;
				} else if (hour >= 20  && hour < 24) {
					return img1;
				}
				return img7;
			}
		},
		created: function () {
			setInterval(() => {
				this.currentTime = moment().format('HH:mm:ss');
				this.currentDate = moment().format('YYYY-MM-DD');
				this.currentStatus = moment().format('a');
			}, 1000);
		}
	}
</script>

<style lang="less" scoped>
    @import "../../lib/style/color";

    .banner {
        background-color: #223343;
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: cover;
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
