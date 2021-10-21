import { Card, CardMedia, CardContent } from '@material-ui/core'
import React from 'react'

const MainCard = (props) => {
    return (
        <div>
            <Card>
                <CardMedia 
                    component="img"
                    height="225"
                    width="225"
                    image={props.url}
                    alt={props.name}
                />
                <CardContent>
                    <h3>{props.name}</h3>
                    <span>{props.createAt}</span>
                </CardContent>    
            </Card>
        </div>
    )
}

export default MainCard
