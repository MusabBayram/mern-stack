const express = require('express');
const dotenv = require('dotenv').config()

const PORT = process.env.PORT;

const app = express();

const serverFonk = () => {
    console.log(`Server ${PORT} üzerinde yayında`);
}

app.use('/api/notlar', require('./routes/notRoute'))

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

app.listen(PORT, serverFonk)