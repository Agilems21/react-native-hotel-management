import {Scene, Router} from 'react-native-router-flux'
import React from 'react';
import Initial from './components/Initial'
import Login from './components/Login'
import SignupLocation from './components/SignUp/SignupLocation/SignupLocation'
import SignupHotelDetail from './components/SignUp/SignupLocation/SignupHotelDetail'
import SignupFloor from './components/SignUp/SignupFloor/SignupFloor'
import SignupRoomType from './components/SignUp/SignupRoomType/Root'
import SignupRoomRate from './components/SignUp/SignupRoomRate/SignupRoomRate'
import SignupAccount from './components/SignUp/SignupAccount/signupAccount'
import Reservations from './components/Home/Reservations/Reservations'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="auth" Initial>
          <Scene key="init" component={Initial} inital={true} hideNavBar />
          <Scene key="login" component={Login} hideNavBar />
          <Scene key="signupLocation" component={SignupLocation} hideNavBar />
          <Scene key="signupFloor" component={SignupFloor} hideNavBar />
          <Scene key="signupHotelDetail" component={SignupHotelDetail} hideNavBar />
          <Scene key="signupRoomType" component={SignupRoomType} hideNavBar />
          <Scene key="signupRoomRate" component={SignupRoomRate} hideNavBar />
          <Scene key="signupAccount" component={SignupAccount} hideNavBar />
        </Scene>
        <Scene key="main">
          <Scene key="reservations" component={Reservations} hideNavBar />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;