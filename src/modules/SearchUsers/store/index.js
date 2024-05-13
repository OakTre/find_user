import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'


const searchUsersStore = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}

export default searchUsersStore
