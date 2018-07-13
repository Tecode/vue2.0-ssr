import { listenerRouting, SETUSERINFO, GETUSERINFO } from '../actionTypes';
import { getUserInfoApi } from '../../api';

const LoginRegistration = {
	state: {
		activeNav: '/',
		userInfo: {},
	},
	mutations: {
		[listenerRouting](state, val) {
			state.activeNav = val;
		},
		[SETUSERINFO](state, data){
			state.userInfo = data;
		}
	},
	actions: {
		[GETUSERINFO]({state, commit, rootState}, value){
			getUserInfoApi()
			.then(((response) => {
				console.log(response.data);
				commit('SETUSERINFO', response.data);
			}))
			.catch((err) => {
				console.log(err.response.data);
			})
		}
	},
	getters: {
		// doneTodosCount () {
		// 	return 66666666666;
		// }
	}
};

export default LoginRegistration;