import Users from '../api'

const actions = {
    async getUsers({state, commit}, params) {
        try {
            const users = await Users.getUsers(params)

            commit('setUsers', users)

            if (users.length === 0) {
                commit('setMessage', 'Ничего не найдено')
            }
        } catch (error) {
            alert('Ошибка при получении данных')

            commit('setMessage', 'Попробуйте начать поиск снова')
        } finally {
            commit('setLoading', false)
        }
    }
}
export default actions