import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "669bffb1-253a-4396-8da1-6301d4b07c9a"
    }
})

export const userAPI = {
    getUsers(totalUsersCount = 1, pageSize = 10) {
        return instance.get(`users?page=${totalUsersCount}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
    },
    followUser(id) {
        return instance.post(`follow/${id}`)
    },
    getProfile(userId) {
        console.warn('Old method. Use new method from profileAPI object')
        return profileAPI.getProfile(userId)
    }
}


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){ 
        return instance.put('profile/status', {
            status: status
        })
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}