import axios from 'axios'

const magicApi = axios.create({
    baseURL: 'https://api.scryfall.com'
})

export default magicApi; 