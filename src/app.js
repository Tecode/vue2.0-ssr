import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync'
import titleMixin from './util/title'
import * as filters from './util/filters'
// 引入饿了吗的ui
import './static/styles/pagination.min.css'
import 'element-ui/lib/theme-default/message.css'
import {
	Pagination,
} from 'element-ui';

Vue.use(Pagination);

// mixin for handling title
Vue.mixin(titleMixin);

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp () {
  // create store and router instances
  const store = createStore();
  const router = createRouter();

  //热更新
	if (module.hot) {
		// 使 actions 和 mutations 成为可热重载模块
		module.hot.accept(['./store/modules/LoginRegistration'], () => {
			// 获取更新后的模块
			// 因为 babel 6 的模块编译格式问题，这里需要加上 .default
			const LoginRegistration = require('./store/modules/LoginRegistration').default;
			// 加载新模块
			store.hotUpdate({
				mutations: newMutations,
				modules: {
					LoginRegistration: LoginRegistration
				}
			})
		})
	}

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router);

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store }
}
