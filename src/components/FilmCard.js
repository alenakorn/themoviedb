import React from 'react'
import {Card, Icon, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const IMAGE_POSTER_PREFIX = 'https://image.tmdb.org/t/p/w440_and_h660_face/'
const IMAGE_POSTER_DEFAULT = 'https://react.semantic-ui.com/images/wireframe/white-image.png'

export const FilmCard = ({film}) => {
    return (
        <Link to={`/film/${film.id}`} className="ui card movie">
            {film.poster_path
                ? <Image src={IMAGE_POSTER_PREFIX + film.poster_path} wrapped
                         ui={false}/>
                : <Image src={IMAGE_POSTER_DEFAULT} wrapped size='medium'
                         className='no-image'
                         ui={false}/>
            }
            <Card.Content>
                <Card.Header>{film.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in {film.release_date}</span>
                </Card.Meta>
                <Card.Description>
                    {film.overview.length > 100
                        ? film.overview.substring(0, 100) + ' ...'
                        : film.overview
                    }
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='star outline'/>
                {film.vote_average}
            </Card.Content>
        </Link>
    )
}
