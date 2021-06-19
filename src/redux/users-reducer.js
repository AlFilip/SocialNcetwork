const FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS";


export const followAC = (id) => ({type: FOLLOW, id: id});
export const unfollowAC = (id) => ({type: UNFOLLOW, id: id});
export const setUsersAC = (users) => ({type: SET_USERS, userList: users});

const initState = {
    usersList: [
        {
            id: 1,
            fullName: "Aleksey F.",
            status: "Be happy, don't worry",
            location: {country: "Russia", city: "Volzhsk"},
            isFollower: true,
        },
        {
            id: 2,
            fullName: "Aleksey F.",
            status: "Be happy, don't worry",
            location: {country: "Russia", city: "Volzhsk"},
            isFollower: false,
        },
        {
            id: 3,
            fullName: "Aleksey F.",
            status: "Be happy, don't worry",
            location: {country: "Russia", city: "Volzhsk"},
            isFollower: false,
        },
    ]
};

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersList: state.usersList.map(u => u.id === action.id ? {...u, isFollower: true} : u),
            };
        case UNFOLLOW:
            return {
                ...state,
                usersList: state.usersList.map(u => u.id === action.id ? {...u, isFollower: false} : u),
            };
        case SET_USERS:
            return {...state, usersList: [...state.usersList, action.userList]};
        default:
            return state;
    }
}

export default usersReducer;