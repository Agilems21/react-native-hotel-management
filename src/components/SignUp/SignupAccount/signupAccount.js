import React, { Component } from 'react';
import {View,Button,TextInput,Text,ScrollView,Platform,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import BottomBorder from '../../BottomBorderWrapper'
import {signUp} from '../../../actions/preAuth'

const SignUpAccount = ({changeEmail,changePhoneNo,emailField,phoneField,signUpAction,signupData}) => {
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            {Platform.OS === 'ios' ? 
            <View style={{flex:0.5,justifyContent:'space-between',paddingTop:20,flexDirection:'row'}}>
                <Button title="Back" onPress={()=>Actions.pop()}/>
                <Button title="Next" onPress={()=>{signUpAction(signupData)}} disabled={!emailField || !phoneField }/>
            </View> :
            <View style={{flex:0.5,justifyContent:'space-between',padding:15,flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>Actions.pop()}>
                        <Text style={{fontSize:18,color:'#4657fa'}}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Actions.main()}} disabled={!emailField || !phoneField }>
                        <Text style={{color:!emailField || !phoneField ? 'grey' : '#4657fa',fontSize:18}}>Next</Text>
                    </TouchableOpacity> 
            </View>
            }
            <View style={{paddingLeft:15,flex:9.5,paddingTop:15}}>
                <BottomBorder topPadding={10} bottomPadding={10}>
                    <TextInput underlineColorAndroid='transparent' placeholder='Email' onChangeText={text=>changeEmail(text)} style={{flex:1}}/>
                </BottomBorder>
                <BottomBorder topPadding={10} bottomPadding={10}>
                    <TextInput underlineColorAndroid='transparent' placeholder='Phone Number' onChangeText={text=>changePhoneNo(text)} style={{flex:1}}/>
                </BottomBorder>
                <Text style={{fontSize:15,color:'grey',paddingTop:10}}>For Recovery used.</Text>
            </View>
        </View>
    )
}

const mapDispatchToProps = dispatch => ({
    changeEmail: email => dispatch({type:'CHANGE_EMAIL',email}),
    changePhoneNo: phone => dispatch({type:'CHANGE_PHONE_NO',phone}),
    signUpAction: data => dispatch(signUp(data))
})

const mapStateToProps = state => ({
    emailField: state.get('email'),
    phoneField: state.get('contact'),
    signupData: state
})

export default connect(mapStateToProps,mapDispatchToProps)(SignUpAccount)