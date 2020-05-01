import React, {useContext} from 'react'
import {Input} from 'semantic-ui-react'
import {MovieContext} from '../context/movieContext'

export const SearchWrap = () => {

    const search = useContext(MovieContext)

    const onChange = (value) => search.searchRequest(value)

    return (
        <>
            <Input
                className='icon dark'
                icon='search'
                placeholder='Поиск...'
                onChange={event => onChange(event.target.value)}
            />
        </>
    )

}