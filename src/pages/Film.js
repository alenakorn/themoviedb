import React, {useContext, useEffect} from 'react'
import {MovieContext} from '../context/movieContext'
import {Container, Segment} from 'semantic-ui-react'
import {FilmPlaceholder} from '../components/FilmPlaceholder'
import {DetailFilm} from '../components/DetailFilm'

export const Film = ({match}) => {

    const {loadingFilm, getFilm, getLoadingFilm} = useContext(MovieContext)

    const urlName = match.params.name

    useEffect(() => {
        getFilm(urlName)
        getLoadingFilm()
        // eslint-disable-next-line
    }, [])

    return (
        <Container>
            <Segment inverted>
                { loadingFilm
                    ? <FilmPlaceholder/>
                    : <DetailFilm/>
                }
            </Segment>
        </Container>
    )
}
