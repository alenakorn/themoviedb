import React, {useContext} from 'react'
import {Container, Card} from 'semantic-ui-react'
import {MovieContext} from '../context/movieContext'
import {FilmCard} from '../components/FilmCard'

export const Home = () => {
    const {loading, films} = useContext(MovieContext)

    const containerPadding = {
        padding: '4em'
    }

    return (
        <Container fluid style={containerPadding}>
            { loading
                ? <h1>Loading</h1>
                : (
                    <Card.Group itemsPerRow={6}>
                        {
                            films.map(item => (
                                <FilmCard film={item} key={item.id}/>
                            ))
                        }
                    </Card.Group>
                )
            }
        </Container>
    );
}
