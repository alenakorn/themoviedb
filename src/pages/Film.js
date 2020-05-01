import React, {useContext, useEffect} from 'react'
import {MovieContext} from '../context/movieContext'
import {Container, Grid, Header, Icon, Image, List} from 'semantic-ui-react'

export const Film = ({match}) => {

    const {loading, film, getFilm} = useContext(MovieContext)

    const urlName = match.params.name

    useEffect(() => {
        getFilm(urlName)
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <p className="text-center">Загрузка...</p>
    }

    const {
        backdrop_path, id, overview,
        poster_path, production_countries,
        release_date, runtime, tagline, title, video, vote_average, genres
    } = film

    return (
        <Container fluid>
            <Container>
                <Grid>
                    <Grid.Column width={5}>
                        {film.poster_path
                            ? <Image src={`https://image.tmdb.org/t/p/w300_and_h450_face/${poster_path}`}
                                     wrapped ui={false} size='medium'/>
                            : <Image src='https://react.semantic-ui.com/images/wireframe/white-image.png'
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
                                            <span key={key}>{item.name}&nbsp;</span>
                                        )
                                    })
                                    : null
                                }
                            </List.Item>

                            <List.Item>
                                <Icon name="star outline"/>{vote_average}
                            </List.Item>

                            <List.Item>
                                Продолжительность: {runtime} мин
                            </List.Item>

                            <List.Item>
                                Дата выхода: {release_date}
                            </List.Item>

                            <List.Item>
                                <br/>
                                { overview
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
            </Container>
        </Container>
    );
};
