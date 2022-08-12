const express = require('express');

const PORT = 8080;

const app = express();

const serverFonk = () => {
    console.log(`Server ${PORT} üzerinde yayında`);
}

app.listen(PORT, serverFonk)