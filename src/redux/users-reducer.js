const TOGGLE_FOLLOW = "TOGGLE_FOLLOW",
    SET_USERS = "SET_USERS";


export const setUsersAC = (users) => ({type: SET_USERS, userList: users});
export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW, id:userId});

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
        case TOGGLE_FOLLOW:
            return {
                ...state,
                usersList: state.usersList.map(u => u.id === action.id ? {...u, isFollower: !u.isFollower} : u),
            };
        case SET_USERS:
            return {...state, usersList: [...state.usersList, action.userList]};
        default:
            return state;
    }
}

export default usersReducer;