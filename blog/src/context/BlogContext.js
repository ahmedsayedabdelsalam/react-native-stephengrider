import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'GET_BLOG_POSTS':
            return action.payload;
        case 'UPDATE_BLOG_POST':
            return state.map(blogPost => blogPost.id === action.payload.id ? action.payload : blogPost);
        case 'DELETE_BLOG_POST':
            return state.filter(blogPost => blogPost.id !== action.payload);
        default:
            return state;
    }
};

const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/blogposts')

        dispatch({type: 'GET_BLOG_POSTS', payload: response.data})
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', {
            title,
            content
        })
        if (callback) callback();
    };
};

const updateBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, {
            title,
            content
        });
        dispatch({type: 'UPDATE_BLOG_POST', payload: {id, title, content}});
        if (callback) callback();
    }
}

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({type: 'DELETE_BLOG_POST', payload: id});
    };
};

export const {Context, Provider} = createDataContext(
    blogReducer,
    {
        getBlogPosts,
        addBlogPost,
        updateBlogPost,
        deleteBlogPost
    },
    []
);