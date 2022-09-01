import React, { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Register() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {kullanici, isHata, isBasari, isYukleniyor, mesaj} = useSelector(state => state.auth)

  const [formData, setFormData] = useState({
    kullaniciAd: '',
    email: '',
    parola:'',
    parolaKontrol:''
  })

  const { kullaniciAd, email, parola, parolaKontrol } = formData
  
  const [buttonDisabled,setButtonDisabled]=useState(true)

  const onChange = (e) => {
    setFormData((onceki)=>({
      ...onceki,
      [e.target.name]:e.target.value
    }))

    if(kullaniciAd !=='' && email!=='' && parola!=='' && parolaKontrol !==''){
			setButtonDisabled(false)
	  }

  }

  const onSubmit = (e) => {
    e.preventDefault()
    //console.log(formData);
    
    if(parola !==parolaKontrol){
      toast.error('Parolalar eşleşmedi')
    }
    else{
      const userData ={
        kullaniciAd, email, parola
      }
      dispatch(register(userData))
    }  
  }

  useEffect(()=>{

    if(isHata){
      toast.error(mesaj)
    }

    if(isBasari || kullanici){
      navigate('/')
    }

    dispatch(reset())
    
  },[kullanici, isHata, isBasari, mesaj, navigate, dispatch])

  if (isYukleniyor) {
    <Spinner />
  }

  // return (
  //   <>
  //     <section className='heading'>
  //       <h1>
  //         <FaUser /> Üyelik Oluştur
  //       </h1>
  //     </section>
  //     <section className='form'>
  //       <form onSubmit={onSubmit}>
  //         <div className='form-group'>
  //           <input 
  //             type="text" 
  //             className='form-control' 
  //             id="kullaniciAd"
  //             name="kullaniciAd"
  //             value={kullaniciAd}
  //             placeholder="Kullanıcı Ad Giriniz"
  //             onChange={onChange} />
  //         </div>
  //         <div className='form-group'>
  //           <input 
  //             type="email" 
  //             className='form-control' 
  //             id="email"
  //             name="email"
  //             value={email}
  //             placeholder="Email Giriniz"
  //             onChange={onChange} />
  //         </div>
  //         <div className='form-group'>
  //           <input 
  //             type="password" 
  //             className='form-control' 
  //             id="parola"
  //             name="parola"
  //             value={parola}
  //             placeholder="Parola Giriniz"
  //             onChange={onChange} />
  //         </div>
  //         <div className='form-group'>
  //           <input 
  //             type="password" 
  //             className='form-control' 
  //             id="parolaKontrol"
  //             name="parolaKontrol"
  //             value={parolaKontrol}
  //             placeholder="Parola Tekrarını Giriniz"
  //             onChange={onChange} />
  //         </div>
  //         <div className='form-group'>
  //           <button type='submit' className='btn btn-block'>Üye Ol</button>
  //         </div>
  //       </form>
  //     </section>
  //   </>
  // )
  return (
    <Container maxWidth="md">

      <Stack spacing={6}>
        <Box>              
          <Typography variant='h3' >
            <AssignmentIcon color="info" sx={{fontSize:'45px'}} />  Register Sayfası
          </Typography>
        </Box>
        <Divider />
        <Box component="form" onSubmit={onSubmit} >
          <TextField fullWidth label="Kullanıcı Adınızı Giriniz" type="text" name="kullaniciAd" variant="filled" value={kullaniciAd} onChange={onChange} margin="normal" />

          <TextField fullWidth label="Email Giriniz" type="email" name="email" value={email} variant="filled" onChange={onChange} margin="normal" />

          <TextField fullWidth label="Parola Giriniz" type="password" name="parola" value={parola} variant="filled" onChange={onChange} margin="normal" />

          <TextField fullWidth label="Parola Tekrarını Giriniz" type="password" variant="filled" name="parolaKontrol" value={parolaKontrol} onChange={onChange} margin="normal" />

          <Button variant="outlined" type="submit" color="info" fullWidth size="large" endIcon={<SendIcon />} sx={{marginTop:'25px'}} disabled={buttonDisabled}>Üye Ol</Button>
        </Box>

      </Stack>
    </Container>
  )
}

export default Register