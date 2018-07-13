<template>
    <div>
        <login-item v-show="boxType === 'login'"></login-item>
        <register-item v-show="boxType === 'registration'"></register-item>
    </div>
</template>

<script>
	import LoginItem from './LoginItem.vue';
	import RegisterItem from './RegisterItem.vue';
	import { mapState } from 'vuex';

	export default {
		name: 'loginRegister',
		components: {
			LoginItem,
			RegisterItem
		},
		props: ['id'],
		computed: {
			...mapState({
				boxType: state => state.LoginRegistration.boxType,
			}),
		},
	}
</script>

<style lang="less">

</style>
