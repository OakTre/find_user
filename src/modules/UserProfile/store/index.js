import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'


const userProfileStore = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}

export default userProfileStore
