import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser, FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
        <h2>Not Uygulaması</h2>
        <div className='='logo>

        </div>
        <ul>
            <li>
                <Link to="/"><FaPen />Not Oluştur</Link>
            </li>
            <li>
                <Link to="/login"><FaSignInAlt />Giriş</Link>
            </li>
            <li>
                <Link to="/register"><FaUser />Üye Ol</Link>
            </li>
        </ul>
    </header>
  )
}

export default Header