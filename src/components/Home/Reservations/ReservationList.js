import React, { Component } from 'react';
import {View,TouchableOpacity,Text,TextInput,ScrollView,ListView,Dimensions} from 'react-native'
import {Body,Icon,Left,CheckBox,Footer,Title,Right,Button,Header,Container,Item,Input,Content,List,ListItem} from 'native-base'
import { SwipeRow } from 'react-native-swipe-list-view';
var {width,height} = Dimensions.get('window')

//{name:'Taylor Malloran',duration:'26/04/2017 to 27/04/2017',roomType:'STDB',roomRate:150,roomNo:1001} array
const ResevationList = ({reservations}) => (
     <List>
        {reservations.map(reservation => (
            <SwipeRow
            key={reservations.indexOf(reservation)}
            leftOpenValue={75}
            rightOpenValue={-190}  
            style={{borderColor:'lightgrey',borderBottomWidth:0.5}}          
            >
            <View style={{flexDirection:'row',height:height*0.1}}>
                <View style={{backgroundColor:'#4657fa',paddingBottom:20}}>
                    <Button transparent onPress={() => alert('Add')} style={{flexDirection:'column',flex:1}}>
                        <Icon active name="ios-contact" style={{color:'white'}} />
                        <Text style={{color:'white'}}>Profile</Text>
                    </Button>
                </View>
                <View style={{flex:1.8}}/>
                <View style={{flexDirection:'row',flex:3}}>
                    <View style={{backgroundColor:'grey',paddingBottom:20,flex:1}}>
                    <Button transparent onPress={() => alert('Trash')} style={{flexDirection:'column'}}>
                        <Icon active name="ios-calendar-outline" style={{color:'white'}}/>
                        <Text style={{color:'white',fontSize:11}}>Dates</Text>
                    </Button>
                    </View>
                    <View style={{backgroundColor:'green',paddingBottom:20,flex:1}}>
                    <Button transparent onPress={() => alert('Trash')} style={{flexDirection:'column'}}>
                        <Icon active name="ios-cash-outline" style={{color:'white'}}/>
                        <Text style={{color:'white'}}>Bill</Text>
                    </Button>
                    </View>
                    <View style={{backgroundColor:'#4657fa',paddingBottom:20,flex:1}}>
                    <Button transparent onPress={() => alert('Trash')} style={{flexDirection:'column'}}>
                        <Icon active name="ios-clipboard-outline" style={{color:'white'}}/>
                        <Text style={{color:'white'}}>Edit</Text>
                    </Button>
                    </View>
                </View>
            </View>
            <View style={{paddingLeft:15,flexDirection:'row',justifyContent:'space-between',backgroundColor:'white',height:height*0.1,flex:1}}>
                <View style={{flex:3,justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold'}}>{reservation.name}</Text>
                    <Text>{reservation.duration}</Text>
                    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style={{color:'grey'}}>{reservation.roomType + '    '}</Text>
                        <Text style={{color:'grey'}}>{'BAR' + '    '}</Text>
                        <Text style={{color:'grey'}}>{'$' + reservation.roomRate + '    '}</Text>
                    </View>
                </View>
                <View style={{flex:1}}></View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                    <Text style={{color:'#4657fa'}}>{reservation.roomNo}</Text>
                    <Icon style={{fontSize:22,color:'grey'}} name='ios-arrow-forward'/>
                </View>
            </View>
            </SwipeRow>

        ))}
    </List>
) 

export default ResevationList