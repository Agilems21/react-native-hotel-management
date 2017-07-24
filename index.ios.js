import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createLogger,logger} from 'redux-logger'
import {createStore, applyMiddleware} from 'redux'
import mainReducer from './src/reducers/mainReducer'
import Router from './src/Router'
import Reservations from './src/components/Home/Reservations/Reservations'
import NewReservation from './src/components/Home/Reservations/NewReservation'

//TODO
//Clean up code
//login and fail action types (reducer)
//QR and alert

export default class cosmopms extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

const store = 
      createStore(mainReducer,applyMiddleware(ReduxThunk,createLogger({
        collapsed: true,
        stateTransformer: state => state.toJS()
      })));

AppRegistry.registerComponent('cosmopms', () => cosmopms);
