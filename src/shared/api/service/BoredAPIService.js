import http from '../BoredAPI'

const getRandomActivity = (type) => {
    return http.get(`/activity?type=${type}`)
}

export default {
    getRandomActivity
} 