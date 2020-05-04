import React, {useContext} from 'react'
import {Container, Card, Grid, Header, Responsive, Segment} from 'semantic-ui-react'
import {MovieContext} from '../context/movieContext'
import {FilmCard} from '../components/FilmCard'
import {Preloader} from '../components/UI/Loader'
import {SearchMessage} from '../components/UI/SearchMessage'
import {PaginationComponent} from '../components/Pagination'

export const Home = () => {
    const {loading, films, search, totalResults, totalPages, loadingPage} = useContext(MovieContext)

    return (
        <Container fluid>
            {!search
                ? (
                    <SearchMessage
                        title='Добро пожаловать!'
                        description='Воспользуйтесь поиском, для того что бы начать просмотр.'
                    />
                )
                : null
            }

            {loading
                ? <Preloader/>
                : !films.length && search !== ''
                    ? (
                        <SearchMessage
                            title='Ошибка'
                            description='По вашему запросу ничего не найдено.'
                        />
                    )
                    : (
                        <>
                            {totalResults > 20
                                ? (
                                    <Responsive minWidth={768}>
                                        <Segment inverted className='segment-title mobile only'>
                                            <Grid centered columns={2} stackable verticalAlign='middle'>
                                                <Grid.Column>
                                                    <Header as='h2' inverted>Результаты поиска «{search}».
                                                        Найдено {totalResults}</Header>
                                                </Grid.Column>
                                                <Grid.Column textAlign='right'>
                                                    <PaginationComponent
                                                        totalPages={totalPages}
                                                    />
                                                </Grid.Column>
                                            </Grid>
                                        </Segment>
                                    </Responsive>
                                )
                                : null
                            }
                            {
                                loadingPage
                                    ? <Preloader/>
                                    : (
                                        <Card.Group centered>
                                            {
                                                films.map(item => (
                                                    <FilmCard film={item} key={item.id}/>
                                                ))
                                            }
                                        </Card.Group>
                                    )
                            }
                        </>
                    )
            }
        </Container>
    )
}
