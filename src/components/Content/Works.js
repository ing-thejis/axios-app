import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Grid, Paper } from '@material-ui/core'
import MainCard from '../MainCard'

const Works = () => {

    const [works, setWorks] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:8000/works',
        })
        .then((response)=>{
            setWorks(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [setWorks])

    return (
        <>
            <h1>Trabajos</h1>
            <div>
                <Grid container spacing={3}>
                    {works.map(work=>(
                        <Grid item key={work.id} xs={12} md={6} lg={4}>
                            <Paper elevation={2}>
                                <MainCard name={work.name} url={work.url} createAt={work.create_at} />
                            </Paper>
                        </Grid>
                    ))}

                </Grid>

            </div>
        </>
    )
}

export default Works
