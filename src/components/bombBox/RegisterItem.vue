<template>
    <div class="mask_box">
        <div class="mask" :class="{show: boxStatus === 'visible'}"></div>
        <div class="register" :class="{show: boxStatus === 'visible'}">
            <div class="box_header">
                <div class="close" @click="closePopup"></div>
            </div>
            <div class="box_body">
                <ul>
                    <li class="user_input">
                        <label for="user_name"></label>
                        <input @input="inputContent" type="text" id="user_name" placeholder="用户名"/>
                        <p></p>
                    </li>
                    <li class="user_email">
                        <label for="user_email"></label>
                        <input @input="inputContent" id="user_email" type="email" placeholder="邮箱账号"/>
                        <p></p>
                    </li>
                    <li class="user_password">
                        <label for="password"></label>
                        <input @input="inputContent" id="password" type="password" placeholder="登录密码6-15位"/>
                        <p></p>
                    </li>
                    <li class="user_confirm_password">
                        <label for="confirm_password"></label>
                        <input @input="inputContent" id="confirm_password" type="password" placeholder="重复密码6-15位"/>
                        <p :class="{error_tips:isError}">{{data.error}}</p>
                    </li>
                    <li class="submit">
                        <label for="submit"></label>
                        <input @click="registerRequest" type="button" value="立即注册" id="submit"/>
                        <loading-line v-if="loading"></loading-line>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
	import {mapMutations} from 'vuex';
	import {mapState} from 'vuex';
	import {mapActions} from 'vuex';
	import LoadingLine from '../../components/common/LoadingLine.vue';

	export default {
		name: 'comment',
		props: ['id'],
		components:{
		    LoadingLine
        },
		computed: {
			...mapState({
				boxStatus: state => state.LoginRegistration.boxStatus,
				boxOpacity: state => state.LoginRegistration.boxOpacity,
				loading: state => state.LoginRegistration.loading,
				isError: state => state.LoginRegistration.isError,
				data: state => state.LoginRegistration.data,

				user_email: state => state.LoginRegistration.user_email,
				password: state => state.LoginRegistration.password,
				user_name: state => state.LoginRegistration.user_name,
				confirm_password: state => state.LoginRegistration.confirm_password,
			}),
		},
		methods: {
			...mapMutations({
				closePopup: 'closePopup',
				inputContent: 'inputContent'
			}),
			...mapActions({
				registerRequest: 'registerRequest'
			})
		}
	}
</script>

<style lang="less" scoped>
    @import "../../lib/style/color";

    .mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: all .4s;
    }

    .register {
        border-radius: @border-radius6;
        overflow: hidden;
        position: fixed;
        top: 15%;
        left: 50%;
        margin-left: -160px;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: all .3s;
        box-shadow: 0 6px 38px 3px rgba(0, 0, 0, 0.4);
        .box_header {
            width: 320px;
            height: 50px;
            background: url("../../imgs/logo_lage.png") center center no-repeat;
            background-size: 100px;
            background-color: @background-color50;
            .close {
                position: absolute;
                top: 16px;
                right: 10px;
                background: url("../../imgs/close_button.png") 0 0 no-repeat;
                background-size: 15px;
                width: 15px;
                height: 15px;
                transition: all .4s ease-out;
                cursor: pointer;
                &:hover {
                    transform: rotate(-180deg);
                }
            }
        }
        .box_body {
            background-color: @white;
            padding: 20px 0 20px 0;
            li {
                width: 260px;
                margin: 0 auto;
                input {
                    border: 1px solid @background-color50;
                    outline: none;
                    border-radius: @border-radius6;
                    padding: 5px 5px 3px 35px;
                    width: 218px;
                    height: 25px;
                    color: @background-color50;
                    font-size: 14px;
                    line-height: 1.4em;
                    transition: all .4s;
                    &:focus {
                        color: @text100;
                    }
                }
                .error_tips {
                    background: url("../../imgs/icon_remind.png") 0 1px no-repeat;
                    background-size: 16px;
                    font-size: 14px;
                    padding-left: 18px;
                    color: @error;
                    margin: 4px 0 5px 0;
                }
            }
            p{
                height: 19px;
                padding-left: 18px;
                margin: 4px 0 5px 0;
            }
            .submit {
                input {
                    border: none;
                    background-color: @background-color50;
                    width: 260px;
                    height: 38px;
                    padding: 0;
                    color: @text100;
                    cursor: pointer;
                    transition: all .2s;
                    &:hover {
                        background-color: #fee14c;
                    }
                }
            }
            .user_input {
                input {
                    background: url("../../imgs/icon_user.png") 10px center no-repeat;
                    background-size: 16px;
                }
            }
            .user_password {
                input {
                    background: url("../../imgs/icon_lock.png") 10px center no-repeat;
                    background-size: 16px;
                }
            }
            .user_email {
                input {
                    background: url("../../imgs/icon_email.png") 10px center no-repeat;
                    background-size: 18px;
                }
            }
            .user_confirm_password {
                input {
                    background: url("../../imgs/icon_serice.png") 10px center no-repeat;
                    background-size: 18px;
                }
            }
        }
        .padding_bot{
            padding-bottom: 40px;
        }
    }

    .show {
        opacity: 1;
        visibility: visible;
    }
</style>
