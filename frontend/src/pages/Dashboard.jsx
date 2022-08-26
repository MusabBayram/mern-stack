import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import NotForm from '../components/NotForm';
import { notlarGetir, reset } from '../features/data/dataSlice'
import Spinner from '../components/Spinner'

function Dashboard() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {kullanici} = useSelector(state => state.auth)
  const {notlar, isYukleniyor, isHata, isBasari, mesaj} = useSelector(state => state.notlar)
  
  useEffect(() => {
    if(isHata){
      console.log(mesaj);
    }
    
    if(!kullanici){
      navigate('/login')
    }
    
    dispatch(notlarGetir())

    return () => {
      dispatch(reset())
    }

  }, [kullanici,navigate,isHata, dispatch, mesaj])

  if(isYukleniyor){
    <Spinner />
  }

  

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