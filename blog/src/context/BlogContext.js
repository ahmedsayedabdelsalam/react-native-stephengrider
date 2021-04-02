import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BLOG_POST':
            return [...state, {
                id: Math.floor(Math.random() * 99999),
                title: action.payload.title,
                content: action.payload.content
            }];
        case 'UPDATE_BLOG_POST':
            return state.map(blogPost => blogPost.id === action.payload.id ? action.payload : blogPost)
        case 'DELETE_BLOG_POST':
            return state.filter(blogPost => blogPost.id !== action.payload);
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({type: 'ADD_BLOG_POST', payload: {title, content}});
        if (callback) callback();
    };
};

const updateBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({type: 'UPDATE_BLOG_POST', payload: {id, title, content}});
        if (callback) callback();
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: 'DELETE_BLOG_POST', payload: id});
    };
};

export const {Context, Provider} = createDataContext(
    blogReducer,
    {
        addBlogPost,
        updateBlogPost,
        deleteBlogPost
    },
    []
);