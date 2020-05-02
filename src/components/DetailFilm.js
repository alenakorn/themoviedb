import React, {useContext} from 'react'
import {MovieContext} from '../context/movieContext'
import {Grid, Header, Icon, Image, List} from 'semantic-ui-react'

const IMAGE_POSTER_PREFIX = 'https://image.tmdb.org/t/p/w300_and_h450_face/'
const IMAGE_POSTER_DEFAULT = 'https://react.semantic-ui.com/images/wireframe/white-image.png'

export const DetailFilm = () => {

    const {film} = useContext(MovieContext)

    const {
        overview, poster_path,
        release_date, runtime, tagline,
        title, vote_average, genres
    } = film

    return (
        <Grid verticalAlign='middle'>

            <Grid.Column  mobile={16} tablet={16} computer={5} textAlign="center">
                {poster_path
                    ? <Image src={IMAGE_POSTER_PREFIX + poster_path}
                             wrapped ui={false}/>
                    : <Image src={IMAGE_POSTER_DEFAULT}
                             className='no-image'
                             wrapped ui={false}/>
                }
            </Grid.Column>

            <Grid.Column tablet={16} computer={10}>
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
                        <Icon name="star outline"/>&nbsp;{vote_average}
                    </List.Item>

                    <List.Item>Продолжительность: {runtime} мин</List.Item>

                    <List.Item>Дата выхода: {release_date}</List.Item>

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
    )
}
