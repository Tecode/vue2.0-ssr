<template>
    <div class="about_me">
        <h3>Just About Me</h3>
        <p>人生就是一个得与失的过程，而我却是一个幸运者，得到的永远比失去的多。生活的压力迫使我放弃了轻松的前台接待，放弃了体面的编辑，换来虽有些蓬头垢面的工作，但是我仍然很享受那些熬得只剩下黑眼圈的日子，因为我在学习使用Photoshop、Flash、Dreamweaver、ASP、PHP...</p>
        <div class="button">
            <a href="javascript:;">查看更多</a>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'comment',
		props: ['id'],
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
    .about_me{
        position: relative;
        background-color: @white100;
        border-radius: @border-radius6;
        box-shadow: @box-shadow26;
        margin: 20px 0 20px 0;
        h3{
            font-weight: normal;
            background-color: @background-color350;
            display: inline-block;
            padding: 4px 25px 4px 15px;
            margin: 25px 0 20px 0;
        }
        p{
            padding: 0 15px 0 15px;
            line-height: 1.5em;
            font-size: 15px;
        }
        .button{
            text-align: right;
            a{
                display: inline-block;
                padding: 4px 15px 4px 15px;
                margin: 20px 15px 20px 0;
                color: @background-color350;
                border: 1px solid @background-color350;
                border-radius: 999px;
                font-size: 14px;
                text-decoration: none;
                transition: all 0.5s;
                &:hover{
                    background-color: @background-color350;
                    color: @white100;
                }
            }
        }
    }
</style>
