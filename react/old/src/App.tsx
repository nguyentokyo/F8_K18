// import { useState } from 'react'
import './App.css'
import {Box, Grid} from '@mui/material'
import { HeaderBar, Question, SideBar } from './components'

function App() {
  return (
    <>
        <HeaderBar />
        <Box>

            <Grid container spacing={2}>
                <Grid size={8}>
                    <Question />
                </Grid>
                <Grid size={4}>
                    <SideBar />
                </Grid>
            </Grid>
        </Box>
    </>
  )
}

export default App
