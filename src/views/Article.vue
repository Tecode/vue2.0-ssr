<template>
    <div>
        <banner></banner>
        <div class="container">
            <div class="row">
                <div class="col-md-offset-1 col-md-10">
                    <article-content></article-content>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import Banner from '../components/article/Banner.vue'
	import ArticleContent from '../components/article/ArticleContent.vue'

	export default {
		components: {Banner, ArticleContent},
		name: 'comment',
		props: ['id'],
		data () {
			return {
				open: true
			}
		},
		computed: {

		},
		methods: {}
	}
</script>

<style lang="less">

</style>
