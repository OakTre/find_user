const mutations = {
    setUserProfile: (state, payload) => state.profile = payload,
    setLoading: (state, isLoading) => state.isLoading = isLoading,
    setError: (state, isError) => state.isError = isError
}

export default mutations