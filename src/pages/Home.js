import React, {useContext} from 'react'
import {Container, Card, Segment, Header, Icon} from 'semantic-ui-react'
import {MovieContext} from '../context/movieContext'
import {FilmCard} from '../components/FilmCard'
import {Preloader} from '../components/UI/Loader'

export const Home = () => {
    const {loading, films, search} = useContext(MovieContext)

    return (
        <Container fluid>
            { !search
                ? (
                    <Segment placeholder inverted className='greeting'>
                        <Header icon as='h2' inverted>
                            <Icon name='search'/>
                            Добро пожаловать!
                            <Header.Subheader>
                                Воспользуйтесь поиском, для того что бы начать просмотр.
                            </Header.Subheader>
                        </Header>
                    </Segment>
                )
                : null
            }

            { loading && search !== ''
                ? <Preloader/>
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
