import React, { Component } from 'react';
import {
  View,
  Button,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  Platform
} from 'react-native';
import {Actions} from 'react-native-router-flux'
var {height, width} = Dimensions.get('window');
import {connect} from 'react-redux'

const Initial = ({clearSearch}) => {
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <View style={{flex:2,alignItems:'flex-end',paddingTop:20}}>
                {Platform.OS === 'ios' ? 
                <Button
                title="Sign in"
                onPress={()=>Actions.login()}
                />
                : 
                <TouchableOpacity style={{paddingRight:15}} onPress={()=>Actions.login()}>
                    <Text style={{fontSize:18,color:'#4657fa'}}>Sign in</Text>
                </TouchableOpacity>
                }
            </View>
            <View style={{flex:25,alignItems:'center',justifyContent:'center'}}>
                <Image
                style={{width:width*0.7,height:height*0.45}}
                source={require('../assets/cosmo_logo.png')}
                />
            </View>
            <View style={{flex:13,backgroundColor:'white',justifyContent:'flex-start',alignItems:'center'}}>
                <TouchableOpacity style={{padding:15}} >
                    <Text style={{fontSize:32,color:'#4657fa'}}>Start Demo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingTop:15}} onPress={()=>{clearSearch();Actions.signupLocation()}}>
                    <Text style={{color:'#4657fa',fontSize:16}}>Skip Demo and Setup New Hotel</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
} 

const mapDispatchToProps = dispatch => ({
    clearSearch: () => {
        dispatch({type:'CLEAR_SEARCH'})
    }
})

export default connect(null,mapDispatchToProps)(Initial)