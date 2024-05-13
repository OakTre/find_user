import UserProfile from '../api'

const actions = {
    async getInfo({ state, commit }, params) {
        try {
            commit('setLoading', true)

            const profile = await UserProfile.getInfo(params)

            commit('setUserProfile', profile[0])
        } catch (error) {
            alert('Ошибка получения данных')

            commit('setError', true)
        } finally {
            setTimeout(() => {
                commit('setLoading', false)
            }, 600)
        }
    }
}
export default actions