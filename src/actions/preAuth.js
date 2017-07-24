import axios from 'axios'
import {Actions} from 'react-native-router-flux'


export const signIn = (username,password) => dispatch => {
    return axios.get('http://596bb42114023a0011bcb638.mockapi.io/api/v1/users')
                .then(user => {
                    console.log(user)
                    dispatch({type:'LOGIN',user})
                    //route to reservations
                })
                .catch(err => {
                    console.error(err)
                    dispatch({type:'FAIL'})
                })
}

export const addressSearch = query => dispatch => {
    return axios.get('http://596bb42114023a0011bcb638.mockapi.io/api/v1/adresses')
                .then(res => {
                    dispatch({type:'ADD_SEARCH_RESULTS',results: res.data.filter( resData => resData.address.includes(query) || resData.address.includes(query.toLowerCase()) )})
                })
                .catch(err => console.error(err))
}