import React, { Component } from 'react';
import {View,Button,TextInput,Text,ScrollView} from 'react-native'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import BottomBorder from '../../BottomBorderWrapper'

const SignUpAccount = ({changeEmail,changePhoneNo,emailField,phoneField}) => {
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
                
            <View style={{flex:0.5,justifyContent:'space-between',paddingTop:20,flexDirection:'row'}}>
                <Button title="Back" onPress={()=>Actions.pop()}/>
                <Button title="Next" onPress={()=>{Actions.main()}} disabled={!emailField || !phoneField }/>
            </View>
            <View style={{paddingLeft:15,flex:9.5,paddingTop:15}}>
                <BottomBorder topPadding={10} bottomPadding={10}>
                    <TextInput placeholder='Email' onChangeText={text=>changeEmail(text)} style={{flex:1}}/>
                </BottomBorder>
                <BottomBorder topPadding={10} bottomPadding={10}>
                    <TextInput placeholder='Phone Number' onChangeText={text=>changePhoneNo(text)} style={{flex:1}}/>
                </BottomBorder>
                <Text style={{fontSize:15,color:'grey',paddingTop:10}}>For Recovery used.</Text>
            </View>
        </View>
    )
}

const mapDispatchToProps = dispatch => ({
    changeEmail: email => dispatch({type:'CHANGE_EMAIL',email}),
    changePhoneNo: phone => dispatch({type:'CHANGE_PHONE_NO',phone})
})

const mapStateToProps = state => ({
    emailField: state.get('email'),
    phoneField: state.get('contact')
})

export default connect(mapStateToProps,mapDispatchToProps)(SignUpAccount)