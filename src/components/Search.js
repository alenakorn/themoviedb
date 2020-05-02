import React, {useContext} from 'react'
import {Input} from 'semantic-ui-react'
import {MovieContext} from '../context/movieContext'
import { Debounce } from 'react-throttle'

export const SearchWrap = () => {
    const search = useContext(MovieContext)

    const onChange = (value) => {
        search.searchRequest(value)
    }

    return (
        <Debounce time="1000" handler="onChange">
            <Input
                className='icon dark'
                icon='search'
                placeholder='Поиск...'
                onChange={event => onChange(event.target.value)}
            />
        </Debounce>
    )
}