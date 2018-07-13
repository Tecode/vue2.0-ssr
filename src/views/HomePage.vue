<template>
    <div class="home_page">
        <banner></banner>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <about-me></about-me>
                </div>
                <div class="col-md-12 col-lg-12">
                    <all-contents></all-contents>
                </div>
                <!--<div class="col-md-4 col-lg-3">3</div>-->
                <!--<div class="col-md-12">-->
                    <!--<share-module title='推荐模板'></share-module>-->
                <!--</div>-->
                <!--<div class="col-md-12">-->
                    <!--<source-code title='GitHub源码项目'></source-code>-->
                <!--</div>-->
            </div>
        </div>
        <footer-custom></footer-custom>
    </div>
</template>

<script>
	import {watchList} from '../api'
	import Banner from '../components/common/Banner.vue'
	import FooterCustom from '../components/common/Footer.vue'
	import AboutMe from '../components/homePage/AboutMe.vue'
	import AllContents from '../components/homePage/AllContents.vue'
	import ShareModule from '../components/common/ShareModule.vue'
    import SourceCode from '../components/homePage/SourceCode.vue'

	export default {
		name: 'home-page',
		components: {
			AboutMe,
			Banner,
			AllContents,
			FooterCustom,
			ShareModule,
			SourceCode,
		},
		data () {
			return {
				currentTime: 'slide-right',
			}
		},

		computed: {},
		watch: {
			page (to, from) {
				this.loadItems(to, from)
			}
		},

		methods: {

		}
	}
</script>

<style lang="less">
    @import "../lib/style/color";

    .home_page {

    }

</style>
