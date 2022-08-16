const mongoose = require('mongoose');

const notSchema = mongoose.Schema({
    baslik:{
        type: String,
        required: [true, 'Lütfen Not Başlığını giriniz']
    },
    aciklama:{
        type: String,
        required: [true, 'Lütfen Not Açıklamasını giriniz']
    },
    oncelik:{
        type: Number
    }

},
{
    timestamps : true
})

module.exports = mongoose.model('Not', notSchema)