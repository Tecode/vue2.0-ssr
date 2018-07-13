<template>
    <div class="discover_contens">
        <no-data-text v-if="dataList.length === 0 && !loading"></no-data-text>
        <animation-one v-if="loading"></animation-one>
        <div>
            <single-item
                    v-if="dataList.length > 0"
                    v-for="item in dataList"
                    :key="item.aid"
                    :item="item"></single-item>
        </div>
        <div class="page-pagination text-center">
            <el-pagination
                    layout="prev, pager, next"
                    v-if="total > 10"
                    @current-change="changePage"
                    :page-size="10"
                    :current-page="index"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
	import NoDataText from '../common/NoDataText.vue';
	import AnimationOne from '../animation/AnimationOne.vue';
	import SingleItem from '../common/SingleItem.vue';
	import {mapMutations, mapState, mapActions} from 'vuex';
	export default {
		components: {
			NoDataText,
			AnimationOne,
			SingleItem
		},
		name: 'comment',
		props: ['id'],
		computed: {
			...mapState({
				dataList: state => state.Article.dataList,
				loading: state => state.Article.loading,
				total: state => state.Article.total,
				index: state => state.Ui.index,
				size: state => state.Ui.size,
			}),
		},
		methods: {
			changePage: function (val) {
				this.setIndexSize({index: val, size: 10});
				if (this.value === '') {
					Message({
						message: '搜索关键词不能为空',
						type: 'error'
					});
				} else {
					this.searchArticleList({
						keyWords: this.value,
						index: this.index,
						size: this.size,
					});
				}
			},
			...mapMutations({
				setIndexSize: 'SET_INDEX_SIZE',
				resetStore: 'RSET_ARTICLE_DATA'
			}),
			...mapActions({
				getArticleList: 'GET_LIST_ARTICLE_DATA',
				searchArticleList: 'GET_SEARCH_DATA',
			})
		},
		beforeDestroy: function () {
			this.setIndexSize({index: 1, size: 10});
			this.resetStore();
		}
	}
</script>

<style lang="less">
    .discover_contens {

    }
</style>
