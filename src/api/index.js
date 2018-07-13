import axios from 'axios';

// 拦截请求
axios.interceptors.response.use(function (response) {
	// console.log(response.data, '---------------');
	// Do something with response data
	return response;
}, function (error) {
	// Do something with response error
	return Promise.reject(error);
});

export const loginRequestApi = (param) => {
	return axios.post('/application/api/login', param);
};
export const registerRequestApi = (param) => {
	return axios.post('/application/api/register', param);
};
// 获取第三方登录信息
export const saveThreePartyInfoApi = (param) => {
	return axios.post('/application/api/saveLoginInfo', param);
};
//获取文章列表
export const getArticelListApi = ({index, size}) => {
	return axios.get('/application/api/getArticel', {params:{index :index, size: size}});
};
// 搜索文章内容
export const searchArticelListApi = ({keyWords, index, size}) => {
	return axios.get(`/application/api/search/${keyWords}`, {
		params:{index :index, size: size}
	});
};
// 获取文章api
export const getArticelApi = (id) => {
	return axios.get(`/application/api/getArticel/${id}`);
};
export const getUserInfoApi = (param) => {
	return axios.get('/application/api/userInfo');
};
// 留言
export const leavingMessageApi = (param) => {
	return axios.post('/application/api/leavingMessage', param);
};
// 获取留言内容
export const getLeavingMessageApi = ({index, size}) => {
	return axios.get('/application/api/getLeavingMessage', {params:{index :index, size: size}});
};
export const replyMessageApi = (param) => {
	return axios.post('/application/api/replyMessage', param);
};