const mutations = {
    setUsers: (state, payload) => state.users = payload,
    setLoading: (state, isLoading) => state.isLoading = isLoading,
    setMessage: (state, message) => state.message = message,
    clearState: (state) => {
        state.message = 'Начните поиск'
        state.isLoading = false
        state.users = []
    }
}

export default mutations