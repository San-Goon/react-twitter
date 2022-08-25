import shortId from "shortid"

export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: "산군"
        },
        content: "하위 ^^ #하이",
        Images: [{
            id: shortId.generate(),
            src: "https://cdn.motorplex.co.kr/news/photo/202112/2358_9142_4537.jpg"
        }, {
            id: shortId.generate(),
            src: "https://media.ed.edmunds-media.com/porsche/cayenne/2021/oem/2021_porsche_cayenne_4dr-suv_base_fq_oem_1_815.jpg"
        }, {
            id: shortId.generate(),
            src: "https://www.ccarprice.com/products/Tesla-Model-3-Performance-2022.jpg"
        }],
        Comments: [{
            id: shortId.generate(),
            User: {
                id: shortId.generate(),
                nickname: "상남자"
            },
            content: "어험"
        }, {
            id: shortId.generate(),
            User: {
                id: shortId.generate(),
                nickname: "협회장"
            },
            content: "^^"
        }]
    }],
    imagePaths: [],
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
}

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
})

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
})


const dummyPost =(data) =>  ({
    id: data.id,
    content: data.content,
    User: {
        id: 1,
        nickname: "산군"
    },
    Images: [],
    Comments: [],
})

const dummyComment =(data) =>  ({
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: "산군"
    },
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoading: true,
                addPostDone: false,
                addPostError: null,
            }
        case ADD_POST_SUCCESS:
            return {
                ...state,
                mainPosts: [dummyPost(action.data), ...state.mainPosts],
                addPostLoading: false,
                addPostDone: true,
            }
        case ADD_POST_FAILURE:
            return {
                ...state,
                addPostLoading: false,
                addPostError: action.error,
            }
        case REMOVE_POST_REQUEST:
            return {
                ...state,
                removePostLoading: true,
                removePostDone: false,
                removePostError: null,
            }
        case REMOVE_POST_SUCCESS:
            return {
                ...state,
                mainPosts: state.mainPosts.filter((v) => v.id !== action.data),
                removePostLoading: false,
                removePostDone: true,
            }
        case REMOVE_POST_FAILURE:
            return {
                ...state,
                removePostLoading: false,
                removePostError: action.error,
            }
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addCommentLoading: true,
                addCommentDone: false,
                addCommentError: null,
            }
        case ADD_COMMENT_SUCCESS: {
            const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
            const post = {...state.mainPosts[postIndex]};
            post.Comments = [dummyComment(action.data.content), ...post.Comments]
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = post;
            return {
                ...state,
                mainPosts,
                addCommentLoading: false,
                addCommentDone: true,
            }
        }
        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                addCommentLoading: false,
                addCommentError: action.error,
            }
        default:
            return state;
    }
}

export default reducer;
