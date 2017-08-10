import React, { Component } from 'react';
import {View,Button,TouchableOpacity,TextInput,ScrollView,ListView,Dimensions} from 'react-native'
import {List,ListItem,Body,Icon,Left,Text,CheckBox,Footer} from 'native-base'
var {width,height} = Dimensions.get('window');

const RoomTypeItem = ({editing,roomNo,roomType,onPress,checked,checkPressed}) => (
    <View style={{flexDirection:'row',justifyContent:'space-between',flex:1}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:width*0.22}}>
            {editing ? <CheckBox checked={checked} color={checked ? '#007AFF':'#C0C0C0'} onPress={()=>checkPressed()}/> : undefined}
            <Text style={{fontSize:18}}>{roomNo}</Text>
        </View>
        <TouchableOpacity style={{paddingRight:20,paddingLeft:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:width*0.35}} onPress={onPress}>
           <Text style={{color: editing ? '#007AFF' : 'grey',fontSize:18,textAlign:'left'}}>{roomType}</Text> 
           {editing ?  <Icon name='ios-arrow-forward' style={{color:'grey',fontSize:25,paddingTop:5}} /> : undefined}
        </TouchableOpacity>
    </View>
)

export default RoomTypeItem;