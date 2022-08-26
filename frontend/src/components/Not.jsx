import React, { useState, useEffect } from 'react'

function Not({not}) {
  
  const [oncelikText, setOncelikText] = useState('')

  useEffect(() => {
    switch (not.oncelik) {
        case 1:
            setOncelikText('Az Öncelikli')
            break;
        case 2:
            setOncelikText('Öncelikli')
            break;
        case 3:
            setOncelikText('Çok Öncelikli')
            break;
        default:
            break;
    }
    console.log(oncelikText);
  },[])
  
    return (
    <div className='not'>
        <div>
            {new Date(not.createdAt).toLocaleString('tr-TR')}
            <h2>{not.baslik}</h2>
            <p>{not.aciklama}</p>
            <p>{oncelikText}</p>
        </div>
    </div>
  )
}

export default Not