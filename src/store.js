import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/**
 * Целиком взято из документации по сокетам и vue
 */
export default new Vuex.Store({
  state: {
    socket: {
      isConnected: false,
      message: '',
      reconnectError: false,
    },
  },
  mutations: {
    SOCKET_ONOPEN(state, event) {
      Vue.prototype.$socket = event.currentTarget;
      state.socket.isConnected = true; // eslint-disable-line
    },
    SOCKET_ONCLOSE(state) {
      state.socket.isConnected = false; // eslint-disable-line
    },
    SOCKET_ONERROR(state, event) {
      console.error(state, event);
    },
    SOCKET_ONMESSAGE(state, message) {
      state.socket.message = message; // eslint-disable-line
    },
    SOCKET_RECONNECT(state, count) {
      console.info(state, count);
    },
    SOCKET_RECONNECT_ERROR(state) {
      state.socket.reconnectError = true; // eslint-disable-line
    },
  },
  actions: {
    sendMessage: (context, message) => {
      console.warn('send');
      Vue.prototype.$socket.send(message);
    },
  },
});
