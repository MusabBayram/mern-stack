const express = require('express');
const {registerKullanici, loginKullanici, getKullanici} = require('../controllers/kullaniciController');


const router = express.Router();

router.get('/kullanici', getKullanici);
router.post('/', registerKullanici);
router.post('/login', loginKullanici);


module.exports = router;