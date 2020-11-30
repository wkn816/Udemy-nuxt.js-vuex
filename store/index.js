import Vuex from 'vuex'

const creteStore = () => {
  return new Vuex.Store({
    state: function(){
    return{
      message: 'hello vuex!'
    }
  },
  mutations: {
    updateMessage: function(state){
      state.message= 'Update!'
    }
  }
  })
}

export default creteStore