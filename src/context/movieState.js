import React, {useReducer} from 'react'
import axios from 'axios'

import {MovieContext} from './movieContext'
import {movieReducer} from './movieReducer'

import {
    DEFAULT_STATE,
    GET_FILM,
    ON_PAGE_CHANGE,
    SEARCH_FILMS,
    SET_LOADING,
    SET_LOADING_FILM,
    SET_LOADING_PAGE
} from './type'

const API_KEY = '8f377e1df6c2f4fce7385a40245c1557'
const LANGUAGE = 'ru-RU'

const withCreds = (url, query, page) => {
    return `https://api.themoviedb.org/3/${url}?api_key=${API_KEY}&language=${LANGUAGE}${query ? `&query=${query}` : ''}${page ? `&page=${page}` : ''}`
}

export const MovieState = ({children}) => {
    const initialState = {
        films: [],
        film: {},
        totalResults: null,
        totalPages: null,
        activePage: 1,
        search: '',
        loading: false,
        loadingFilm: true,
        loadingPage: false,
    }

    const [state, dispatch] = useReducer(movieReducer, initialState)

    const setLoading = () => dispatch({type: SET_LOADING})
    const setLoadingPage = () => dispatch({type: SET_LOADING_PAGE})

    const getLoadingFilm = () => {
        setTimeout(() => dispatch({type: SET_LOADING_FILM}), 2500)
    }

    const defaultState = () => {
        dispatch({
            type: DEFAULT_STATE,
        })
    }

    const searchRequest = async value => {
        if (!value) {
            defaultState()
            return
        }
        setLoading()

        const response = await axios.get(
            withCreds(`search/movie`, value)
        )

        dispatch({
            type: SEARCH_FILMS,
            payload: {
                films: response.data.results,
                query: value,
                totalResults: response.data.total_results,
                totalPages: response.data.total_pages,
            }
        })
    }

    const onPageChange = async page => {
        setLoadingPage()

        const response = await axios.get(
            withCreds(`search/movie`, search, page)
        )

        dispatch({
            type: ON_PAGE_CHANGE,
            payload: {
                films: response.data.results,
                activePage: page
            },
        })
    }

    const getFilm = async id => {
        setLoading()

        const response = await axios.get(
            withCreds(`movie/${id}`)
        )

        dispatch({
            type: GET_FILM,
            payload: response.data
        })
    }

    const {loading, loadingFilm, films, film, search, totalPages, totalResults, activePage, loadingPage} = state

    return (
        <MovieContext.Provider value={{
            setLoading, searchRequest, getFilm, getLoadingFilm, onPageChange,
            loading, loadingFilm, films, film, search, totalPages, totalResults, activePage, loadingPage
        }}>
            {children}
        </MovieContext.Provider>

    )
}
