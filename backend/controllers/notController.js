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
        oncelik: req.body.oncelik,
        kullanici: req.user.id
    })

    res.status(200).json(not)
})

const updateNotlar = asyncHandler(async(req,res) => {
    
    const not = await notModel.findById(req.params.id)

    if(!not){
        res.status(400)
        throw new Error('Not Bulunamadı')
    }

    const guncellendi = await notModel.findByIdAndUpdate(req.params.id, req.body, {new:true})

    res.status(200).json(guncellendi)
})

const deleteNotlar = asyncHandler(async(req,res) => {
    
    const not = await notModel.findById(req.params.id)

    if(!not){
        res.status(400)
        throw new Error('Not Bulunamadı')
    }

    await not.remove()

    res.status(200).json(`${not.baslik} başlıklı Not Silindi`)

})

module.exports = {
    getNotlar,
    setNotlar,
    updateNotlar,
    deleteNotlar
}