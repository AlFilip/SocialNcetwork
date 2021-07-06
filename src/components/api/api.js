import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'c00575f9-9103-46ac-b44c-a92edd8e249f'
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const UsersAPI = {
    getUsers (pageSize, pageNumber) {
        return instance.get(`users?count=${pageSize}&page=${pageNumber}`)
            .then(response => response.data);
    },
    followToggle (isFollow, userId)  {
        return isFollow ? instance.post(`follow/${userId}`)
                .then(response => response)
            : instance.delete(`follow/${userId}`)
                .then(response => response);
    }
}

