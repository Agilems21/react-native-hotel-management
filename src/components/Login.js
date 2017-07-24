import React, { Component } from 'react';
import {
  View,
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'
import {signIn} from '../actions/preAuth'
var {height, width} = Dimensions.get('window');

class Login extends Component {
    componentDidMount(){
        this.props.userFieldChanged('')
        this.props.passFieldChanged('')
    }
    render(){
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <View style={{flex:2,justifyContent:'space-between',paddingTop:20,flexDirection:'row'}}>
                    <Button
                    title="Back"
                    onPress={()=>Actions.pop()}
                    />
                    <Button
                    title="QR"
                    onPress={()=>Actions.pop()}
                    />
                </View>
                <View style={{flex:23,alignItems:'center',justifyContent:'center'}}>
                    <Image
                    style={{width:width*0.55,height:height*0.35}}
                    source={require('../assets/cosmo_logo.png')}
                    />
                </View>
                <View style={{flex:15,backgroundColor:'white',justifyContent:'flex-start'}}>
                    <View style={{flex:3,padding:10}}>
                        <View style={{borderColor:'lightgrey',borderBottomWidth:0.5,flexDirection:'row',justifyContent:'flex-start',paddingBottom:15}}>
                            <Text style={{color:'black',fontSize:17}}>Username</Text>
                            <TextInput 
                            style={{paddingLeft:80}} 
                            placeholder='Required'
                            onChangeText={text=>this.props.userFieldChanged(text)} 
                            value={this.props.username}
                            />
                        </View>
                        <View style={{borderColor:'lightgrey',borderBottomWidth:0.5,flexDirection:'row',justifyContent:'flex-start',paddingBottom:15,paddingTop:20}}>
                            <Text style={{color:'black',fontSize:17}}>Password</Text>
                            <TextInput 
                            secureTextEntry={true} 
                            style={{paddingLeft:85}} 
                            placeholder='Required' 
                            onChangeText={text=>this.props.passFieldChanged(text)} 
                            value={this.props.password}
                            />
                        </View>
                        <TouchableOpacity style={{paddingTop:10}}>
                            <Text style={{color:'#4657fa',fontSize:14}}>Reset Password</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{flex:2,justifyContent:'flex-start',alignItems:'center',paddingTop:50}} onPress={()=>this.props.signIn(this.props.username,this.props.password)}>
                        <Text style={{color:'#4657fa',fontSize:22}}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
        username: state.get('userField'),
        password: state.get('passField')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userFieldChanged: user => dispatch({type:'USER_FIELD_CHANGED',user}),
        passFieldChanged: pass => dispatch({type:'PASS_FIELD_CHANGED',pass}),
        signIn: (user,pass) => dispatch(signIn(user,pass))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)