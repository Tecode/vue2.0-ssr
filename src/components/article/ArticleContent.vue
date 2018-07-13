<template>
    <div>
        <!--<div class="title">-->
            <!--<h3>{{articelData.article_title}}</h3>-->
        <!--</div>-->
        <div v-html="articelData.article_content"></div>
        <iframe src="http://www.w3school.com.cn/tags/tag_iframe.asp"></iframe>
    </div>
</template>

<script>
	import {mapMutations, mapState, mapActions} from 'vuex';
	export default {
		name: 'comment',
		props: ['id'],
		mounted: function () {
			if (this.$route.params.id) {
				this.getArticle(this.$route.params.id)
			}
		},
		computed: {
			...mapState({
				articelData: state => state.Article.articelData,
			}),
		},
		methods: {
			...mapMutations({
//				setIndexSize: 'SET_INDEX_SIZE',
			}),
			...mapActions({
				getArticle: 'GET_ARTICLE_DATA',
			})
		}
	}
</script>

<style lang="less" scoped>
    iframe{
        width: 100%;
        height: auto;
        border: none;
    }
</style>
