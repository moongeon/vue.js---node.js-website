import Vue from 'vue';
import Vuex from 'vuex';
import socket from './modules/socket';
import user from './modules/user'
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    socket,
    user
  },
  strict: debug,
  // plugins: debug ? [createLogger()] : []
});
