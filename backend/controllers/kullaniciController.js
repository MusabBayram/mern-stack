const asyncHandler = require('express-async-handler');
const Kullanici = require('../models/kullaniciModel');

const registerKullanici = asyncHandler (async(req,res) => {

    const {kullaniciAd, email, parola} = req.body;

    if(!kullaniciAd || !email || !parola){        
        res.status(400)
        throw new Error('Lütfen Gerekli Alanları Doldurunuz')
    }

    const kullanici = await Kullanici.findOne({email})

    if(kullanici){
        res.status(400)
        throw new Error('Bu email zaten kullanılıyor')
    }
    res.json({mesaj:'Kullanıcı Register İşlemleri'})
})

const loginKullanici = (req,res) => {
    res.json({mesaj:'Kullanıcı Login İşlemleri'})
}

const getKullanici = (req,res) => {
    res.json({mesaj:'Kullanıcı Get İşlemleri'})
}

module.exports={
    registerKullanici,
    loginKullanici,
    getKullanici
}