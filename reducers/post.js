export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: "산군"
        },
        content: "하위 ^^ #하이",
        Images: [{

        }],
        Comments: [{
            User: {
                nickname: "상남자"
            },
            content: "어험"
        }, {
            User: {
                nickname: "협회장"
            },
            content: "^^"
        }]
    }],
    imagePaths: [],
    postAdded: false,
}

const ADD_POST = "ADD_POST";
export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id: 2,
    content: "더미",
    User: {
        id: 1,
        nickname: "산군"
    },
    Images: [],
    Comments: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            }
        default:
            return state;
    }
}

export default reducer;
