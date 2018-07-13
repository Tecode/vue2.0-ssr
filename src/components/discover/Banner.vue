<template>
    <div id="canvasBox" class="banner">
        <canvas id="canvasEl" class="canvas"></canvas>
        <div class="content">
            <div class="input_box">
                <div class="clearfix search_box">
                    <label for="search"></label>
                    <input autofocus="autofocus" class="pull-left" @keyup="enterCode" id="search" v-model="value"
                           placeholder="输入搜索关键字如“Node”"/>
                    <button class="pull-left" @click="searchButton">搜索</button>
                </div>
                <!--<div class="hot_worlds">-->
                <!--<span>CentOs7</span>-->
                <!--<span>Canvers</span>-->
                <!--<span>Nodejs</span>-->
                <!--</div>-->
            </div>
        </div>
    </div>
</template>

<script>
	import starrySky from '../../static/starrySky'
	import {mapMutations, mapState, mapActions} from 'vuex';
	import {Message} from 'element-ui';
	export default {
		name: 'banner-search',
		data () {
			return {
				value: ''
			}
		},
		mounted() {
			// canvas绘图
//			const canvasBox = document.getElementById('canvasBox');
//			starrySky({
//				width: canvasBox.offsetWidth,
//				height: canvasBox.offsetHeight,
//				canvasElemet: 'canvasEl'
//			});
		},
		computed: {
			...mapState({
				dataList: state => state.Article.dataList,
				total: state => state.Article.total,
				index: state => state.Ui.index,
				size: state => state.Ui.size,
			}),
		},
		methods: {
			enterCode: function (event) {
				if (event.keyCode === 13) {
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
				}
			},
			searchButton: function () {
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
			}),
			...mapActions({
				searchArticleList: 'GET_SEARCH_DATA',
			})
		},
	}
</script>

<style lang="less" scoped>
    @import "../../lib/style/color";

    .banner {
        background: url("../../imgs/img_lijiang.jpg") 0 0 no-repeat;
        background-size: cover;
        background-position: center center;
        height: 540px;
        background-color: #223343;
        position: relative;
        min-width: 800px;
        .input_box {
            position: absolute;
            top: 200px;
            left: 50%;
            margin-left: -390px;
            .search_box {
                width: 780px;
                overflow: hidden;
                border-radius: @border-radius6;
            }
            .hot_worlds {
                margin-top: 15px;
                span {
                    color: @color556;
                    border: 1px solid @color556;
                    padding: 1px 10px;
                    margin: 10px 8px 0 0;
                    cursor: pointer;
                    transition: all .2s;
                    border-radius: @border-radius6;
                    &:hover {
                        background-color: @color556;
                        color: @white;
                    }
                }
            }
            input {
                display: block;
                width: 80%;
                height: 30px;
                padding: 10px 15px;
                outline: none;
                border: none;
                -webkit-appearance: none;
                font-size: 15px;
                color: @color557;
            }
            button {
                display: block;
                border: none;
                height: 50px;
                width: 126px;
                outline: none;
                background: url("../../imgs/search.png") 1.5em 18px no-repeat;
                background-size: 18px;
                background-color: @background-color50;
                font-size: 16px;
                cursor: pointer;
                transition: all 0.3s;
                &:hover {
                    background-color: @color556;
                }
            }
        }
    }
</style>
