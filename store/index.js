import Vuex from 'vuex'

const creteStore = () => {
  return new Vuex.Store({
    state: function(){
    return{
      message: 'hello vuex!'
    }
  }
  })
}

export default creteStore