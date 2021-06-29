const TOGGLE_FOLLOW = "TOGGLE_FOLLOW",
    SET_USERS = "SET_USERS",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE";


export const setUsersAC = (users) => ({type: SET_USERS, userList: users});
export const toggleFollowAC = (userId) => ({type: TOGGLE_FOLLOW, id:userId});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

const initState = {
    usersList: [],
    pageSize: 3,
    currentPage: 1,
    totalUsersCount: 0,
};

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                usersList: state.usersList.map(u => u.id === action.id ? {...u, followed: !u.followed} : u),
            };
        case SET_USERS:
            return {...state, usersList: [...action.userList]};
        default:
            return state;
    }
}

export default usersReducer;