import React, {useContext} from 'react'
import {Container, Card} from 'semantic-ui-react'
import {MovieContext} from '../context/movieContext'
import {FilmCard} from '../components/FilmCard'
import {Preloader} from '../components/UI/Loader'
import {SearchMessage} from '../components/UI/SearchMessage'

export const Home = () => {
    const {loading, films, search} = useContext(MovieContext)

    return (
        <Container fluid>
            { !search
                ? (
                    <SearchMessage
                        title='Добро пожаловать!'
                        description='Воспользуйтесь поиском, для того что бы начать просмотр.'
                    />
                )
                : null
            }

            { loading
                ? <Preloader/>
                : !films.length && search !== ''
                    ? (
                        <SearchMessage
                            title='Ошибка'
                            description='По вашему запросу ничего не найдено.'
                        />
                    )
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
