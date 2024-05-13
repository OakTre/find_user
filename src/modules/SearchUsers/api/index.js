import API from '@/api'
import qs from 'qs'

class Users {
    async getUsers(params) {
        const { data } = await API.get('/users', {
            params,
            paramsSerializer: params => {
                return qs.stringify(params)
            }
        })

        return data
    }
}

const api = new Users()

export default api

