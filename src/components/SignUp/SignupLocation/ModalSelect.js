import React, { Component } from 'react';
import {View,TouchableOpacity,ScrollView,Dimensions} from 'react-native'
import {List,ListItem,Text,Icon} from 'native-base'
import Modal from 'react-native-modal'

const ModalSelect = ({buttonText,isVisible,modalData,listAction,selectedItem,hide,show,hidden,flex,title,newItem,newAction,onHide}) => 
    (
        <View>
           {hidden ? undefined : <View style={{borderColor:'lightgrey',borderBottomWidth:0.5,flexDirection:'row',justifyContent:'flex-start',paddingBottom:10,paddingTop:10}}>
                <TouchableOpacity onPress={show} style={{paddingLeft:10,flex: 1,flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:18}}>{modalData[selectedItem]}</Text>
                    <Icon name='ios-arrow-forward' style={{color:'grey', paddingRight:10, fontSize:25}}/>
                </TouchableOpacity>
            </View>}
            <Modal isVisible={isVisible} onModalHide={onHide}>
                <View style={{height:Dimensions.get('window').height*((10-flex)/10)||null}}></View>
                <View style={{ flex: flex || 9 , backgroundColor:'white', borderColor:'gray',borderRadius:10}}>
                    <ScrollView>
                        <List>
                            {title ? 
                            <ListItem>
                                <View style={{alignItems:'center',flex:1}}>
                                <Text style={{fontSize:18,textAlign:'center',fontWeight:'bold'}}>{title}</Text>
                                </View>
                            </ListItem> : undefined}
                            {modalData.map(item => 
                                <ListItem key={modalData.indexOf(item)} onPress={()=>listAction(modalData.indexOf(item))}>
                                    <View style={{alignItems:'center',flex:1}}>
                                        {modalData.indexOf(item) != selectedItem ? 
                                        <Text style={{color:'#007AFF',fontSize:18,textAlign:'center'}}>{item}</Text>
                                        : <Text style={{fontSize:18,textAlign:'center'}}>{item}</Text> }
                                    </View>
                                    
                                </ListItem>
                            )}
                            {newItem ?
                            <ListItem onPress={()=>newAction()}>
                                    <View style={{alignItems:'center',flex:1}}>
                                        <Text style={{color:'#007AFF',fontSize:18,textAlign:'center'}}>{newItem}</Text>
                                    </View>
                                    
                            </ListItem> : undefined}
                        </List>
                    </ScrollView>
                </View>
                <View style={{flex:0.2}}></View>
                <TouchableOpacity onPress={hide} style={{flex:0.8,backgroundColor:'white',borderColor:'gray',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'red',fontSize:18}}>Cancel</Text>
                </TouchableOpacity>
            </Modal>
        </View>
    )

export default ModalSelect;