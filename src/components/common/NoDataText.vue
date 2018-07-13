<template>
    <div class="none_data">
        <div class="title">{{title}}</div>
        <div class="discript">{{discript}}</div>
    </div>
</template>

<script>
	export default {
		name: 'comment',
		props: {
			title: {
				type: String,
				default: '暂时没有数据'
			},
			discript: {
				type: String,
				default: '请在搜索框输入关键词进行搜索'
			},
		},
		data () {
			return {
				open: true
			}
		},
		computed: {},
		methods: {}
	}
</script>

<style lang="less">
    .none_data{
        text-align: center;
        background-color: #f5f5f5;
        padding: 25px 0 0 0;
        margin: 15% 0;
        .title{
            font-size: 16px;
            color: #808080;
        }
        .discript{
            font-size: 14px;
            color: #808080;
            padding: 10px 0 25px 0;
        }
    }
</style>
