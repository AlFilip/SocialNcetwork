import axios from "axios";

const requestWithCredentialsAndHeaders = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'c00575f9-9103-46ac-b44c-a92edd8e249f'
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

const request = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

const requestWithCredentials = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
});

export const usersAPI = {
    getUsers (pageSize, pageNumber) {
        return requestWithCredentialsAndHeaders.get(`users?count=${pageSize}&page=${pageNumber}`)
            .then(response => response.data);
    },
    followToggle (isFollow, userId)  {
        return isFollow ? requestWithCredentialsAndHeaders.post(`follow/${userId}`)
                .then(response => response.data.resultCode)
            : requestWithCredentialsAndHeaders.delete(`follow/${userId}`)
                .then(response => response.data.resultCode);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return request.get(`profile/${userId}`).then(response => response.data);
    }
};

export const authAPI = {
    authMe() {
        return requestWithCredentials.get(`auth/me`).then(response => response.data)
    }
};