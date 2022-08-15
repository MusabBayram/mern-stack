const express = require('express');
const dotenv = require('dotenv').config();
const { hataYakala } = require('./middlewares/errorMiddleware');
const baglan = require('./config/db');
const colors = require('colors');

const PORT = process.env.PORT;

const app = express();

app.use(express.urlencoded())
app.use(express.json())

app.use('/api/notlar', require('./routes/notRoute'))

baglan()

app.listen(PORT, () => console.log(`Server ${PORT} üzerinde yayında`.magenta.italic))

app.use(hataYakala)
// app.get('/api/notlar', (request, response) => {
//     //response.send('Notlar')
//     //response.json({mesaj:'Merhaba'})
//     var not={
//         ad:'ilk not',
//         icerik: 'ilk içerik',
//         oncelik: 3
//     }
//     response.status(200).json(not)
// })