import {usersAPI} from "../components/api/api";

const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_FOLLOW_IN_PROGRESS = "TOGGLE_FOLLOW_IN_PROGRESS";

export const setUsers = (userList) => ({type: SET_USERS, userList});
export const toggleFollowSuccess = (id, followed) => ({type: TOGGLE_FOLLOW, id, followed});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleFollowInProgress = (userId) => ({type: TOGGLE_FOLLOW_IN_PROGRESS, userId});

export const getUsers = (pageSize, pageNumber=1) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(pageSize, pageNumber)
        .then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
}

export const changePage = (pageSize, pageNumber) => (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(getUsers(pageSize, pageNumber));
}

export const toggleFollow = (userId, isFollow) => (dispatch) =>{
    dispatch(toggleFollowInProgress(userId));
    usersAPI.followToggle(isFollow, userId).then(resultCode => {
        if (resultCode === 0) {
            dispatch(toggleFollowSuccess(userId, isFollow));
        }
    }).finally(() => {
        dispatch(toggleFollowInProgress(userId))
    });
}

const initState = {
    usersList: [],
    pageSize: 100,
    currentPage: 1,
    totalUsersCount: 0,
    isFetching: false,
    usersToggleFollowInProgress: [],
};

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                usersList: state.usersList.map(u => u.id === action.id ? {...u, followed: action.followed} : u),
            };
        case TOGGLE_FOLLOW_IN_PROGRESS:
            let newValue = [...state.usersToggleFollowInProgress];
            state.usersToggleFollowInProgress.some(id => id === action.userId) ?
                newValue = newValue.filter(user => user !== action.userId)
                : newValue.push(action.userId);
            return {
                ...state,
                usersToggleFollowInProgress: newValue,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
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