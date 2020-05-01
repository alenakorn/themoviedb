import React, {useReducer} from 'react'
import axios from 'axios'

import {MovieContext} from './movieContext'
import {movieReducer} from './movieReducer'

import {GET_FILM, SEARCH_FILMS, SET_LOADING} from './type'

const API_KEY = '8f377e1df6c2f4fce7385a40245c1557'
const LANGUAGE = 'ru-RU'

const withCreds = (url, query) => {
    return `https://api.themoviedb.org/3/${url}?api_key=${API_KEY}&language=${LANGUAGE}${query ? `&query=${query}` : ''}}`
}

export const MovieState = ({children}) => {
    const initialState = {
        films: [],
        film: {},
        loading: false,
    }

    const [state, dispatch] = useReducer(movieReducer, initialState)

    const setLoading = () => dispatch({type: SET_LOADING})

    const searchRequest = async value => {
        setLoading()

        const response = await axios.get(
            withCreds(`search/movie`, value)
        )

        dispatch({
            type: SEARCH_FILMS,
            payload: response.data.results
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

    const {loading, films, film} = state

    return (
        <MovieContext.Provider value={{
            setLoading, searchRequest, getFilm, loading, films, film
        }}>
            {children}
        </MovieContext.Provider>

    )
}