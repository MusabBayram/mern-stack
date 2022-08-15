const hataYakala = (err,req,res,nest) => {
    
    const statusKod = res.statusCode ? res.statusCode : 500

    res.status(statusKod);

    res.json({
        mesaj: err.message,
        aciklama: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = {
    hataYakala
}