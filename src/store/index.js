import { createStore } from 'vuex'

import actions from './actions.js'
import mutations from './mutations.js'
import state from './state.js'

// modules
import { searchUsersStore } from '@/modules/SearchUsers'
import { userProfileStore } from '@/modules/UserProfile'

const store = createStore({
    state,
    mutations,
    actions,
    modules: {
        users: searchUsersStore,
        profile: userProfileStore
    }
})

export default store
