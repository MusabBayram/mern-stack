import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser, FaPen } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch} from 'react-redux'
import { logout, reset } from '../features/auth/authSlice';
import AppBar from '@mui/material/AppBar'
import { Toolbar, Typography, Button } from '@mui/material'
import { Login, Face, Home, Logout } from '@mui/icons-material'

function Header() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {kullanici} = useSelector(state => state.auth)

    const onLogout =() => {
        dispatch(logout())
        dispatch(reset())
        navigate('/login')
    }

    const girisYap = () => {
        navigate('/login')
    }

    const uyeOl = () => {
        navigate('/register')
    }

    const anasayfayaGit = () => {
        navigate('/')
    }

//   return (
//     <header className='header'>
//         <h2>Not Uygulaması</h2>
//         <div className='logo'>

//         </div>
//         <ul>
//             {kullanici ? (
//                 <>
//                     <li>
//                         <Link to="/"><FaPen />Not Oluştur</Link>
//                     </li>      
//                     <li>
//                         <button className='btn' onClick={onLogout}>
//                             <FaSignOutAlt /> Çıkış
//                         </button>
//                     </li>            
//                 </>
//             ) : (
//                 <>
//                     <li>
//                         <Link to="/login"><FaSignInAlt />Giriş</Link>
//                     </li>
//                     <li>
//                         <Link to="/register"><FaUser />Üye Ol</Link>
//                     </li>  
//                 </>
//             )}            
//         </ul>
//     </header>
//   )
return (
    <AppBar position='static' color='error' sx={{marginBottom:'50px'}} >
        <Toolbar>
            <Typography variant='h4' component="div" sx={{flexGrow:1}}>
                Not Uygulaması
            </Typography>
            {kullanici ? (
                <>
                <Button sx={{marginRight: '10px'}} color='inherit' size='large' startIcon={<Home />} onClick={anasayfayaGit}>Anasayfa</Button>
                <Button variant='outlined' color='inherit' size='small' startIcon={<Logout />} onClick={onLogout}>Çıkış</Button>
                </>
            ): (
                <>
                    <Button sx={{marginRight: '10px'}} color='inherit' size='large' startIcon={<Login />} onClick={girisYap}>Giriş</Button>
                    <Button variant='outlined' color='inherit' size='small' startIcon={<Face />} onClick={uyeOl}>Üye Ol</Button>
                </>
            )}
        </Toolbar>
    </AppBar>
)
}

export default Header