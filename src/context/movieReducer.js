import {
    DEFAULT_STATE,
    GET_FILM,
    ON_PAGE_CHANGE,
    SEARCH_FILMS,
    SET_LOADING,
    SET_LOADING_FILM,
    SET_LOADING_PAGE
} from './type'

const handlers = {
    [SET_LOADING]: state => ({...state, loading: true}),
    [SET_LOADING_PAGE]: state => ({...state, loadingPage: true}),
    [SET_LOADING_FILM]: state => ({...state, loadingFilm: false}),
    [SEARCH_FILMS]: (state, {payload}) => ({
        ...state,
        films: payload.films,
        totalResults: payload.totalResults,
        totalPages: payload.totalPages,
        search: payload.query,
        loading: false
    }),
    [ON_PAGE_CHANGE]: (state, {payload}) => ({
        ...state,
        films:payload.films,
        activePage: payload.activePage,
        loadingPage: false
    }),
    [GET_FILM]: (state, {payload}) => ({...state, film: payload, loading: false}),
    [DEFAULT_STATE]: state => ({...state, films: [], film: {}, search: '', loading: false}),
    DEFAULT: state => state
}

export const movieReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}
