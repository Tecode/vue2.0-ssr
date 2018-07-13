<template>
    <div class="update_item">
        <div class="clearfix title_box">
            <span class="title active pull-left">{{items.version}}</span>
            <span class="lable pc pull-left">{{items.platform}}</span>
            <p class="date">{{items.date}}</p>
        </div>
        <ul v-for="item in items.content">
            <li>{{item}}</li>
        </ul>
    </div>
</template>

<script>
	export default {
		name: 'items',
		props: {
			items: {
				type: Object,
				required: true
			},
		},
		computed: {},
		methods: {}
	}
</script>

<style lang="less" scoped>
    @import "../../lib/style/color";

    .update_item {
        .title_box {
            position: relative;
            .date {
                position: absolute;
                left: -127px;
                top: .3em;
                color: #ff7300;
            }
            &:before {
                content: "";
                display: block;
                position: absolute;
                left: -31px;
                top: .5em;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                box-sizing: border-box;
                background-color: #ff7300;
            }
        }
        .title {
            font-size: 22px;
            font-weight: 400;
        }
        .lable {
            font-weight: normal;
            font-size: 14px;
            padding: 1px 8px 1px 8px;
            border-radius: 99px;
            margin: .4em 0 0 8px;
        }
        .active {
            color: #ff7300;
        }
        .pc {
            background-color: #f6baaf;
            color: #f66e54;
        }
        ul li {
            font-size: 15px;
            color: @text110;
            line-height: 1.8;
            &:before {
                content: "";
                width: 5px;
                height: 5px;
                border-radius: 50%;
                margin-bottom: .2em;
                background-color: @text100;
                margin-right: 10px;
                display: inline-block;
                vertical-align: middle;
            }
        }
    }
</style>
