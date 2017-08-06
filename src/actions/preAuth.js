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

export const signUp = data => dispatch => {
    return axios.post('http://596bb42114023a0011bcb638.mockapi.io/api/v1/Signup', data)
                .then(res => {
                    if(res.data.msg === 'Activate Tenant Successfully'){
                        //Signin and Common Data call
                        Actions.main()
                    }
                })
                .catch(err => console.error(err))
}

export const revGeocode = location => dispatch => {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=AIzaSyCgTSlYLmLwO6zmbZRMlcwSxkXMewAjk1c`)
                .then(res => dispatch({type:'GPS',address:res.data.results[0].formatted_address}))
                .catch(err => console.error(err))
}

