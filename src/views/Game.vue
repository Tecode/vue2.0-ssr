<template>
    <div>
        <water-fall></water-fall>
        <footer-info></footer-info>
    </div>
</template>

<script>
	import WaterFall from '../components/game/WaterFall.vue';
	import FooterInfo from '../components/common/Footer.vue';

	export default {
		name: 'app',
		components: {
			WaterFall,
			FooterInfo
		},
		data () {
			return {
				loading: true,
			}
		},
		methods: {}
	}
</script>

<style scoped lang="less">

</style>
