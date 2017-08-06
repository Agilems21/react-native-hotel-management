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
import AdminSettings from './components/Admin/Settings'
import HotelConfig from './components/Admin/HotelConfig'
import AccountOverview from './components/Admin/AccountOverview'
import UserConfig from './components/Admin/UserConfig'
import UserRoleConfig from './components/Admin/UserRoleConfig'
import UserConfigOptions from './components/Admin/UserConfigOptions'
import AddUser from './components/Admin/AddUser'
import RoomScreen from './components/Home/Rooms/RoomScreen'
import UpdateStatus from './components/Home/Rooms/UpdateStatus'
import {Platform} from 'react-native'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="auth" Initial>
          <Scene key="init" component={Initial} hideNavBar inital={true}/>
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
          <Scene key="roomScreen" component={RoomScreen} hideNavBar />
          <Scene key="updateStatus" component={UpdateStatus} hideNavBar />
        </Scene>
        <Scene key="adminSettings" component={AdminSettings} title={'Settings'} back={true} backTitle={Platform.OS == 'ios' ? "Back" : ""}/>
        <Scene key="hotelConfig" component={HotelConfig} title={'Hotel Config'} back={true} backTitle={Platform.OS == 'ios' ? "Settings" : ""}/>
        <Scene key="accountOverview" component={AccountOverview} title={'Account Overview'} back={true} backTitle={Platform.OS == 'ios' ? "Back" : ""}/>
        <Scene key="userConfig" component={UserConfig} title={'User Config'} back={true} backTitle={Platform.OS == 'ios' ? "Back" : ""}/>
        <Scene key="userRoleConfig" component={UserRoleConfig} title={'User Role Config'} back={true} backTitle={Platform.OS == 'ios' ? "Back" : ""}/>
        <Scene key="userConfigOptions" component={UserConfigOptions} title={'User Config'} back={true} backTitle={Platform.OS == 'ios' ? "Back" : ""}/>
        <Scene key="addUser" component={AddUser} title={'Add User'} back={true} backTitle={Platform.OS == 'ios' ? "Back" : ""}/>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
