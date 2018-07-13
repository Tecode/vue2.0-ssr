<template>
    <div class="banner">
        <div class="content">
            <div class="_box">
                <div class="clearfix time_box">
                    <h1 class="text-center">{{currentTime}}</h1>
                    <h3 class="text-center">{{currentStatus}}好，欢迎留言与反馈</h3>
                    <p class="text-center">提示：只有用户处于登录状态才可以留言反馈</p>
                    <div class="text-center">
                        <button class="living_button" @click=" messegeAlert">我也说一句</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import moment from 'moment';
	moment.locale('zh-cn');
	import MessageItem from '../../components/message/MessageItem.vue'
	import {mapMutations, mapState, mapActions} from 'vuex';
	import {Message} from 'element-ui';

	export default {
		name: 'banner',
		props: ['id'],
		components: {
			MessageItem
		},
		data () {
			return {
				currentTime: '00:00',
				currentStatus: '早上'
			}
		},
		created: function () {
			setInterval(() => {
				this.currentTime = moment().format('HH:mm');
				this.currentStatus = moment().format('a');
			}, 1000);
		},
		methods: {
			messegeAlert: function () {
				if (this.name && this.name !== '') {
					this.togglePopup({popupShow: true})
				} else {
					Message({
						showClose: false,
						message: 'Sorry，请登录以后再留言！',
						type: 'error'
					});
				}
			},
			...mapMutations({
				togglePopup: 'TOGGLE_POPUP',
			})
		},
		computed: {
			...mapState({
				name: state => state.NavHeader.userInfo.user_name
			}),
		},
	}
</script>

<style lang="less" scoped>
    @import "../../lib/style/color";

    .banner {
        background: url("../../imgs/img_moning.jpg") 0 0 no-repeat;
        background-size: cover;
        background-position: center center;
        height: 540px;
        background-color: #223343;
        position: relative;
        min-width: 800px;
        ._box {
            position: absolute;
            top: 160px;
            left: 50%;
            margin-left: -390px;
            .time_box {
                h1 {
                    font-size: 120px;
                    font-weight: 400;
                    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
                    color: @white;
                }
                h3 {
                    font-weight: normal;
                    color: @white;
                    padding: .6em 0;
                }
                p {
                    color: @white;
                }
                .living_button {
                    background-color: @background-color50;
                    outline: none;
                    color: @white;
                    border: none;
                    font-size: 18px;
                    padding: 10px 25px;
                    font-weight: lighter;
                    margin-top: 1.0em;
                    cursor: pointer;
                }
                width: 780px;
                overflow: hidden;
                border-radius: @border-radius6;
            }
        }
    }
</style>
