import {DEFAULT_STATE, GET_FILM, SEARCH_FILMS, SET_LOADING, SET_LOADING_FILM} from './type'

const handlers = {
    [SET_LOADING]: state => ({...state, loading: true}),
    [SET_LOADING_FILM]: state => ({...state, loadingFilm: false}),
    [SEARCH_FILMS]: (state, {payload}) => ({...state, films: payload.films, loading: false, search: payload.query}),
    [GET_FILM]: (state, {payload}) => ({...state, film: payload, loading: false}),
    [DEFAULT_STATE]: state => ({...state, films: [], film: {}, search: '', loading: false}),
    DEFAULT: state => state
}

export const movieReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}
