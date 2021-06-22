const TOGGLE_FOLLOW = "TOGGLE_FOLLOW",
    SET_USERS = "SET_USERS";


export const setUsersAC = (users) => ({type: SET_USERS, userList: users});
export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW, id:userId});

const initState = {
    usersList: []
};

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                usersList: state.usersList.map(u => u.id === action.id ? {...u, followed: !u.followed} : u),
            };
        case SET_USERS:
            return {...state, usersList: [...state.usersList, ...action.userList]};
        default:
            return state;
    }
}

export default usersReducer;