import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { notOlustur } from '../features/data/dataSlice'

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField  from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';



function NotForm() {

    
    const dispatch = useDispatch();

    const [baslik, setBaslik] =useState('')
    const [aciklama, setAciklama] =useState('')
    const [oncelik, setOncelik] =useState(1)

    const onSubmit = (e) => {
        e.preventDefault();

        //console.log(baslik, aciklama, oncelik);
        window.location.reload()
        
        dispatch(notOlustur({baslik, aciklama, oncelik}))
        setBaslik('')
        setAciklama('')
        setOncelik(1)
    }
  
  
    return (
    
        <Box sx={{ flexGrow: 1,marginBottom:'25px' }} component="form" onSubmit={onSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <FormControl fullWidth>
                            <TextField  label="Not Başlığını Giriniz" type="text" 
                            name="baslik" value={baslik} onChange={(e)=>setBaslik(e.target.value)}  />
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl fullWidth>
                            <InputLabel id="selectId">Öncelik Sırası</InputLabel>
                            <Select
                            labelId="selectId"
                            value={oncelik}
                            label="Öncelik Sırası"
                            onChange={(e)=>setOncelik(e.target.value)}
                            >
                            <MenuItem value="1">Az Öncelikli</MenuItem>
                            <MenuItem value="2">Öncelikli</MenuItem>
                            <MenuItem value="3">Çok Öncelikli</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container sx={{marginTop:'25px'}}>
                <FormControl fullWidth>
                            <TextField variant='standard'  label="Not Açıklamasını Giriniz" type="text" name="aciklama" value={aciklama} onChange={(e)=>setAciklama(e.target.value)}  />
                        </FormControl>
                </Grid>
                <Grid container sx={{marginTop:'25px'}}>
                <FormControl fullWidth>
                        <Button type="submit" size="large" variant="contained" 
                        endIcon={<AddCircleIcon/>}>Not Ekle</Button>
                </FormControl>
                </Grid>
        </Box>
    )
}

export default NotForm