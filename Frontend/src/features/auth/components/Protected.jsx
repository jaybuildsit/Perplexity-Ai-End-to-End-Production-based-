import React from 'react'
import { useSelector } from 'react-redux'

const Protected = ({children}) => {

    const user = useSelector(state => state.auth.user)
    const loading = useSelector(state => state.auth.loading)

    if(loading){
        <div><h1>Loading...</div>
    }

    if(!user){
        <div><h1></h1></div>
    }

  return (
   
  )
}

export default Protected