import { ActionTypes } from "../constants/action-types";


const initialState = {
    blogs: []
}


export const blogReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_BLOGS:
            return { ...state, blogs: payload }
        case ActionTypes.DELETE_BLOGS:
            return { ...state }
        case ActionTypes.ADD_BLOGS:
            return { ...state }
        default:
            return state
    }
}


export const selectedBlogReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_BLOGS:
            return { ...state, ...payload }
        case ActionTypes.REMOVE_SELECTED_BLOGS:
            return {};
        default:
            return state;
    }
}