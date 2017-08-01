import {Map} from 'immutable';

const reducer = (state = Map(),action) => {
    switch (action.type) {  
        case 'LOGIN': return state.set('token',action.user);
        case 'USER_FIELD_CHANGED': return state.set('userField',action.user); break;
        case 'PASS_FIELD_CHANGED': return state.set('passField',action.pass);  break;
        case 'ADD_SEARCH_RESULTS': return state.set('searchResults',action.results); break;
        case 'CLEAR_SEARCH': return state.set('searchResults',[]); break;
        case 'UMOUNT_SEARCH': return state.delete('searchResults'); break;
        case 'COLLECT_LOCATION': return state.merge(action.location).set('countryCode',action.location.currencyCode);
        case 'COLLECT_FLOORS': return state.set('roomFloor',action.roomFloor);
        case 'COLLECT_ROOM_TYPE': return state.set('room',action.room).set('noOfRooms',action.room.length);
        case 'COLLECT_ROOM_RATE': return state.set('ratePlan',action.roomRate);
        case 'CHANGE_PHONE_NO': return state.set('contact',action.phone);
        case 'CHANGE_EMAIL': return state.set('email',action.email).set('username',action.email).set('fullname',action.email);
        case 'USER_RESERVATIONS': return state.set('userReservations',action.reservations)
        default:return state;
    }
}

export default reducer