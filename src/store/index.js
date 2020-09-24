import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modalVisible: false,
    post: {
      id: 0,
      title: '',
      body: '',
    }
  },
  mutations: {
    toggleModalVisible(state) {
      state.modalVisible = !state.modalVisible;
    },

    newPost(state, post) {
      state.post = post;
    }
  },
  getters: {
    modalIsVisible: state => {
      return state.modalVisible;
    },

    postData: state => {
      return state.post;
    }
  },
  actions: {
  },
  modules: {
  }
})
