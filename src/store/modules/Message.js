import {SHOW_MESSAGE} from '../actionTypes';

const Message = {
	state: {
		isShow: false,
		text: '登录成功',
		isError: false
	},
	mutations: {
		[SHOW_MESSAGE](state, {text, isError, isShow, time = 1500}){
			state.isShow = isShow;
			state.text = text;
			state.isError = isError;
			setTimeout(() => {
				state.isShow = false;
				state.text = '';
				state.isError = false;
			}, time)
		}
	}
};

export default Message;