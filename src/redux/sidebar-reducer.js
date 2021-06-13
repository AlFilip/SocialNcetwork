const initState = {
    friendsList: [
        {
            id: 1,
            name: "Sergey Mironov",
            img: "https://lh3.googleusercontent.com/-j9tfOldlTfA/Vo4tzsMM_OI/AAAAAAAAAAA/f_7nWUAXRVAcqS0-SQsA1FvF0NppfzizQCOQCEAE/s50-p-k-rw-no/photo.jpg"
        },
        {
            id: 2,
            name: "Artem Stepanov",
            img: "https://lh3.googleusercontent.com/-JLEOBHteRZI/V6LZCqp2hJI/AAAAAAAAAAA/e-ENkAHMLhoQ0ybs0J4s-Q3YbzoM2Qb7wCOQCEAE/s80-p-k-rw-no/photo.jpg"
        },
    ],
}

const sidebarReducer = (state = initState, action) => {
    return state;
}

export default sidebarReducer;