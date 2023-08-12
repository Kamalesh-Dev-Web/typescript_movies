import { Grid, Typography, TextField, Button } from '@mui/material'
import React from 'react'
import './SignInCard.css'

function SignIncard (): JSX.Element {
  return <Grid className="cardContainer">
    <Grid>
      <Typography className='heading1'>
      Sign in
      </Typography>
    </Grid>
    <Grid item container xs={12} direction="column" justifyContent="space-evenly"alignItems="stretch" height="70%">
      <TextField
          className='textbox'
          id="standard-password-input"
          label="User name"
          variant="standard"
        />
        <TextField
          className='textbox'
          id="standard-password-input"
          label="Password"
          variant="standard"
          type='password'
        />
        <Button variant="contained">Sign in</Button>
    </Grid>
  </Grid>
}

export default SignIncard
