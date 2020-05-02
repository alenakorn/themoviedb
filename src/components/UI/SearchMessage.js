import React from 'react'
import {Header, Icon, Segment} from 'semantic-ui-react'

export const SearchMessage = props => {
    return (
        <Segment placeholder inverted className='greeting'>
            <Header icon as='h2' inverted>
                <Icon name='search'/>
                {props.title}
                <Header.Subheader>
                    {props.description}
                </Header.Subheader>
            </Header>
        </Segment>
    )
}
