<template>
    <div>
        <div class="water_fall_container"></div>
        <div class="add_more_button text-center">
            <span @click="">没有更多内容了...</span>
        </div>
    </div>
</template>

<script>
	import generate from './waterFall';
	export default {
		name: 'app',
		components: {},
		data() {
			return {
				fixed: false
			}
		},
		methods: {},
		mounted: function () {
			const gameArr = [
				{
					coverImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503731010567&di=355584be17235e597dc02f0dd1e25d7a&imgtype=0&src=http%3A%2F%2Fimg.smzy.com%2Fdown%2FUploadPic%2F2016-6%2F20166289555238621.jpg',
					link: '/games/test_derailed/'
				},
				{
					coverImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503731420627&di=55c71746b6226fc31364544ad634a174&imgtype=0&src=http%3A%2F%2Fs4.sinaimg.cn%2Fmiddle%2F4dd31e07g9ed6e6d15693%26690',
					link: '/games/game_paper_plane/'
				},

				{
					coverImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503732660672&di=d85b6f03c7262d33311ea3aa62b81ae3&imgtype=0&src=http%3A%2F%2Fwww.gameres.com%2Fdata%2Fattachment%2Fforum%2F201607%2F19%2F1719540mx58ojgzr266gd9.jpg',
					link: '/games/game_jump_dog/'
				},
				{
					coverImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503733677369&di=5b727135f323871b19f7bfa3d58a95a4&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c131579068570000012e7e4808df.jpg',
					link: '/games/test_childhood/'
				},

				{
					coverImage: 'http://niuguangzu.com/uploadfile/2015/0911/20150911102151802.png',
					link: '/games/game_Island_country/'
				},
				{
					coverImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503736255467&di=e3c85ae6a138e2c83be64b613edf20c4&imgtype=0&src=http%3A%2F%2Fs3.sinaimg.cn%2Fmw690%2F0026BaqJzy6IRXEAtGO12',
					link: '/games/game_find_something/'
				},
				{
					coverImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503737208732&di=421089e8a7ea87bdccf8404e586e94a4&imgtype=0&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fapp%2Fcapture%2Fiphone5%2F20151110%2F1447113620258848.jpeg',
					link: '/games/game_color/'
				},
				{
					coverImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503737811143&di=21b1dd20a33970e1f14ffbf1535e9769&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2Fsheji%2F20150814%2Fdaqishuimoqixiqingrenjiehaibaosucai_4810852.jpg',
					link: '/games/game_magpie_festival/'
				},
				{
					coverImage: '/games/test_thought_reading/cover.jpg',
					link: '/games/test_thought_reading/'
				},
				{
					coverImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503739948076&di=892f401627ac4501308fd94a7d6dfa51&imgtype=0&src=http%3A%2F%2Ftc.sinaimg.cn%2Fmaxwidth.800%2Ftc.service.weibo.com%2Fimg_mp_itc_cn%2F127c7198443c5fbcdb152d0b36336870.jpg',
					link: '/games/game_red_green/'
				}
			];
			generate(gameArr);
		}
	}
</script>

<style lang="less">
    .water_fall_container {
        margin: 50px auto 40px auto;
        transition: all .3s;
        position: relative;
        .water_fall_container_box {
            width: 200px;
            background-color: #3d1e37;
            background-size: cover;
            background-position: center center;
            box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.22);
            transition: all .3s;
            &:hover {
                box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
            }
        }
        .water_fall_container_box_link {
            display: block;
            height: 100%;
        }
        .water_fall_container_link {
            background-color: #fed919;
            display: block;
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            color: #223343;
            transition: all .3s;
            padding: 8px 0;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }

    .add_more_button {
        margin: 30px 0;
        position: relative;
        &:before {
            width: 22%;
            top: 19px;
            display: block;
            position: absolute;
            content: "";
            border-top: 1px solid #ededed;
            left: 0;
        }
        &:after {
            display: block;
            position: absolute;
            width: 22%;
            top: 19px;
            content: "";
            border-top: 1px solid #ededed;
            right: 0;
        }
        span {
            display: inline-block;;
            padding: 10px;
            width: 49%;
            background-color: #f7f7f7;
            cursor: pointer;
            color: #999;
            transition: all .3s;
            &:hover {
                background-color: #dedede;
            }
        }
    }
</style>