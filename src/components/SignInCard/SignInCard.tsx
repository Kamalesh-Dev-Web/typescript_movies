import { Grid, Typography } from '@mui/material'
import React from 'react'
import './SignInCard.css'

function SignIncard (): JSX.Element {
  return <Grid className="cardContainer">
    <Grid>
      <Typography className='heading1'>
      Sign in
      </Typography>
    </Grid>
  </Grid>
}

export default SignIncard
