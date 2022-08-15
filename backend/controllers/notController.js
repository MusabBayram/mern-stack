
const asyncHandler = require('express-async-handler')

const getNotlar = asyncHandler(async(req,res) => {
    
    res.status(200).json({mesaj: 'Controller get notlar'})
})

const setNotlar = asyncHandler(async(req,res) => {
    
    if(!req.body.mesaj){
        //res.status(400).json({mesaj: 'Lütfen mesaj alanını giriniz'})
        res.status(400)
        throw new Error('Lütfen mesaj alanını giriniz')
    }
    res.status(200).json({mesaj: 'Controller post notlar'})
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