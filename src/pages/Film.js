import React, {useContext, useEffect} from 'react'
import {MovieContext} from '../context/movieContext'
import {Container, Grid, Header, Icon, Image, List, Placeholder, Segment} from 'semantic-ui-react'

const IMAGE_POSTER_PREFIX = 'https://image.tmdb.org/t/p/w300_and_h450_face/'
const IMAGE_POSTER_DEFAULT = 'https://react.semantic-ui.com/images/wireframe/white-image.png'

export const Film = ({match}) => {

    const {loading, film, getFilm} = useContext(MovieContext)

    console.log('poster_path>>>', film)

    const urlName = match.params.name

    useEffect(() => {
        getFilm(urlName)
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <p className="text-center">Загрузка...</p>
    }

    const {
        overview, poster_path, production_countries,
        release_date, runtime, tagline, title, video,
        vote_average, genres
    } = film

    return (
        <Container fluid>
            <Container>
                <Segment inverted compact>
                    <Grid verticalAlign='middle'>
                        <Grid.Column width={5}>
                            {  !poster_path
                                ? (
                                    <Placeholder style={{ height: 450, width: 300 }} inverted>
                                        <Placeholder.Image />
                                    </Placeholder>
                                )
                                : film.poster_path
                                    ? <Image src={IMAGE_POSTER_PREFIX + poster_path}
                                             wrapped ui={false} size='medium'/>
                                    : <Image src={IMAGE_POSTER_DEFAULT}
                                             wrapped size='medium' ui={false}/>
                            }
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <List size={'large'} inverted>
                                <List.Item>
                                    <Header as='h1'>
                                        {title}
                                        <Header.Subheader>
                                            {tagline}
                                        </Header.Subheader>
                                    </Header>
                                </List.Item>

                                <List.Item>
                                    {!!genres
                                        ? genres.map((item, key) => {
                                            return (
                                                <span key={key}>{key > 0 ? ', ' : ''}{item.name}</span>
                                            )
                                        })
                                        : null
                                    }
                                </List.Item>

                                <List.Item>
                                    <Icon name="star outline" />&nbsp;{vote_average}
                                </List.Item>

                                <List.Item>
                                    Продолжительность: {runtime} мин
                                </List.Item>

                                <List.Item>
                                    Дата выхода: {release_date}
                                </List.Item>

                                <List.Item>
                                    <br/>
                                    {overview
                                        ? (
                                            <>
                                                <Header as='h3' inverted>Описание</Header>
                                                <p>{overview}</p>
                                            </>
                                        )
                                        : null
                                    }
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </Container>
        </Container>
    );
};
