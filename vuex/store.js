import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        searchResult: {}
    },
    mutations:{
        SET_RESULT(state, result) {
            state.searchResult = result
        }
    },
    actions: {
        setResult ({ commit }, result) {
            commit('SET_RESULT', result)
        }
    },
    getters:{
        searchResult: state => {
			return state.searchResult
		}
    }
})