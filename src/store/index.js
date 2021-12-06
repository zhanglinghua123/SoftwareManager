import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allData :[]
  },
  mutations: {
    addAllData(state,dataArray)
    {
      state.allData = dataArray
      console.log("所有的数据变为:",dataArray)
    }
  },
  actions: {
  },
  modules: {
  }
})
