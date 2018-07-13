import {
	INPUT_LIVING_MESSEGE,
	LIVING_MESSEGE_POST,
	CLEAN_DATA,
	REPLY_MESSEGE_INFO,
	REPLY_MESSEGE_POST,
	GET_MESSEGE_INFO_LIST,
	RESET_LIVING_MESSEGE
} from '../actionTypes';
import {Message} from 'element-ui';
import {
	leavingMessageApi,
	replyMessageApi,
	getLeavingMessageApi
} from '../../api';

const getListAgin = ({index, size}) => {
	return new Promise(function (resolve, reject) {
		getLeavingMessageApi({index, size})
		.then(({data}) => {
			resolve(data);
		})
		.catch((err) => {
			reject(err);
		});
	});
};

const LivingMessege = {
	state: {
		messege: '',
		activeId: '',
		contentList: [],
		total: 0,
		loading: false,
	},
	mutations: {
		[INPUT_LIVING_MESSEGE](state, event){
			state.messege = event.target.value;
		},
		[CLEAN_DATA](state, {moudle, data}){
			state[moudle] = data;
		},
		[REPLY_MESSEGE_INFO](state, id) {
			console.log(id);
			state.activeId = id;
		},
		[RESET_LIVING_MESSEGE](state) {
			state.messege = '';
			state.activeId = '';
			state.contentList = [];
			state.total = 0;
			state.loding = false;
		}
	},
	actions: {
		[LIVING_MESSEGE_POST]({state, commit, rootState}, value){
			if (state.messege === '') {
				Message({
					showClose: false,
					message: '内容不能为空！',
					type: 'error'
				});
			} else if (state.messege.length > 200) {
				Message({
					showClose: false,
					message: '内容不能超过200个字符！',
					type: 'error'
				});
			} else {
				commit('CLEAN_DATA', {moudle: 'loading', data: true});
				leavingMessageApi({
					name: rootState.NavHeader.userInfo.user_name,
					imgUrl: '',
					content: state.messege
				}).then((response) => {
					commit('CLEAN_DATA', {moudle: 'loading', data: false});
					Message({
						showClose: false,
						message: '留言成功，谢谢！',
						type: 'success'
					});
					commit('TOGGLE_POPUP', {popupShow: false});
					commit('CLEAN_DATA', {moudle: 'messege', data: ''});
					// 重新获取留言列表
					commit('CLEAN_DATA', {moudle: 'contentList', data: []});
					getListAgin({
						index: rootState.Ui.index,
						size: rootState.Ui.size,
					}).then((data) => {
						commit('CLEAN_DATA', {moudle: 'contentList', data: data.data});
						commit('CLEAN_DATA', {moudle: 'total', data: data.total});
					}).catch(() => {
						Message({
							showClose: false,
							message: err.response.data.msg,
							type: 'error'
						});
					});
				}).catch((err) => {
					Message({
						showClose: false,
						message: err.response.data.messege,
						type: 'error'
					});
					commit('CLEAN_DATA', {moudle: 'loading', data: false});
				})
			}
		},
		[REPLY_MESSEGE_POST]({state, commit, rootState}, {parentId, beAnswered}){
			if (state.messege === '') {
				Message({
					showClose: false,
					message: '内容不能为空！',
					type: 'error'
				});
			} else if (state.messege.length > 240) {
				Message({
					showClose: false,
					message: '内容不能超过240个字符！',
					type: 'error'
				});
			} else {
				commit('CLEAN_DATA', {moudle: 'loading', data: true});
				replyMessageApi({
					name: rootState.NavHeader.userInfo.user_name,
					content: state.messege,
					parentId,
					beAnswered
				}).then((response) => {
					Message({
						showClose: false,
						message: '回复成功，谢谢！',
						type: 'success'
					});
					commit('CLEAN_DATA', {moudle: 'loading', data: false});
					let newArr = [];
					state.contentList.forEach((item) => {
						if (item.id === parentId) {
							item.content.push(
							{
								id: response.data.id,
								name: response.data.name,
								imgUrl: '',
								messege: state.messege,
								dateTime: response.data.time,
							});
						}
						newArr = [...newArr, item]
					});
					commit('CLEAN_DATA', {moudle: 'contentList', data: newArr});
					commit('CLEAN_DATA', {moudle: 'messege', data: ''});
					commit('CLEAN_DATA', {moudle: 'activeId', data: ''});
				}).catch((err) => {
					Message({
						message: err && err.response.data.msg,
						type: 'error'
					});
					commit('CLEAN_DATA', {moudle: 'loading', data: false});
				})
			}
		},
		[GET_MESSEGE_INFO_LIST]({state, commit, rootState}, {index, size}) {
			commit('CLEAN_DATA', {moudle: 'contentList', data: []});
			getLeavingMessageApi({index, size})
			.then(({data}) => {
				commit('CLEAN_DATA', {moudle: 'contentList', data: data.data});
				commit('CLEAN_DATA', {moudle: 'total', data: data.total});
			})
			.catch((err) => {
				Message({
					showClose: false,
					message: err.response.data.msg,
					type: 'error'
				});
			})
		}
	}
};

export default LivingMessege;