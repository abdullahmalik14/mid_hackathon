import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const Public_Routes = () => {
    const user_state = useSelector((state)=>state.user_auth)
  return !user_state.user_auth?<Outlet/> : <Navigate to ='/'/>
  
}

export default Public_Routes