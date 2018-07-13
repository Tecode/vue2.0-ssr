<template>
    <div class="animation-one">
        <loading-two class="loding-one"></loading-two>
        <ul class="content-none">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
    import LoadingTwo from '../common/loading/LoadingTwo.vue'
	export default {
		components:{
		    LoadingTwo
        }
	}
</script>

<style lang="less" scoped>
    @import "../../lib/style/color";
    .animation-one{
        position: relative;
        .loding-one{
            position: absolute;
            top: 6em;
            left: 50%;
            margin-left: -24px;
        }
        .content-none{
            li{
                height: 120px;
                background-color: @no-contens;
                margin: 0 15px 20px 15px;
            }
        }
    }
</style>
