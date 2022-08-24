import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Dashboard() {

  const navigate = useNavigate();
  const {kullanici} = useSelector(state => state.auth)

  useEffect(() => {
    
    if(!kullanici){
      navigate('/login')
    }
  }, [kullanici,navigate])
  

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard