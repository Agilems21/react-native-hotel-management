import React, { Component } from 'react';
import {View,Button,TouchableOpacity,TextInput,ScrollView,ListView,Dimensions} from 'react-native'
import {Actions} from 'react-native-router-flux'
import {List,ListItem,Body,Icon,Left,Text,CheckBox,Footer} from 'native-base'
import BottomBorder from '../../BottomBorderWrapper'
import Collapsible from 'react-native-collapsible';
import {connect} from 'react-redux'

//TODO get currency from redux store
//disable next if textinputs empty? default rate is 0

class SignupRoomRate extends Component {
    constructor(props) {
        super(props)
        this.state = {
                        collapsed:Array.from({length:this.props.roomTypes.length}, i => false),
                        ratePlan:this.props.roomTypes.map(type => ({rateAmount:0.00,roomTypeCode:type}))
                     }
    }
    
    newCollapsed = (oldCollapsed,index) => {
        let obj = {}
        obj[index] = !oldCollapsed[index]
        return Object.assign([], oldCollapsed, obj)
    }

    changeRate = (ratePlan,index,text) => {
        let obj = {}
        obj[index] = {rateAmount: text}
        return Object.assign([], ratePlan, obj)
    }

    render(){
        console.log(this.state.ratePlan)
        return (
             <View style={{flex:1,backgroundColor:'white'}}>
                 <View style={{flex:0.5,justifyContent:this.state.editing ? 'flex-end': 'space-between',paddingTop:20,flexDirection:'row'}}>
                     <View style={{flexDirection:'row',justifyContent:'space-between',flex:1,alignItems:'center'}}>
                        <Button title="Back" onPress={()=>Actions.pop()}/>
                        <Button title="Next" onPress={()=>{this.props.collectRoomRate(this.state.ratePlan);Actions.signupAccount()}}/>
                     </View>
                </View>
                <View style={{flex:9.5}}>
                    <ScrollView>
                    {this.props.roomTypes.map(name => {
                    let index = this.props.roomTypes.indexOf(name)
                    return(
                        <View style={{paddingLeft:15}} key={index}>
                        <BottomBorder>
                            <TouchableOpacity onPress={()=>this.setState({collapsed:this.newCollapsed(this.state.collapsed,index)})} style={{flex:1,alignItems:'center',paddingTop:10,paddingRight:10, flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
                                <Text style={{fontSize:12,color:'darkgrey'}}>{name}</Text>
                                {this.state.collapsed[index] ? 
                                <Icon style={{fontSize:18,color:'lightgrey'}} name='ios-arrow-forward'/>:
                                <Icon style={{fontSize:18,color:'lightgrey'}} name='ios-arrow-down'/>
                                }
                            </TouchableOpacity>
                        </BottomBorder>
                        <Collapsible collapsed={this.state.collapsed[index]}>
                            <BottomBorder topPadding={12} bottomPadding={12}>
                                <View style={{flexDirection:'row',flex:0.85,justifyContent:'space-around',alignItems:'center'}}>
                                    <Text>RACK</Text>
                                    <View style={{flexDirection:'row',flex:1,justifyContent:'center',alignItems:'center'}}>
                                        <TextInput placeholder='0.00' onChangeText={text=>this.setState({ratePlan: this.changeRate(this.state.ratePlan,index,text)})}/>
                                        <Text>{' ' + this.props.currency}</Text>
                                    </View>
                                </View>
                                <View style={{flex:0.15}}></View>
                            </BottomBorder>
                        </Collapsible>
                        </View>
                    )})}
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps  = dispatch => ({
    collectRoomRate: (roomRate) => dispatch({type:'COLLECT_ROOM_RATE',roomRate})
})

const mapStateToProps = state => ({currency: state.get('currencyCode')})

export default connect(mapStateToProps,mapDispatchToProps)(SignupRoomRate);