import { Grid } from '@mui/material'
import React from 'react'
import './SignIn.css'
import SignIncard from '../../components/SignInCard/SignInCard'

function SignIn (): JSX.Element {
  return (
    <Grid className="container" container>
      <SignIncard />
    </Grid>
  )
}

export default SignIn
