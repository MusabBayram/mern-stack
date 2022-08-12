const express = require('express');
const dotenv = require('dotenv').config()

const PORT = process.env.PORT;

const app = express();

const serverFonk = () => {
    console.log(`Server ${PORT} üzerinde yayında`);
}

app.listen(PORT, serverFonk)