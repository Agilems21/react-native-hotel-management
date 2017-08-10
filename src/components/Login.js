import React, { Component } from 'react';
import {
  View,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Platform
} from 'react-native';
import {Item, Text, Input} from 'native-base'
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'
import {signIn} from '../actions/preAuth'
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../assets/config.json';
const CustomIcon = createIconSetFromFontello(fontelloConfig);
var {height, width} = Dimensions.get('window');

class Login extends Component {
    componentDidMount(){
        this.props.userFieldChanged('')
        this.props.passFieldChanged('')
    }
    render(){
        return (
            <View style={{flex:1,backgroundColor:'white'}}>             
                <View style={{flex:3,justifyContent:'space-between',padding:12,paddingTop:23,flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>Actions.pop()}>
                        <Text style={{fontSize:18,color:'#007AFF'}}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>Actions.pop()}>
                        <CustomIcon size={25} name='qr-code_2' style={{color:'#007AFF'}}/>
                    </TouchableOpacity> 
                </View>    
                <View style={{flex:22,alignItems:'center',justifyContent:'center'}}>
                    <Image
                    style={{width:width*0.55,height:height*0.35}}
                    source={require('../assets/logo-cosmo.png')}
                    />
                </View>
                <View style={{flex:15,justifyContent:'flex-start'}}>
                    <View style={{flex:3,padding:10}}>
                        <Item>
                            <Text style={{color:'black',fontSize:17}}>Username</Text>
                            <Input 
                            style={{paddingLeft:80}} 
                            placeholder='Required'
                            onChangeText={text=>this.props.userFieldChanged(text)} 
                            underlineColorAndroid='transparent'
                            value={this.props.username}
                            />
                        </Item>
                        <Item>
                            <Text style={{color:'black',fontSize:17}}>Password</Text>
                            <Input 
                            secureTextEntry={true} 
                            style={{paddingLeft:85}} 
                            placeholder='Required' 
                            onChangeText={text=>this.props.passFieldChanged(text)} 
                            underlineColorAndroid='transparent'
                            value={this.props.password}
                            />
                        </Item>
                        <TouchableOpacity style={{paddingTop:10}}>
                            <Text style={{color:'#007AFF',fontSize:14}}>Reset Password</Text>
                        </TouchableOpacity>
                    </View>
                    <View  style={{flex:2,justifyContent:'flex-start',alignItems:'center',paddingTop:30}} >
                    <TouchableOpacity onPress={()=>this.props.signIn(this.props.username,this.props.password)}>
                        <Text style={{color:'#007AFF',fontSize:22}}>Sign In</Text>
                    </TouchableOpacity>
                    </View>
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