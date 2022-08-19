import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa';

function Register() {

  const [formData, setFormData] = useState({
    kullaniciAd: '',
    email: '',
    parola:'',
    parolaKontrol:''
  })

  const { kullaniciAd, email, parola, parolaKontrol } = formData

  const onChange = (e) => {
    setFormData((onceki)=>({
      ...onceki,
      [e.target.name]:e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Üyelik Oluştur
        </h1>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input 
              type="text" 
              className='form-control' 
              id="kullaniciAd"
              name="kullaniciAd"
              value={kullaniciAd}
              placeholder="Kullanıcı Ad Giriniz"
              onChange={onChange} />
          </div>
          <div className='form-group'>
            <input 
              type="email" 
              className='form-control' 
              id="email"
              name="email"
              value={email}
              placeholder="Email Giriniz"
              onChange={onChange} />
          </div>
          <div className='form-group'>
            <input 
              type="password" 
              className='form-control' 
              id="parola"
              name="parola"
              value={parola}
              placeholder="Parola Giriniz"
              onChange={onChange} />
          </div>
          <div className='form-group'>
            <input 
              type="password" 
              className='form-control' 
              id="parolaKontrol"
              name="parolaKontrol"
              value={parolaKontrol}
              placeholder="Parola Tekrarını Giriniz"
              onChange={onChange} />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>Üye Ol</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register