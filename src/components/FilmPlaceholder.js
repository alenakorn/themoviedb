import React from 'react'
import { Grid, Placeholder } from 'semantic-ui-react'

export const FilmPlaceholder = () => {
    return (
        <Grid verticalAlign='middle'>
            <Grid.Column tablet={16} computer={5}>
                <Placeholder inverted className="placeholder-image">
                    <Placeholder.Image/>
                </Placeholder>
            </Grid.Column>

            <Grid.Column tablet={16} computer={10}>
                <Placeholder inverted>
                    <Placeholder.Paragraph>
                        <Placeholder.Line length='medium'/>
                        <Placeholder.Line length='medium'/>
                        <Placeholder.Line length='medium'/>
                        <Placeholder.Line length='medium'/>
                    </Placeholder.Paragraph>
                </Placeholder>

                <Placeholder inverted fluid>
                    <Placeholder.Paragraph>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Paragraph>
                </Placeholder>
            </Grid.Column>
        </Grid>
    )
}
