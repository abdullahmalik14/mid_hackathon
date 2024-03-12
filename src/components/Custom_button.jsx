import { Button } from '@mui/material'
import React from 'react'

const Custom_button = (props) => {
  return (
    <> 
    <Button {...props} sx={{width:"100%",color:"white",bgcolor:"#800020"}} variant='outlined' > {props.children}</Button>
    </>
  )
}

export default Custom_button