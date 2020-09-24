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
    },
    
    toast: {
      status: false,
      title: '',
      body: '',
      color: '',
    }
  },
  mutations: {
    toggleModalVisible(state) {
      state.modalVisible = !state.modalVisible;
    },

    newPost(state, post) {
      state.post = post;
    },

    changeStatus(state, status) {
      state.toast.status = status;
    },

    changeToastData(state, data) {
      state.toast.title = data.title;
      state.toast.body = data.body;
      state.toast.color = data.color;
    }
  },
  getters: {
    modalIsVisible: state => {
      return state.modalVisible;
    },

    postData: state => {
      return state.post;
    },

    toastStatus: state => {
      return state.toast.status;
    },
    
    toast: state => {
      return state.toast;
    }

  },
  actions: {
  },
  modules: {
  }
})
