import axios from 'axios'
import {Actions} from 'react-native-router-flux'

export const reservationSearch = options => dispatch => {
    console.log('search')
    let searchReq = {
        method: 'get',
        url: 'http://596bb42114023a0011bcb638.mockapi.io/api/v1/reserveSearch',
        headers: options.headers,
        body: options.body 
    }
    return axios(searchReq)
                .then(res => {
                    console.log('axios',res)
                   dispatch({type:'USER_RESERVATIONS',reservations:res.data})
                })
                .catch(err => console.error(err)) 
}