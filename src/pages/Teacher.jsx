import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Teacher = () => {
    const { user } = useSelector(state => state.auth)
    
    if(!user){
        return <Navigate to='/' replace={true} />
    }

    return(
        <div className='min-h-screen w-full'>
            <NavBar/>
        </div>
    )
}

export default Teacher