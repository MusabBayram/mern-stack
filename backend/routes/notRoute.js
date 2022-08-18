const express = require('express');

const router = express.Router();

const { getNotlar, setNotlar, updateNotlar, deleteNotlar } = require('../controllers/notController');

const { kullaniciKontrol } = require('../middlewares/authMiddleware');

/* 3. yöntem aynı route a sahıp olanlar zıncırleme route yapısıyla olusturma */
router.route('/').get(kullaniciKontrol, getNotlar).post(kullaniciKontrol, setNotlar);
router.route('/:id').put(kullaniciKontrol, updateNotlar).delete(kullaniciKontrol, deleteNotlar);

/* 2. yöntem */
// router.get('/', getNotlar)
// router.post('/', setNotlar)
// router.put('/:id', updateNotlar)
// router.delete('/:id', deleteNotlar)

/* 1. yöntem */
// router.delete('/:id', (req,res) => {
//     res.status(200).json({mesaj: `delete ${req.params.id} idli not`})
// })

module.exports = router;