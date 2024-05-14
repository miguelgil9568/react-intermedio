import React from 'react'
import CrNavBar from './components/CrNavBar'
import CrCard from './components/CrCard'
import { Box } from '@mui/material'

const Home = () => {
  return (
    <>
      <CrNavBar/>
      <Box sx={{
        display: 'flex',
        marginTop: 10,
        gap: 2
      }}>
        <CrCard/>
        <CrCard/>
      </Box>
      
    </>
  )
}

export default Home