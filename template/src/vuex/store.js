import Vue from 'vue'  
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({  
    state: {
      user: {
        username: '',
        email: ''
      }
    },
    mutations: {
      SET_USER (store, obj) {
        store.user = obj.user
      }
    }
  })