<template>
    <div>
        <div class="mask" :class="{show:popupShow}"></div>
        <div class="popup_write" :class="{show:popupShow}">
            <div class="top_header">
                <div class="close_popup" @click="closePopup"></div>
            </div>
            <p class="tip_text">说点什么吧！</p>
            <div class="write_box">
                <label for="write_box"></label>
                <textarea id="write_box" v-model="messege" @input="inoutLivingMessege"></textarea>
                <div class="button clearfix">
                    <span class="tips pull-left">回复的内容不能为空且不能小于2个字符！</span>
                    <span class="call pull-right" v-if="!load" @click="livingMessegePost">提交</span>
                    <span class="loading pull-right" v-if="load">请稍后...</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import {mapMutations, mapState, mapActions} from 'vuex';
	export default {
		name: 'popupWrite',
		computed: {
			...mapState({
				popupShow: state => state.Ui.popupShow,
				messege: state => state.LivingMessege.messege,
				load: state => state.LivingMessege.loading,
			}),
		},
		methods: {
			closePopup: function () {
				this.togglePopup({popupShow: false});
				this.clearData({moudle: 'messege', data: ''});
			},
			...mapMutations({
				togglePopup: 'TOGGLE_POPUP',
				inoutLivingMessege: 'INPUT_LIVING_MESSEGE',
                clearData: 'CLEAN_DATA',
			}),
			...mapActions({
				livingMessegePost: 'LIVING_MESSEGE_POST',
			})
		}
	}
</script>

<style lang="less" scoped>
    @import "../../lib/style/color";
    .loading{
        color: @color808;
        border: 1px solid @color808;
        padding: 2px 15px 2px 15px;
        border-radius: @border-radius6;
        background-size: 16px;
        background-color: @white100;
        cursor: not-allowed;
    }
    .mask {
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1000;
        visibility: hidden;
        opacity: 0;
        transition: all .3s;
    }

    .popup_write {
        position: fixed;
        z-index: 1000;
        top: 10em;
        left: 50%;
        width: 720px;
        height: 280px;
        margin-left: -360px;
        background-color: @white;
        border-radius: @border-radius6;
        overflow: hidden;
        visibility: hidden;
        opacity: 0;
        transition: all .3s;
        .tip_text {
            padding: 10px 0 10px 30px;
            color: #ff7300;
        }
        .top_header {
            height: 50px;
            background: url("../../imgs/logo_lage.png") 30px 10px no-repeat;
            background-color: @background-color50;
            background-size: 120px;
            position: relative;
            .close_popup {
                background: url("../../imgs/close_button.png") 0 0 no-repeat;
                background-size: 14px;
                width: 15px;
                height: 15px;
                position: absolute;
                top: 18px;
                right: 30px;
                cursor: pointer;
                transition: all .4s;
                &:hover {
                    transform: rotate(-90deg);
                    -ms-transform: rotate(-90deg); /* IE 9 */
                    -moz-transform: rotate(-90deg); /* Firefox */
                    -webkit-transform: rotate(-90deg); /* Safari 和 Chrome */
                    -o-transform: rotate(-90deg);
                }
            }
        }
        .write_box {
            max-width: 680px;
            margin: 0 30px 0 30px;
            textarea {
                width: 650px;
                margin-left: 4px;
                resize: none;
                height: 100px;
                outline: none;
                font-size: 14px;
                padding-top: 8px;
                border: 1px solid @color204;
                color: #223343;
                border-radius: 8px;
                text-indent: .5em;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            }
            .button {
                margin: 10px 0;
                .call {
                    color: @background-color50;
                    border: 1px solid @background-color50;
                    padding: 2px 15px 2px 30px;
                    border-radius: @border-radius6;
                    background: url("../../imgs/icon_paperplane_w.png") 10px 4px no-repeat;
                    background-size: 16px;
                    cursor: pointer;
                    transition: all .2s;
                    &:hover {
                        background: url("../../imgs/icon_paperplane_black.png") 10px 4px no-repeat;
                        background-size: 16px;
                        background-color: @background-color50;
                        color: #24283b;
                    }
                }
                .tips {
                    margin-left: 4px;
                    margin-top: 2px;
                    padding-left: 20px;
                    background: url("../../imgs/icon_Info_b.png") 0 2px no-repeat;
                    background-size: 17px;
                }
            }
        }
    }

    .show {
        visibility: visible;
        opacity: 1;
    }
</style>
