<template>
    <div class="message text-center" :class="{normal:!isError,'error':isError,'message_show':isShow}">{{text}}</div>
</template>

<script>
	import {mapState} from 'vuex';

	export default {
		name: 'comment',
		props: ['id'],
		data () {
			return {
				open: true
			}
		},
		computed: {
			...mapState({
				isShow: state => state.Message.isShow,
				text: state => state.Message.text,
				isError: state => state.Message.isError,
			}),
		}
	}
</script>

<style lang="less" scoped>
    @import "../../lib/style/color";
    .message {
        position: fixed;
        width: 300px;
        top: 50px;
        left: 50%;
        margin-left: -160px;
        z-index: 1000;
        padding: 8px 10px;
        font-size: 16px;
        box-shadow: 0 4px 4px 2px rgba(0, 0, 0, 0.2);
        transition: all .2s;
        visibility: hidden;
        transform:rotateX(45deg);
    }
    .normal {
        background-color: @background-color50;
    }
    .error {
        background-color: @error;
    }
    .message_show{
        top: 60px;
        visibility: visible;
        transform:rotateX(0);
    }
</style>
