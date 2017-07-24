import React, { Component } from 'react';
import {View,Button,TouchableOpacity,TextInput,ScrollView,ListView,Dimensions} from 'react-native'
import {List,ListItem,Body,Icon,Left,Text,CheckBox,Footer} from 'native-base'

const RoomTypeItem = ({editing,roomNo,roomType,onPress,checked,checkPressed}) => (
    <View style={{flexDirection:'row',justifyContent:'space-between',flex:1}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',flex:2.5}}>
            {editing ? <CheckBox checked={checked} color={checked ? '#4657fa':'#C0C0C0'} onPress={()=>checkPressed()}/> : undefined}
            <Text style={{fontSize:18}}>{roomNo}</Text>
        </View>
        <View style={{flex:4.5}}></View>
        <TouchableOpacity style={{paddingRight:20,paddingLeft:10,flexDirection:'row',justifyContent:'space-around',alignItems:'center',flex:3}} onPress={onPress}>
           <Text style={{color: editing ? '#4657fa' : 'grey',fontSize:18}}>{roomType}</Text> 
           {editing ?  <Icon name='ios-arrow-forward' style={{color:'grey',fontSize:25,paddingTop:5}} /> : undefined}
        </TouchableOpacity>
    </View>
)

export default RoomTypeItem;