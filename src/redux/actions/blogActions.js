// import axios from "axios"
import { ActionTypes } from "../constants/action-types"
export const getBlogs = (blogs) => {
    return {
        type: ActionTypes.SET_BLOGS,
        payload: blogs
    }
}

export const selectedBlog = (blog) => {
    return {
        type: ActionTypes.SELECTED_BLOGS,
        payload: blog,
    }
}

export const removeSelectedBlog = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_BLOGS,
    };
};


export const deleteBlog = () => {
    return {
        type: ActionTypes.DELETE_BLOGS,
    }
}

export const addBlog = () => {
    return {
        type: ActionTypes.ADD_BLOGS,
    }
}

// export const createPost = (user) => {
//     return function(dispatch) {
//         axios
//             .post(`https://jsonplaceholder.typicode.com/posts/`, user)
//             .then((res) =>{
//                 console.log("res", res)
//                 dispatch(addBlog())
//                 dispatch(setBlogs())
//             })
//             .catch((error) => console.log(error))
//     }
// }