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
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';

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
  
  const [showPassword,setShowPassword]=useState(false)

  
  const [open, setOpen] = useState(false);
  const [hataMesaj,setHataMesaj]=useState('')

  
  const closeSnackbar = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setFormData((onceki)=>({
      ...onceki,
      [e.target.name]:e.target.value
    }))

    if(kullaniciAd !=='' && email!=='' && parola!=='' && parolaKontrol !==''){
			setButtonDisabled(false)
	  }

  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const onSubmit = (e) => {
    e.preventDefault()
    
    if(parola !==parolaKontrol){   
      setHataMesaj("Parolalar eşleşmedi");
		  setOpen(true)
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
      setHataMesaj(mesaj);
		  setOpen(true)
    }

    if(isBasari || kullanici){
      navigate('/')
    }

    dispatch(reset())
    
  },[kullanici, isHata, isBasari, mesaj, navigate, dispatch])

  if (isYukleniyor) {
    <Spinner />
  }

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

          <FormControl fullWidth sx={{marginTop:'10px'}}>
            <InputLabel htmlFor="parola">Parolanızı Giriniz</InputLabel>
            <FilledInput fullWidth id="parola" label="Parola Tekrarını Giriniz" 
            type={showPassword ? 'text':'password'} name="parola" value={parola} onChange={onChange}   
            endAdornment={
            <InputAdornment position="end">
              <IconButton
              onClick={handleClickShowPassword}
              edge="end"
              >
              {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
            } />
          </FormControl>



          <FormControl fullWidth sx={{marginTop:'10px'}}>
            <InputLabel htmlFor="parolaKontrol">Parola Tekrarını Giriniz</InputLabel>
            <FilledInput fullWidth id="parolaKontrol" label="Parola Tekrarını Giriniz" 
            type={showPassword ? 'text':'password'} name="parolaKontrol" value={parolaKontrol} onChange={onChange}   
            endAdornment={
            <InputAdornment position="end">
              <IconButton
              onClick={handleClickShowPassword}
              edge="end"
              >
              {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
            } />
          </FormControl>

          <Button variant="outlined" type="submit" color="info" fullWidth size="large" endIcon={<SendIcon />} sx={{marginTop:'25px'}} disabled={buttonDisabled}>Üye Ol</Button>
        </Box>

      </Stack>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={closeSnackbar}
        anchorOrigin={{vertical:'bottom',horizontal:'center'}}
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

export default Register