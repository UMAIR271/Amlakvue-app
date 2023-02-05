import { createStore } from "vuex";

export default createStore({
  state: {
    data: [],
  },
  mutations: {
    addData(state, payload) {
      state.data = payload.data;
    },
  },
  actions: {
    addData({ commit }, payload) {
      commit("addData", payload.data);
    },
  },
  getters: {
    getData: (state) => state.data,
  },
});
