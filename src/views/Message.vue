<template>
    <div class="mesege_box">
        <popup-write></popup-write>
        <banner></banner>
        <div class="container">
            <div class="row">
                <animation-one v-if="contentList.length === 0"></animation-one>
                <ul class="col-md-7 col-md-offset-3 line" v-if="contentList.length > 0">
                    <li v-for="(item, index) in contentList">
                        <message-item :item=item :index="index"></message-item>
                    </li>
                </ul>
            </div>
            <div class="page-pagination text-center">
                <el-pagination
                        layout="prev, pager, next"
                        v-if="total > 39"
                        @current-change="changePage"
                        :page-size="40"
                        :current-page="index"
                        :total="total">
                </el-pagination>
            </div>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
	import Banner from '../components/message/Banner.vue'
	import MessageItem from '../components/message/MessageItem.vue'
	import NavFooter from '../components/common/Footer.vue'
	import PopupWrite from '../components/message/PopupWrite.vue'
	import {mapMutations, mapState, mapActions} from 'vuex';
	import AnimationOne from '../components/animation/AnimationOne.vue'

	export default {
		name: 'comment',
		components: {
			Banner,
			MessageItem,
			NavFooter,
			PopupWrite,
			AnimationOne
		},
		props: ['id'],
		computed: {
			...mapState({
				contentList: state => state.LivingMessege.contentList,
				total: state => state.LivingMessege.total,
				index: state => state.Ui.index,
				size: state => state.Ui.size,
			}),
		},
		methods: {
			changePage: function (val) {
				this.setIndex({index: val, size: 40});
				this.getMessageListData({
					index: this.index,
					size: this.size,
				});
			},
			...mapActions({
				getMessageListData: 'GET_MESSEGE_INFO_LIST',
			}),
			...mapMutations({
				setIndex: 'SET_INDEX_SIZE',
				resetStore: 'RESET_LIVING_MESSEGE',
			})
		},
		created: function () {
			this.setIndex({index: 1, size: 40});
			this.getMessageListData({index: this.index, size: this.size})
		},
		beforeDestroy: function () {
			this.setIndex({index: 1, size: 10});
			this.resetStore();
		}
	}
</script>

<style lang="less" scoped>
    @import "../lib/style/color";

    .mesege_box {
        background-color: @white100;
        .page-pagination {
            padding: 60px 0 0 0;
        }
        .line {
            position: relative;
            margin-top: 40px;
            &:before {
                content: "";
                width: 1px;
                height: 100%;
                position: absolute;
                left: -23px;
                top: 1em;
                background-color: #dedede;
            }
        }

    }
</style>
