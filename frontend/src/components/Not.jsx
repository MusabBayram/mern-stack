import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { notSil } from '../features/data/dataSlice'


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red,yellow,green } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';


function Not({not}) {
  
  const [oncelikText, setOncelikText] = useState('')
  const [oncelikAvatar, setOncelikAvatar] = useState('')
  const [oncelikRenk, setOncelikRenk] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    switch (not.oncelik) {
      case 1:
        setOncelikText('Az Öncelikli')
        setOncelikAvatar('AÖ')
        setOncelikRenk(green[800])
        break;
      case 2:
        setOncelikText('Öncelikli')
        setOncelikAvatar('Ö')
        setOncelikRenk(yellow[800])
        break;
      case 3:
        setOncelikText('Çok Öncelikli')
        setOncelikAvatar('ÇÖ')
        setOncelikRenk(red[800])
        break;
      default:
        break;
    }
  },[])

  const onDelete = (id) => {
    dispatch(notSil(id))
  }
  
  return (

    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: oncelikRenk }}>
        {oncelikAvatar}
        </Avatar>
      }
      action={
        <IconButton color='error' onClick={()=>onDelete(not._id)}>
        <CloseIcon  />
        </IconButton>
      }
      title={oncelikText}
      subheader={new Date(not.createdAt).toLocaleString('tr-TR')}
      />
      <CardContent>
      <Typography variant="h4" color="text.secondary">
        {not.baslik}
      </Typography>
      <Typography variant="body2" color="orange">
        {not.aciklama}
      </Typography>
      </CardContent>
    </Card>
  )
}

export default Not