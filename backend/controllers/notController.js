const getNotlar = (req,res) => {
    
    res.status(200).json({mesaj: 'Controller get notlar'})
}

const setNotlar = (req,res) => {
    
    console.log(req.body);
    res.status(200).json({mesaj: 'Controller post notlar'})
}

const updateNotlar = (req,res) => {
    
    res.status(200).json({mesaj: `Controller put ${req.params.id} idli notlar`})
}

const deleteNotlar = (req,res) => {
    
    res.status(200).json({mesaj: `Controller delete ${req.params.id} idli notlar`})
}

module.exports = {
    getNotlar,
    setNotlar,
    updateNotlar,
    deleteNotlar
}