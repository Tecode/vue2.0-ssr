<template>
    <div class="footer_coustm">
        <ul class="footer_coustm_box clearfix">
            <li class="QR_qq"></li>
            <li class="QR_wechat"></li>
            <li class="discript">
                <dl>
                    <dd>地址：重庆市沙坪坝区</dd>
                    <dd>邮编：400100</dd>
                    <dd>电话：023-0000000</dd>
                    <dd>传真：023-12345678</dd>
                    <dd>邮箱：283731869@qq.com</dd>
                    <dd class="copyright clearfix">
                        <div class="footer_logo pull-left"></div>
                        <div class="pull-left copyright_text text-center">
                            <p>Design by Aming</p>
                            <p>蜀ICP备16004803号</p>
                        </div>
                    </dd>
                </dl>
            </li>
        </ul>
    </div>
</template>

<script>
	export default {
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
    .footer_coustm{
        min-width: 640px;
        .footer_coustm_box{
            width: 600px;
            margin: 0 auto;
            dd{
                padding: 1px 0;
            }
            li{
                float: left;
            }
        }
        background-color: @color556;
        padding: 40px 0;
        margin: 45px 0 0 0;
        .QR_qq{
            background: url("../../imgs/qq_QRcode.jpg")0 0 no-repeat;
            background-size: 128px;
            width: 128px;
            height: 152px;
        }
        .QR_wechat{
            background: url("../../imgs/wechat_QRcode.jpg")15px 0 no-repeat;
            background-size: 128px;
            width: 128px;
            height: 152px;
            margin: 0 15px;
            border-left: 1px solid @color555;
            padding-left: 15px;
        }
        .discript{
            color: @color400;
        }
        .copyright{
            .copyright_text{
                border: 1px solid @color400;
                border-radius: @border-radius6;
                padding: 0 10px;
                margin: 0 0 0 15px;
            }
            .footer_logo{
                width: 138px;
                height: 38px;
                background-size: 138px;
                background: url("../../imgs/logo_lage.png") 0 0 no-repeat;
                background-size: 138px;
            }
            p{
                font-size: 12px;
            }
        }
    }
</style>
