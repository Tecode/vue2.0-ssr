<template>
    <div class="single_content_box">
        <a :href="jumpLink(item.aid)" @click="countAdd(item.aid)" target="_blank" class="single_content">
            <div class="clearfix">
                <div class="image_box pull-left" :style="{backgroundImage: `url(${item.imageurl})`}">
                    <div class="image_data_time text-center">
                        <h3>{{item.day}}</h3>
                        <p>{{item.month}}</p>
                    </div>
                </div>
                <div class="text_content pull-left">
                    <h3>
                        <span>{{item.title}}</span>
                        <span class="lable" v-for="typeValue in item.type">{{typeValue}}</span>
                    </h3>
                    <p>{{item.discript}}</p>
                </div>
            </div>
            <div class="comment_view">
                <div class="clearfix">
                    <i class="icon_comment"></i>
                    <span>{{item.comment}}</span>
                    <i class="icon_view"></i>
                    <span>{{item.view}}</span>
                </div>
            </div>
            <div class="date_time">{{item.month}},{{item.day}}</div>
        </a>
    </div>
</template>

<script>
	import {mapState, mapActions, mapMutations} from 'vuex';
	export default {
		name: 'comment',
		props: {
			item: {
				type: Object,
			}
		},
		data () {
			return {
				open: true
			}
		},
		computed: {},
		methods: {
			jumpLink: function (val) {
				return (`/article/${val}`);
			},
			...mapActions({
				countAdd: 'GET_ARTICLE_DATA',
			})
		}
	}
</script>

<style lang="less" scoped>
    @import "../../lib/style/color";

    .single_content_box {
        padding: 5px 0 10px 0;
        border-bottom: 1px solid @color810;
        .single_content {
            display: block;
            background-color: @white;
            box-shadow: @box-shadow26;
            margin: 10px 15px;
            padding: 15px;
            position: relative;
            cursor: pointer;
            transition: all .3s;
            &:hover {
                box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
            }
            .image_box {
                background-image: url("../../imgs/demo_image.jpg");
                background-size: cover;
                background-position: center center;
                width: 106px;
                height: 106px;
                margin-right: 15px;
                position: relative;
                .image_data_time {
                    position: absolute;
                    width: 60px;
                    height: 60px;
                    border: 2px solid @white;
                    top: 20px;
                    left: 50%;
                    margin-left: -30px;
                    border-radius: 999px;
                    color: @white;
                    h3 {
                        font-size: 24px;
                        font-weight: normal;
                        margin-top: 2px;
                    }
                    p {
                        margin-top: -6px;
                        font-size: 18px;
                        text-transform: capitalize;
                    }
                }
            }
            .text_content {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                width: 84%;
                height: 5.3em;
                overflow: hidden;
                text-overflow: ellipsis;

                transition: all 0.4s;
                transition-timing-function: ease-out;
                h3 {
                    font-size: 16px;
                    font-weight: normal;
                    color: @color557;
                    .lable {
                        font-size: 12px;
                        color: @color556;
                        border: 1px solid @color556;
                        padding: 0 8px 1px 8px;
                        margin: 0 5px;
                        border-radius: 999px;
                    }
                }
                p {
                    padding-top: 5px;
                    font-size: 14px;
                    color: @color808;
                }
            }
            .date_time {
                position: absolute;
                top: 12px;
                right: 15px;
                font-size: 14px;
                color: @color808;
            }
            .comment_view {
                position: absolute;
                bottom: 15px;
                right: 15px;
                color: @color400;
                i {
                    margin-left: 8px;
                }
                i, span {
                    float: left;
                }
                .icon_comment {
                    display: block;
                    width: 18px;
                    height: 20px;
                    background: url("../../imgs/icon_comment.png") 0 5px no-repeat;
                    background-size: 16px;
                }
                .icon_view {
                    display: block;
                    width: 20px;
                    height: 20px;
                    background: url("../../imgs/icon_view.png") 0 5px no-repeat;
                    background-size: 19px;
                }
            }
            @media (max-width: 862px) {
                .text_content {
                    width: 77%;
                }
            }
            @media (min-width: 992px) {
                .text_content {
                    width: 75%;
                }
            }
            @media (min-width: 1279px) {
                .text_content {
                    width: 85%;
                }
            }
        }
    }
</style>
