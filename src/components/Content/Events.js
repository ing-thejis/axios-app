import axios from 'axios'
import React, { useState, useEffect} from 'react'
import { Grid, Paper } from '@material-ui/core'
import MainCard from '../MainCard'

const Events = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        axios({
            method: "get",
            url: 'http://localhost:8000/events'
        })
        .then((response)=>{
            setEvents(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [setEvents])

    return (
        <>
            <h1>Eventos</h1>
            <div>
                <Grid container spacing={3}>
                    {events.map(event=>(
                        <Grid item key={event.id} xs={12} md={6} lg={4}>
                            <Paper elevation={2}>
                                <MainCard name={event.title} url={event.url} createAt={event.date} />
                            </Paper>
                        </Grid>
                    ))}

                </Grid>

            </div>
        </>
    )
}

export default Events
