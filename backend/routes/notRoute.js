const express = require('express');

const router = express.Router();

const { getNotlar, setNotlar, updateNotlar, deleteNotlar } = require('../controllers/notController');

/* 3. yöntem aynı route a sahıp olanlar zıncırleme route yapısıyla olusturma */
router.route('/').get(getNotlar).post(setNotlar);
router.route('/:id').put(updateNotlar).delete(deleteNotlar);

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