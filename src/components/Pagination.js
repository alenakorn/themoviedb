import React, {useContext} from 'react'
import {Pagination} from 'semantic-ui-react'
import {MovieContext} from '../context/movieContext'

export const PaginationComponent = props => {
    const {onPageChange, activePage} = useContext(MovieContext)

    const onChange = (e, pageInfo) => {
        onPageChange(pageInfo.activePage)
    }

    return (
        <Pagination
            inverted
            activePage={activePage}
            defaultActivePage={1}
            firstItem={null}
            lastItem={null}
            prevItem={null}
            nextItem={null}
            pointing
            secondary
            totalPages={props.totalPages}
            onPageChange={onChange}
        />
    )
}
