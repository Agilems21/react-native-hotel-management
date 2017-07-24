import React, { Component } from 'react';
import {View,Button,TouchableOpacity,TextInput,ScrollView,ListView,Dimensions} from 'react-native'
import {List,ListItem,Body,Icon,Left,Text,CheckBox,Footer} from 'native-base'
import Collapsible from 'react-native-collapsible';
import BottomBorder from '../../BottomBorderWrapper'
import {connect} from 'react-redux';
import ModalSelect from '../SignupLocation/ModalSelect'
import {Actions} from 'react-native-router-flux' 
import Prompt from 'react-native-prompt';
import RoomTypeItem from './RoomTypeItem';

//TODO: Implement Select Floor and Remove Rooms

class SignupRoomType extends Component {
    constructor(props) {
        super(props)
        this.state = {
                        collapsed:Array.from({length:this.props.floors.length}, i => false),
                        names: this.props.floors.map(floor =>  floor.name.substring(0,5).toUpperCase() + ' ' + floor.name.substring(5)),
                        rooms: this.props.floors.map(floor => floor.totalRoom),
                        roomList: this.props.floors.map(floor => {
                           let rooms =  [...Array(floor.totalRoom)].map((_, i) => {
                                            return (parseInt(floor.name.substring(5)) * 1000) + (++i)
                                         });
                           return rooms.map(room => ({roomNo:room,roomType:'Standard',checked:false,isModalVisible:false,roomFloorCode:floor.code})) 
                        }),
                        roomTypes: ['Standard','Deluxe'],
                        editing:false,
                        toEdit: [],
                        isTypeModalVisible: false,
                        promptVisible: false,
                        newType:false
                     }
        this.changeType = this.changeType.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
        this.toggleChecked = this.toggleChecked.bind(this)
    }

    newCollapsed = (oldCollapsed,index) => {
        let obj = {}
        obj[index] = !oldCollapsed[index]
        return Object.assign([], oldCollapsed, obj)
    }

    toggleModal = (visibility,roomIndex,floorIndex) => {
        let obj = {}
        obj[roomIndex] = Object.assign(this.state.roomList[floorIndex][roomIndex],{isModalVisible:visibility})
        this.setState(Object.assign([],this.state.roomList,Object.assign([],this.state.roomList[floorIndex],obj)))
    }

    toggleModalFunction = (visibility,roomIndex,floorIndex) => () => this.toggleModal(visibility,roomIndex,floorIndex)

    togglePrompt = () => {
        if(this.state.newType) {
            this.setState({promptVisible:true,newType:false})
        }
    } 

    changeType = (typeIndex,roomIndex,floorIndex) => {
        let obj = {}
        obj[roomIndex] = Object.assign(this.state.roomList[floorIndex][roomIndex],{roomType:this.state.roomTypes[typeIndex]})
        this.setState(Object.assign([],this.state.roomList,Object.assign([],this.state.roomList[floorIndex],obj)))
        this.toggleModal(false,roomIndex,floorIndex)
    }

    changeTypeFunction = (roomIndex,floorIndex) => (typeIndex) => this.changeType(typeIndex,roomIndex,floorIndex)

    toggleChecked = (roomIndex,floorIndex,bool) => {
        let obj = {}
        obj[roomIndex] = Object.assign(this.state.roomList[floorIndex][roomIndex],{checked:bool||!this.state.roomList[floorIndex][roomIndex].checked})
        this.setState(Object.assign([],this.state.roomList,Object.assign([],this.state.roomList[floorIndex],obj)))        
        if(this.state.roomList[floorIndex][roomIndex].checked && !bool) {
            let toEditAdd = this.state.toEdit.concat([{roomIndex,floorIndex}])
            this.setState({toEdit: toEditAdd})
        } else if(!bool) {
            this.setState({toEdit:this.state.toEdit.filter(room => {
                 if(room.floorIndex == floorIndex) {
                     if(room.roomIndex == roomIndex){
                         return false
                     } else { return true}
                 } else {return true} 
            } )})
        }
    }

    checkPressedFunction = (roomIndex,floorIndex) => () => this.toggleChecked(roomIndex,floorIndex)

    changeTypeMultiple = (arr) => (typeIndex) => {arr.forEach(room => this.changeType(typeIndex,room.roomIndex,room.floorIndex));this.setState({isTypeModalVisible:false});}

    checkAll = (uncheck) => {
        let edit = []
        this.state.roomList.forEach(floor => floor.forEach(room => {
            this.toggleChecked(floor.indexOf(room),this.state.roomList.indexOf(floor),true); 
            edit.push({roomIndex:floor.indexOf(room),floorIndex:this.state.roomList.indexOf(floor)})
        }))
        this.setState({toEdit:edit})
    }
   
    compileRoomArray = () => {
        return [].concat.apply([], this.state.roomList).map(room => ({roomNo: room.roomNo,roomFloorCode:room.roomFloorCode,roomType:room.roomType,roomTypeId:this.state.roomTypes.indexOf(room.roomType)}))
    }

    render(){
        return ( 
            
            <View style={{flex:1,backgroundColor:'white'}}>
                
                <View style={{flex:0.5,justifyContent:this.state.editing ? 'flex-end': 'space-between',paddingTop:20,flexDirection:'row'}}>
                   {this.state.editing ? <Button title='Done' onPress={()=>this.setState({editing:false})}/> :
                     <View style={{flexDirection:'row',justifyContent:'space-between',flex:1,alignItems:'center'}}>
                        <Button title="Back" onPress={()=>Actions.pop()}/>
                        <Button title="Next" onPress={()=>{this.props.collectRoomType(this.compileRoomArray());Actions.signupRoomRate({roomTypes:this.state.roomTypes})}}/>
                     </View>
                   }
                </View>
                <View style={{flex:9.5}}>
                    <ScrollView>
                    { this.state.names.map(name => {
                        let index = this.state.names.indexOf(name)
                        return (
                            <List key={index} style={{paddingTop:20}}>
                                <View style={{paddingLeft:15}}>
                                    <BottomBorder>
                                        <TouchableOpacity onPress={()=>this.setState({collapsed:this.newCollapsed(this.state.collapsed,index)})} style={{flex:1,alignItems:'center',paddingTop:10,paddingRight:10, flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
                                            <Text style={{fontSize:12,color:'darkgrey'}}>{name}</Text>
                                            {this.state.collapsed[index] ? 
                                            <Icon style={{fontSize:18,color:'lightgrey'}} name='ios-arrow-forward'/>:
                                            <Icon style={{fontSize:18,color:'lightgrey'}} name='ios-arrow-down'/>
                                            }
                                        </TouchableOpacity>
                                    </BottomBorder>
                                </View>
                                    
                                <View style={{paddingLeft:15}}>
                                    {this.state.roomList[index].map(room => {
                                        let roomIndex = this.state.roomList[index].indexOf(room)
                                        return (
                                             
                                            <Collapsible key={roomIndex} collapsed={this.state.collapsed[index]}>
                                                <BottomBorder topPadding={12} bottomPadding={12}>
                                                    <RoomTypeItem editing={this.state.editing} roomNo={room.roomNo} roomType={room.roomType} checked={room.checked} 
                                                    onPress={()=>this.toggleModal(true,roomIndex,index)} checkPressed={this.checkPressedFunction(roomIndex,index)}
                                                    toggleRoom={this.toggleModalFunction(true,roomIndex,index)}/>
                                                </BottomBorder>
                                                <ModalSelect isVisible={room.isModalVisible} modalData={this.state.roomTypes} hidden={true}
                                                listAction={this.changeTypeFunction(roomIndex,index)} selectedItem={this.state.roomTypes.indexOf(room.roomType)}
                                                hide={this.toggleModalFunction(false,roomIndex,index)} show={this.toggleModalFunction(true,roomIndex,index)}     
                                                flex={this.state.roomTypes.length < 6 ? this.state.roomTypes.length + 2 : 8 } title='Room Type' newItem='New Room Type'   
                                                newAction={()=>{this.toggleModal(false,roomIndex,index);this.setState({newType:true})}} onHide={()=>this.togglePrompt()}               
                                                />
                                            </Collapsible>
                                                
                                           
                                        )
                                    })}
                                </View>
                                        
                            </List>
                            
                        )
                    })}
                   </ScrollView>
                   <Footer style={{flexDirection:'row',alignItems:'center',justifyContent:this.state.editing ?'space-around':'flex-start',padding:10,height:Dimensions.get('window').height*0.07}}>
                      {this.state.editing ?
                      <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center'}}>
                        <TouchableOpacity><Icon name='ios-done-all' style={{color:'#4657fa'}} onPress={()=>this.checkAll()}/></TouchableOpacity>
                        <Button title='Change Room Type' onPress={()=>this.setState({isTypeModalVisible:true})}/>
                        <ModalSelect isVisible={this.state.isTypeModalVisible} modalData={this.state.roomTypes} hidden={true}
                                    listAction={this.changeTypeMultiple(this.state.toEdit)} hide={()=>this.setState({isTypeModalVisible:false})} 
                                    show={()=>this.setState({isTypeModalVisible:true})} flex={this.state.roomTypes.length < 6 ? this.state.roomTypes.length + 2 : 8 } 
                                    title='Room Type'  newItem='New Room Type' newAction={()=>{this.setState({isTypeModalVisible:false,newType:true})}}
                                    onHide={()=>this.togglePrompt()}             
                                    />
                        <TouchableOpacity><Icon name='ios-trash-outline' style={{color:'#4657fa'}}/></TouchableOpacity>
                      </View>
                      :
                       <TouchableOpacity onPress={()=>this.setState({editing:true})}><Icon name='ios-clipboard-outline' style={{color:'#4657fa'}}/></TouchableOpacity>}
                    </Footer>
                </View>
                <Prompt
                    title="New Room Type"
                    placeholder="Name"
                    visible={ this.state.promptVisible }
                    onCancel={ () => this.setState({
                        promptVisible: false
                    }) }
                    onSubmit={ (value) => this.setState({
                        promptVisible: false,
                        roomTypes: this.state.roomTypes.concat(value)
                    }) }/>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    floors: state.get('roomFloor')
})

const mapDispatchToProps = dispatch => ({
    collectRoomType: (room) => dispatch({type:'COLLECT_ROOM_TYPE',room})
})

export default connect(mapStateToProps,mapDispatchToProps)(SignupRoomType)