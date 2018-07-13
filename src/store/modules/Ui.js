import {
	SET_INDEX_SIZE,
	TOGGLE_POPUP,
} from '../actionTypes';

const Ui = {
	state: {
		index: 1,
		size: 10,
		popupShow: false,
	},
	mutations: {
		[SET_INDEX_SIZE](state, {index, size}){
			state.index = index;
			state.size = size;
		},
		[TOGGLE_POPUP](state, {popupShow}){
			if (popupShow) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = null;
			}
			state.popupShow = popupShow;
		},
	}
};

export default Ui;