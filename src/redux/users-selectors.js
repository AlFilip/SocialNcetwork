export const getUsersList = state => {
    return state.usersPage.usersList;
}

export const getPageSize = state => {
    return state.usersPage.pageSize;
}

export const getCurrentPage = state => {
    return state.usersPage.currentPage;
}

export const getTotalUsersCount = state => {
    return state.usersPage.totalUsersCount;
}

export const getIsFetching = state => {
    return state.usersPage.isFetching;
}

export const getUsersToggleFollowInProgress = state => {
    return state.usersPage.usersToggleFollowInProgress;
}

export const getIsAuth = state => {
    return state.userAuthData.isAuth;
}

