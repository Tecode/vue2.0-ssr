<template>
    <div class="update_log">
        <h3 class="big_title text-center">
            <span>博客更新日志</span>
        </h3>
        <div class="container">
            <div class="row">
                <ul class="col-md-7 col-md-offset-3 time-line">
                    <li v-for="items in listData">
                        <update-log-item :items="items"></update-log-item>
                    </li>
                </ul>
            </div>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
	import UpdateLogItem from '../components/updateLog/UpdateLogItem.vue'
	import NavFooter from '../components/common/Footer.vue'
	export default {
		name: 'update_log',
		props: ['id'],
		components: {
			UpdateLogItem,
			NavFooter
		},
		data () {
			return {
				listData: [
					{
						version: '1.0.0',
						platform: '电脑端',
						date: '2017-05-12',
						content: [
							'完成网站的UI设计制作',
							'配置服务器环境，开始搭建基本的服务',
							'使用node.js作为中间层，php作为后台，实现前后端分离'
						]
					},
					{
						version: '1.0.0',
						platform: '电脑端',
						date: '2017-06-24',
						content: [
							'分析访问者ip，对ip地址进行解析',
							'分析访问设备的平台',
							'优化后台数据库的查询'
						]
					},
					{
						version: '1.0.0',
						platform: '电脑端',
						date: '2017-07-31',
						content: [
							'加入百度统计',
							'使用畅言进行评论互动',
							'使用Express的模板引擎对页面进行渲染输入静态页面',
							'Node.js中加入mysql模块，使用Node.js保存图片'
						]
					},
					{
						version: '1.0.0',
						platform: '电脑端',
						date: '2017-08-26',
						content: [
							'网站加入QQ授权登录功能，用户可以通过第三方进行登录网站',
							'增加小游戏模块',
							'解决IE9不支持 matchMedia()polyfill 问题',
						]
					},
				]
			}
		},
		computed: {},
		methods: {}
	}
</script>

<style lang="less" scoped>
    @import "../lib/style/color";

    .update_log {
        .big_title {
            span {
                font-size: 24px;
                color: @color400;
                font-weight: 400;
                background-color: @background-color50;
                padding: 3px 35px;
                line-height: 4em;
                border-radius: 99px;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
            }
        }
        background-color: @white100;
        width: 100%;
        height: 100%;
        .time-line {
            position: relative;
            &:before {
                content: "";
                width: 1px;
                height: 100%;
                position: absolute;
                left: -23px;
                top: 2.2em;
                background-color: #dedede;
            }
        }
        .time-line li {
            margin-top: 1.5em;
        }
    }
</style>
