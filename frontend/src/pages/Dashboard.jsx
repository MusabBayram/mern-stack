import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import NotForm from '../components/NotForm';
import { notlarGetir, reset } from '../features/data/dataSlice'
import Spinner from '../components/Spinner'
import Not from '../components/Not';
import {toast} from 'react-toastify'

function Dashboard() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {kullanici} = useSelector(state => state.auth)
  const {notlar, isYukleniyor, isHata, mesaj} = useSelector(state => state.notlar)
  
  useEffect(() => {
    if(isHata){
      toast.error(mesaj)
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
        <p>Hoş Geldiniz Not Ekleyebilir Notlarınızı Görüntüleyebilirsiniz</p>
      </section>
      <NotForm />
      <section >
        {notlar.length >0 ? (<div className='notlar'>
          {notlar.map((not)=>(
          <Not key={not._id} not={not}/>
          ))}
        </div>):(<h1>Henüz not yüklemediniz...</h1>)}
      </section>
    </>
  )
}

export default Dashboard