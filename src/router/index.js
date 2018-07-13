import Vue from 'vue'
import Router from 'vue-router'

// import HomePage from '../views/HomePage.vue';
// import UpdateLog from '../views/UpdateLog.vue';
// import Message from '../views/Message.vue';
// import Share from '../views/Share.vue';
// import Discover from '../views/Discover.vue';

const HomePage = r => require.ensure([], () => r(require('../views/HomePage.vue')));
const UpdateLog = r => require.ensure([], () => r(require('../views/UpdateLog.vue')));
const Message = r => require.ensure([], () => r(require('../views/Message.vue')));
const Game = r => require.ensure([], () => r(require('../views/Game.vue')));
const Discover = r => require.ensure([], () => r(require('../views/Discover.vue')));
// const Article = r => require.ensure([], () => r(require('../views/Article.vue')));

Vue.use(Router);

// route-level code splitting
// const createListView = id => () => import('../views/CreateListView').then(m => m.default(id));
// const ItemView = () => import('../views/ItemView.vue');
// const UserView = () => import('../views/UserView.vue');

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: HomePage },
      { path: '/discover/:page(\\d+)?', component: Discover },
      { path: '/game/:page(\\d+)?', component: Game },
      { path: '/message/:page(\\d+)?', component: Message },
      { path: '/updatelog/:page(\\d+)?', component: UpdateLog },
			// { path: '/article/:id?', component: Article },
      // { path: '/item/:id(\\d+)', component: ItemView },
      // { path: '/user/:id', component: UserView },
      // { path: '/', redirect: '/top' }
    ]
  })
}
