const asyncHandler = require('express-async-handler');
const notModel = require('../models/notModel');

const getNotlar = asyncHandler(async(req,res) => {
    
    const notlar = await notModel.find()

    res.status(200).json(notlar)
})

const setNotlar = asyncHandler(async(req,res) => {

    if(!req.body.baslik || !req.body.aciklama){
        res.status(400)
        throw new Error('Lütfen Başlık ve açıklama alanlarını giriniz')
    }

    const not = await notModel.create({
        baslik: req.body.baslik,
        aciklama: req.body.aciklama,
        oncelik: req.body.oncelik
    })

    res.status(200).json(not)
})

const updateNotlar = asyncHandler(async(req,res) => {
    
    res.status(200).json({mesaj: `Controller put ${req.params.id} idli notlar`})
})

const deleteNotlar = asyncHandler(async(req,res) => {
    
    res.status(200).json({mesaj: `Controller delete ${req.params.id} idli notlar`})
})

module.exports = {
    getNotlar,
    setNotlar,
    updateNotlar,
    deleteNotlar
}