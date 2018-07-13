import {
	loginRequestApi,
	registerRequestApi,
	saveThreePartyInfoApi
} from '../../api';
import CryptoJS from 'crypto-js';
import {Message} from 'element-ui';
import {
	loginRegistration,
	closePopup,
	request,
	inputContent,
	loginRequest,
	registerRequest,
	SAVE_TREE_PARTY_INFO,
	SAVE_TREE_PARTY_INFO_REQUEST
} from '../actionTypes';
import axios from 'axios';
import Cookies from 'js-cookie';

const LoginRegistration = {
	state: {
		boxStatus: 'hidden',
		boxType: 'login',
		loading: false,
		isError: false,
		data: '',

		user_email: '',
		password: '',
		user_name: '',
		confirm_password: '',

		loginError: false,

		registerError: false,
		registerLoading: true,

		user_emailError: false,
		passwordError: false,
		user_nameError: false,
		confirm_passwordError: false,
	},
	mutations: {
		[loginRegistration](state, value) {
			state.boxStatus = 'visible';
			state.boxType = value;
			document.body.style.overflow = 'hidden';
		},
		[closePopup](state) {
			state.boxStatus = 'hidden';
			state.user_email = '';
			state.password = '';
			state.user_name = '';
			state.confirm_password = '';
			state.isError = false;
			state.data = '';
			document.body.style.overflow = null;
		},
		[request](state, {loading, isError, data}) {
			state.loading = loading;
			state.isError = isError;
			state.data = data;
		},
		[inputContent](state, event){
			state.isError = false;
			state.data = '';
			state[event.target.id] = event.target.value;
		},
		[SAVE_TREE_PARTY_INFO](state, {openId, accessToken}){
			Cookies.set('openId', openId, {expires: 30, path: '/'});
			Cookies.set('accessToken', accessToken, {expires: 30, path: '/'});
		}
	},
	actions: {
		[loginRequest]({state, commit, rootState}, value){
			commit('request', {
				loading: true,
				isError: false,
				data: ''
			});
			// 加密密码
			const key = CryptoJS.enc.Hex.parse('0123456789abcdef0123456789abcdef');
			const iv = CryptoJS.enc.Hex.parse('abcdef9876543210abcdef9876543210');
			const encrypted = CryptoJS.AES.encrypt(state.password, key, {iv: iv});
			const password_base64 = encrypted.ciphertext.toString(CryptoJS.enc.Base64);

			if (state.boxType === 'login') {
				if (!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(state.user_email)) {
					commit('request', {
						loading: false,
						isError: true,
						data: {error: '邮箱格式错误！'}
					});
				} else if (state.password.length < 1) {
					commit('request', {
						loading: false,
						isError: true,
						data: {error: '密码不能为空！'}
					});
				} else {
					loginRequestApi({user_email: state.user_email, password: password_base64}).then((response) => {
						commit('request', {loading: false});
						commit('request', {
							loading: false,
							isError: false,
							data: response
						});
						// 登录成功
						Message({
							showClose: false,
							message: '登录成功！',
							type: 'success'
						});
						commit('closePopup');
						commit('SETUSERINFO', response.data)
					}).catch((err) => {
						commit('request', {
							loading: false,
							isError: true,
							data: err.response.data
						});
						console.log(err.response.data.error);
					});
				}
			}
		},
		[registerRequest]({state, commit, rootState}, value){
			const encryptionPassword = (passWord) => {
				// 加密密码
				const key = CryptoJS.enc.Hex.parse('0123456789abcdef0123456789abcdef');
				const iv = CryptoJS.enc.Hex.parse('abcdef9876543210abcdef9876543210');
				const encrypted = CryptoJS.AES.encrypt(passWord, key, {iv: iv});
				return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
			};
			commit('request', {
				loading: true,
				isError: false,
				data: ''
			});
			if (state.boxType === 'registration') {
				const Trim = (str) => {
					return str.replace(/(^\s*)|(\s*$)/g, "");
				};
				if (Trim(state.user_name).length < 1) {
					commit('request', {
						loading: false,
						isError: true,
						data: {error: '用户名不能为空！'}
					});
				} else if (!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(state.user_email)) {
					commit('request', {
						loading: false,
						isError: true,
						data: {error: '邮箱格式错误！'}
					});
				} else if (!/^(\w){6,15}$/.test(Trim(state.password))) {
					commit('request', {
						loading: false,
						isError: true,
						data: {error: '密码格式错误！'}
					});
				} else if (Trim(state.password) !== Trim(state.confirm_password)) {
					commit('request', {
						loading: false,
						isError: true,
						data: {error: '两次输入密码不一致！'}
					});
				}
				else {
					registerRequestApi({
						email: state.user_email,
						name: state.user_name,
						password: encryptionPassword(state.password)
					})
					.then((response) => {
						commit('request', {loading: false});
						commit('request', {
							loading: false,
							isError: false,
							data: response
						});
						commit('closePopup');
						// 登录成功
						Message({
							showClose: false,
							message: '注册成功！',
							type: 'success'
						});
						commit('SETUSERINFO', response.data)
					}).catch((err) => {
						commit('request', {
							loading: false,
							isError: true,
							data: err.response.data
						});
					});
				}
			}
		},
		[SAVE_TREE_PARTY_INFO_REQUEST]({state, commit, rootState}){
			axios.get('/agentQQ', {
				params:{
					access_token: Cookies.get()['accessToken'],
					oauth_consumer_key: '101415597',
					openid: Cookies.get()['openId'],
				}
			})
			.then(({data}) => {
				if (data.ret !== -1) {
					// 得到用户信息赋值
					commit('SETUSERINFO', {
						'user_name': data.nickname,
						'user_sex': data.gender,
						'user_img': data.figureurl_2,
					});
					// 登录成功
					Message({
						showClose: false,
						message: '登陆成功！',
						type: 'success'
					});
				}
				// 保存用户授权信息到数据库
				saveThreePartyInfoApi(data)
				.then((response) => {

				})
				.catch( (err) => {

				})
			})
			.catch((err) => {
				console.log(err.response);
			});
		}
	},
	getters: {
		// doneTodosCount () {
		// 	return 66666666666;
		// }
	}
};

export default LoginRegistration;