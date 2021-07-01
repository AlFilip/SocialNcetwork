const TOGGLE_FOLLOW = "TOGGLE_FOLLOW",
    TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
    SET_USERS = "SET_USERS",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

export const setUsers = (users) => ({type: SET_USERS, userList: users});
export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW, id: userId});
export const toggleIsFetching = () => ({type: TOGGLE_IS_FETCHING});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});

const initState = {
    usersList: [],
    pageSize: 3,
    currentPage: 1,
    totalUsersCount: 0,
    isFetching: false,
};

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                usersList: state.usersList.map(u => u.id === action.id ? {...u, followed: !u.followed} : u),
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching,
            };
        case SET_USERS:
            return {...state, usersList: [...action.userList]};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount};
        default:
            return state;
    }
}

export default usersReducer;