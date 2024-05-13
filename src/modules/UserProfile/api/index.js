import API from '@/api'

class UsersProfile {
    async getInfo(params) {
        const { data } = await API.get('/users', { params })

        return data
    }
}

const api = new UsersProfile()

export default api

