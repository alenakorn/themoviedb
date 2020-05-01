import {GET_FILM, SEARCH_FILMS, SET_LOADING} from './type'

const handlers = {
    [SET_LOADING]: state => ({...state, loading: true}),
    [SEARCH_FILMS]: (state, {payload}) => ({...state, films: payload, loading: false}),
    [GET_FILM]: (state, {payload}) => ({...state, film: payload, loading: false}),
    DEFAULT: state => state
}

export const movieReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}
