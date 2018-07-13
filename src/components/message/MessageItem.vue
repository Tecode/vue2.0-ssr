<template>
    <div class="message_item">
        <div class="clearfix title_box">
            <p class="bliuld">{{item.index}}楼</p>
        </div>
        <ul>
            <li>
                <div class="portrait_box clearfix">
                    <div class="box_image pull-left">
                        <img src="../../imgs/Demo_moudle.jpg" width="120px"/>
                    </div>
                    <div class="user pull-left">
                        <p class="name">{{item.name}}</p>
                        <p class="date">{{item.dateTime}}
                            <span @click="reply(item.id)">回复</span>
                        </p>
                    </div>
                </div>
                <p class="content">{{item.messege}}</p>
                <div class="write_box" v-if="activeId === item.id">
                    <div contenteditable="false" class="reply_person">回复 {{item.name}}：</div>
                    <label v-bind:for="item.id"></label>
                    <textarea autofocus="autofocus" v-bind:id="item.id" v-model="messege"
                              @input="inoutLivingMessege"></textarea>
                    <div class="button clearfix">
                        <span class="tips pull-left">回复的内容不能为空且不能小于2个字符！</span>
                        <span v-if="!load" class="call pull-right"
                              @click="replyMessegePost({parentId: item.id, beAnswered: item.name})">回复</span>
                        <span class="loading pull-right" v-if="load">请稍后...</span>
                    </div>
                </div>
                <ul class="level_two_ul">
                    <li class="level_two" v-for="value in item.content">
                        <div class="portrait_box clearfix">
                            <div class="box_image pull-left">
                                <img src="../../imgs/Demo_moudle.jpg" width="120px"/>
                            </div>
                            <div class="user pull-left">
                                <p class="name">{{value.name}} <span class="reply_text">回复</span> {{value.beAnswered}}</p>
                                <p class="date">{{value.dateTime}}
                                <span @click="reply(value.id)">回复</span>
                                </p>
                            </div>
                        </div>
                        <p class="content">{{value.messege}}</p>
                        <div class="write_box" v-if="activeId === value.id">
                            <div contenteditable="false" class="reply_person">回复 {{value.name}}：</div>
                            <label v-bind:for="value.id"></label>
                            <textarea autofocus="autofocus" v-model="messege" v-bind:id="value.id"
                                      @input="inoutLivingMessege"></textarea>
                            <div class="button clearfix">
                                <span class="tips pull-left">回复的内容不能为空且不能小于2个字符！</span>
                                <span v-if="!load" class="call pull-right"
                                      @click="replyMessegePost({parentId: item.id, beAnswered: value.name})">回复</span>
                                <span class="loading pull-right" v-if="load">请稍后...</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
	import {mapMutations, mapState, mapActions} from 'vuex';
	import {MessageBox} from 'element-ui';
	export default {
		name: 'msg-item',
		props: {
			item: [Object],
			index: [Number]
		},
		computed: {
			...mapState({
				messege: state => state.LivingMessege.messege,
				activeId: state => state.LivingMessege.activeId,
				load: state => state.LivingMessege.loading,
			}),
		},
		methods: {
			reply: function (id) {
				if (this.activeId === '' && this.activeId !== id) {
					this.replyShowBox(id);
				} else if (this.activeId !== id) {
					if (this.activeId !== id) {
						MessageBox.confirm('确定要放弃正在编辑的评论, 是否继续?', '提示', {
							confirmButtonText: '确定',
							cancelButtonText: '取消',
							type: 'warning'
						}).then(() => {
//                  '删除成功!'
						this.replyShowBox(id);
						}).catch(() => {
//					message: '已取消删除'
						});
					}
				}
			},
			closePopup: function () {
				this.togglePopup({popupShow: false});
				this.clearData({moudle: 'messege', data: ''});
			}
			,
			...mapMutations({
				inoutLivingMessege: 'INPUT_LIVING_MESSEGE',
				clearData: 'CLEAN_DATA',
				replyShowBox: 'REPLY_MESSEGE_INFO',
			}),
			...mapActions({
			    replyMessegePost: 'REPLY_MESSEGE_POST',
			})
		}
	}
</script>

<style lang="less" scoped>
    @import "../../lib/style/color";

    .message_item {
        .loading{
            color: @color808;
            border: 1px solid @color808;
            padding: 2px 15px 2px 15px;
            border-radius: @border-radius6;
            background-size: 16px;
            background-color: @white100;
            cursor: not-allowed;
        }
        .write_box {
            position: relative;
            .reply_person {
                position: absolute;
                top: .6em;
                left: 1.2em;
                color: #808080;
            }
            max-width: 680px;
            margin: 20px 0;
            textarea {
                padding: 2.5em .6em 0 .6em;
                width: 656px;
                margin-left: 4px;
                resize: none;
                height: 100px;
                outline: none;
                font-size: 14px;
                border: 1px solid @color204;
                color: #223343;
                border-radius: 8px;
                text-indent: 1em;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            }
            .button {
                margin: 10px 0;
                .call {
                    color: @background-color50;
                    border: 1px solid @background-color50;
                    padding: 2px 15px 2px 30px;
                    border-radius: @border-radius6;
                    background: url("../../imgs/icon_paperplane_w.png") 10px 4px no-repeat;
                    background-size: 16px;
                    cursor: pointer;
                    transition: all .2s;
                    &:hover {
                        background: url("../../imgs/icon_paperplane_black.png") 10px 4px no-repeat;
                        background-size: 16px;
                        background-color: @background-color50;
                        color: #24283b;
                    }
                }
                .tips {
                    margin-left: 4px;
                    margin-top: 2px;
                    padding-left: 20px;
                    background: url("../../imgs/icon_Info_b.png") 0 2px no-repeat;
                    background-size: 17px;
                }
            }
        }
        .level_two_ul {
            margin-top: 15px;
            .reply_text{
                font-size: 14px;
                color: #ff7300;
            }
        }
        .level_two {
            margin-left: 20px;
            textarea {
                width: 636px;
            }
        }
        .title_box {
            position: relative;
            .bliuld {
                position: absolute;
                left: -85px;
                top: .3em;
                color: #ff7300;
                font-size: 16px;
            }
            &:before {
                content: "";
                display: block;
                position: absolute;
                left: -32px;
                top: .5em;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                box-sizing: border-box;
                background-color: #fff;
                border: 4px solid #ff7300;
            }
        }
        .title {
            font-size: 22px;
            font-weight: 400;
        }
        ul li {
            font-size: 14px;
            margin-bottom: 25px;
        }
        .portrait_box {
            .box_image {
                width: 46px;
                height: 46px;
                border-radius: 50%;
                overflow: hidden;
            }
            .user {
                margin-left: 15px;
                p {
                    line-height: 1.5em;
                    color: @text100;
                }
                .name {
                    font-size: 16px;
                }
                .date {
                    span {
                        color: @color808;
                        cursor: pointer;
                    }
                }
            }
        }
        .content {
            color: @text100;
            line-height: 1.5em;
            padding: 10px 0 0 4px;
        }
    }
</style>
