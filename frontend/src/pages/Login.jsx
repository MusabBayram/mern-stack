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

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';




function Login() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {kullanici, isHata, isBasari, isYukleniyor, mesaj} = useSelector(state => state.auth)

  const [formData, setFormData] = useState({
    email: '',
    parola:''
  })

  const [open, setOpen] = useState(false);
  const [hataMesaj,setHataMesaj]=useState('')

  const { email, parola } = formData

  const closeSnackbar = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setFormData((onceki)=>({
      ...onceki,
      [e.target.name]:e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData ={
      email,
      parola
    }

    dispatch(login(userData))
  }

  useEffect(()=>{

    if(isHata){
      //toast.error(mesaj)
      setHataMesaj(mesaj);
		  setOpen(true)
    }

    if(isBasari || kullanici){
      navigate('/')
    }

    dispatch(reset())
    
  },[kullanici, isHata, isBasari, isYukleniyor, mesaj, navigate, dispatch])

  
  if (isYukleniyor) {
    <Spinner />
  }

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
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={closeSnackbar}
      anchorOrigin={{vertical:'top',horizontal:'center'}}
    >

        <Alert severity="error">
          {hataMesaj} 
          <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={closeSnackbar}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
        </Alert>
      
    </Snackbar>

  </Container>
  )
}

export default Login