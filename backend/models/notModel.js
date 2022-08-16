const mongoose = require('mongoose');

const notSchema = mongoose.Schema({
    kullanici:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Kullanicis'
    },
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