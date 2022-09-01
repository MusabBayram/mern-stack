import React, { useState, useEffect } from 'react'
import { FaUserCheck } from 'react-icons/fa';
import { useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



function Login() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {kullanici, isHata, isBasari, isYukleniyor, mesaj} = useSelector(state => state.auth)

  const [formData, setFormData] = useState({
    email: '',
    parola:''
  })

  const { email, parola } = formData

  const onChange = (e) => {
    setFormData((onceki)=>({
      ...onceki,
      [e.target.name]:e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    //console.log(formData);

    const userData ={
      email,
      parola
    }

    dispatch(login(userData))
  }

  useEffect(()=>{

    if(isHata){
      toast.error(mesaj)
    }

    if(isBasari || kullanici){
      navigate('/')
    }

    dispatch(reset())
    
  },[kullanici, isHata, isBasari, isYukleniyor, mesaj, navigate, dispatch])

  
  if (isYukleniyor) {
    <Spinner />
  }

  // return (
  //   <>
  //     <section className='heading'>
  //       <h1>
  //         <FaUserCheck /> Giriş Yap
  //       </h1>
  //     </section>
  //     <section className='form'>
  //       <form onSubmit={onSubmit}>
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
  //           <button type='submit' className='btn btn-block'>Giriş</button>
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
            <AssignmentIcon color="info" sx={{fontSize:'45px'}} />  Login Sayfası
          </Typography>
        </Box>
        <Divider />
        <Box component="form" onSubmit={onSubmit} >
          <TextField fullWidth label="Email Giriniz" type="email" name="email" value={email} onChange={onChange} margin="normal" />

          <TextField fullWidth label="Parola Giriniz" type="password" name="parola" value={parola} onChange={onChange} margin="normal" />

          <Button variant="contained" type="submit" color="success" fullWidth size="large" endIcon={<SendIcon />} sx={{marginTop:'25px'}}>Giriş Yap</Button>
        </Box>
    </Stack>
  </Container>
  )
}

export default Login