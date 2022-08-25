import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NotForm from '../components/NotForm';

function Dashboard() {

  const navigate = useNavigate();
  const {kullanici} = useSelector(state => state.auth)

  useEffect(() => {
    
    if(!kullanici){
      navigate('/login')
    }
  }, [kullanici,navigate])
  

  return (
    <>
      <section className='heading'>
        <h1>Merhaba {kullanici && kullanici.kullaniciAd}</h1>
        <p>Not Ekle</p>
      </section>
      <NotForm />
    </>
  )
}

export default Dashboard