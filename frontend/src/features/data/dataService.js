import axios from "axios";

const API_URL = '/api/notlar/'

const notOluştur = async (notData, token) => {

    const config = {

        headers:{
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, notData, config)

    return response.data
}

const notlarGetir = async (token) => {

    const config= {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, config)

    return response.data
}

const dataService = {
    notOluştur,
    notlarGetir
}

export default dataService