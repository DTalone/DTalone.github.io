import { createStore } from "vuex";

export default createStore({
  state: {
    drawer: false,
  },
  mutations: {
    SET_DRAWER(state, drawer) {
      state.drawer = drawer;
    }
  },
  actions: {
    handleDrawer({ commit }, drawer) {
      commit("SET_DRAWER", !drawer);
    }
  },
  getters: {
    getDrawer(state) {
      return state.drawer;
    }
  },
  modules: {},
});
