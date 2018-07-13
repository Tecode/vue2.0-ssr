<template>
    <div class="card_item">
        <div class="card_image"></div>
        <div class="card_text">
            <h3 class="clearfix">
                <span>博客后台开发</span>
                <i class="lable_icon_msg"></i>
                <span>12</span>
                <i class="lable_icon_easy"></i>
                <span>19</span>
            </h3>
            <p>博客网站使用的后台是php语言，用了流行的Laravel框架。使用了larevel+digoApi+JWT对网站进行开发。</p>
        </div>
        <div class="read_more">
            <span>查看更多</span>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'card-item',
		props: ['myTitle'],
		data () {
			return {
				open: true
			}
		},
		computed: {},
		methods: {}
	}
</script>

<style lang="less" scoped>
    @import "../../lib/style/color";
    .card_item{
        background-color: @white300;
        box-shadow: @box-shadow26;
        border-radius: @border-radius6;
        overflow: hidden;
        .card_image{
            height: 160px;
            background-image: url("../../imgs/Demo_moudle.jpg");
            background-position: center center;
            background-size: cover;
        }
        .card_text{
            padding: 10px 10px 30px 10px;
            h3{
                font-size: 16px;
                font-weight: normal;
                padding-bottom: 15px;
                span,i{
                    float: left;
                    color: @color557;
                }
                .lable_icon_msg{
                    display: block;
                    width: 18px;
                    height: 20px;
                    background: url("../../imgs/icon_comment.png") 0 5px no-repeat;
                    background-size: 16px;
                    margin-left: 8px;
                }
                .lable_icon_easy{
                    display: block;
                    width: 20px;
                    height: 20px;
                    background: url("../../imgs/icon_view.png") 0 5px no-repeat;
                    background-size: 19px;
                    margin-left: 8px;
                }
            }
            p{
                line-height: 1.5em;
                font-size: 15px;
                color: @color400;
            }
        }
        .read_more{
            font-size: 14px;
            text-align: right;
            margin: 0 10px 20px 0;
            span{
                padding: 3px 18px;
                border: 1px solid @color555;
                color: @color555;
                border-radius: @border-radius6;
                transition: all 0.5s;
                cursor: pointer;
                &:hover{
                    background-color: @color555;
                    color: @white;
                }
            }
        }
    }
</style>
