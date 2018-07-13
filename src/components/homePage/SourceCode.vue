<template>
    <div class="share_module">
        <h2 class="_tittle">{{title}}</h2>
        <div class="itme_box clearfix">
            <card-item class="pull-left"></card-item>
            <card-item class="pull-left item_center_1"></card-item>
            <card-item class="pull-left item_center_2"></card-item>
            <card-item class="pull-left item_center_3"></card-item>
        </div>
    </div>
</template>

<script>
    import CardItem from '../common/CardItem.vue';
	export default {
		name: 'share-module',
		props: {
		    title: String,
        },
		components:{
		    CardItem
        },
		data () {
			return {
				kl: 56
			}
		},
		computed: {},
		methods: {}
	}
</script>

<style lang="less" scoped>
    @import "../../lib/style/color";
    .share_module{
        background-color: @white;
        box-shadow: @box-shadow26;
        border-radius: @border-radius6;
        margin-top: 20px;
        .pull-left{
            width: 23.5%;
            transition: all 0.4s;
            transition-timing-function: cubic-bezier(0.42, 0, 0, 1.43);
        }
        .item_center_1{
            margin: 0 2%;
        }
        .item_center_2{
            margin: 0 2% 0 0;
        }
        .itme_box{
            margin: 15px 15px 0 15px;
            padding-bottom: 30px;
        }
        ._tittle{
            font-weight: normal;
            font-size: 16px;
            padding: .6em 0 .4em 15px;
            border-bottom: 1px solid @color810;
            color: @color400;
        }
        @media (max-width: 1280px) {
        .pull-left{
            width: 32%;
        }
        .item_center_1{
            margin: 0 2%
        }
        .item_center_2{
            margin: 0;
        }
        .item_center_3{
            margin-top: 15px;
        }
    }
        @media (max-width: 820px) {
            .pull-left{
                width: 48%;
            }
            .item_center_1{
                margin: 0 0 0 4%;
            }
            .item_center_2{
                margin: 15px 4% 0 0;
            }
        }
    }
</style>
