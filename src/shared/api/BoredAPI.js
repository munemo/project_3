import Axios from 'axios'

const API_URL = 'http://www.boredapi.com/api'

const BoredAPI = Axios.create({
    baseURL: API_URL,
    headers: {'Content-Type': 'application/json'}
})

export default BoredAPI