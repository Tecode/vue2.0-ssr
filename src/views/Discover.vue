<template>
    <div class="discover_box">
        <banner></banner>
        <div class="container">
            <div class="row">
                <div class="col-md-12 item_box">
                    <discover-contents></discover-contents>
                    <div class="page-pagination text-center">
                        <!--<el-pagination-->
                                <!--layout="prev, pager, next"-->
                                <!--:total="50">-->
                        <!--</el-pagination>-->
                    </div>
                </div>
            </div>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import Banner from '../components/discover/Banner.vue'
    import SingleItem from '../components/common/SingleItem.vue'
    import NavFooter from '../components/common/Footer.vue'
	import DiscoverContents from '../components/discover/DiscoverContents.vue'
	export default {
		name: 'comment',
			components: {
			Banner,
			SingleItem,
			NavFooter,
			DiscoverContents
			},
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

<style lang="less">
    @import "../lib/style/color";
    .discover_box{
        .page-pagination {
            padding: 30px 0 0 0;
        }
        .item_box{
            background-color: @white100;
            padding: 10px 0;
            margin: 20px 0;
            border-radius: @border-radius6;
        }
    }
</style>
