import React, { Component } from 'react';
import {View,TouchableOpacity,Text,TextInput,ScrollView,ListView,Dimensions,Platform} from 'react-native'
import {Body,Icon,Left,CheckBox,Footer,Title,Right,Button,Header,Container,Item,Input,Content,List,ListItem,Segment} from 'native-base'
import BottomBorder from '../../BottomBorderWrapper'
import Collapsible from 'react-native-collapsible';
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'
var {width,height} = Dimensions.get('window');

class RoomScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            types: ['STDB','STKB'].map(type => ({type, collapsed:false})),
            statuses: ['ARRIVAL','DEPARTURE','CHECKED IN'].map(name => ({name, collapsed:false})),
            floors: ['FLOOR 1','FLOOR 2'].map(name => ({name, collapsed:false})),
            activeSegment: 2,
            rooms: [
                {floor:1, roomNumber:1001, roomType: 'STDB', status:'ARRIVAL' ,checked:false},
                {floor:1, roomNumber:1002, roomType: 'STDB', status:'ARRIVAL' ,checked: false},
                {floor:1, roomNumber:1003, roomType: 'STDB', status:'ARRIVAL',checked: false },
                {floor:2, roomNumber:2001, roomType: 'STDB', status:'ARRIVAL' ,checked: false},
                {floor:2, roomNumber:2002, roomType: 'STDB', status:'ARRIVAL',checked: false },
                {floor:2, roomNumber:2003, roomType: 'STDB', status:'DEPARTURE',checked: false },
                {floor:2, roomNumber:2004, roomType: 'STKB', status:'DEPARTURE',checked: false },
                {floor:2, roomNumber:2005, roomType: 'STKB', status:'CHECKED IN',checked: false },
                {floor:2, roomNumber:2006, roomType: 'STKB', status:'CHECKED IN',checked: false }
            ],
            editing: false,
            checkedRooms: []
        }
    }

    selectRoom = (roomNumber) => {
       if(this.state.editing) { 
        this.props.setRooms(this.props.rooms.map(room => room.roomNumber == roomNumber ? Object.assign(room,{checked:!room.checked}) : room))
        this.setState({checkedRooms: this.props.rooms.filter(room => room.roomNumber == roomNumber)[0].checked ? this.state.checkedRooms.concat(roomNumber) : this.state.checkedRooms.filter(room => room != roomNumber)})
        } else {
        Actions.updateStatus({checkedRooms: [roomNumber] , roomStatus: this.props.rooms.filter(room => room.roomNumber == roomNumber)[0].roomStatus})
        }
    }

    uncheckAll = () => {
        this.setState({checkedRooms: []})
        this.props.setRooms(this.props.rooms.map(room => Object.assign(room,{checked:false})))
    }

    newCollapsed = (oldCollapsed,index) => {
        let obj = {}
        obj[index] = Object.assign(oldCollapsed[index],{collapsed:!oldCollapsed[index].collapsed})
        return Object.assign([], oldCollapsed, obj)
    }

    componentWillMount() {
        this.props.setRooms(
            [
                {floor:1, roomNumber:1001, roomType: 'STDB', status:'ARRIVAL' ,checked:false},
                {floor:1, roomNumber:1002, roomType: 'STDB', status:'ARRIVAL' ,checked: false},
                {floor:1, roomNumber:1003, roomType: 'STDB', status:'ARRIVAL',checked: false },
                {floor:2, roomNumber:2001, roomType: 'STDB', status:'ARRIVAL' ,checked: false},
                {floor:2, roomNumber:2002, roomType: 'STDB', status:'ARRIVAL',checked: false },
                {floor:2, roomNumber:2003, roomType: 'STDB', status:'DEPARTURE',checked: false },
                {floor:2, roomNumber:2004, roomType: 'STKB', status:'DEPARTURE',checked: false },
                {floor:2, roomNumber:2005, roomType: 'STKB', status:'CHECKED IN',checked: false },
                {floor:2, roomNumber:2006, roomType: 'STKB', status:'CHECKED IN',checked: false }
            ]
        )
    }

    render() {
        return (
            <Container>
                <Header style={{backgroundColor:'#f8f8fa'}}>
                    <Left>
                        <Button transparent onPress={()=>{
                            if(this.state.editing){
                                this.uncheckAll();
                                this.setState({editing:false});
                             }
                            }}>
                            <Icon name='ios-arrow-back' style={{fontSize:30,color:'#007AFF'}}/>
                            <Text style={{color:'#007AFF',fontSize:17}}> Back</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color:'black'}}>Rooms</Title>
                    </Body>
                    <Right>
                        {!this.state.editing ? 
                            <Button transparent onPress={()=>this.setState({editing: true})}>
                                <Text style={{color:'#007AFF',fontSize:17}}>Edit</Text>
                            </Button> 
                            : undefined
                        }
                    </Right>
                </Header>
                <Content style={{backgroundColor:'#f0eff4'}}>
                    <Segment>
                        <Button  style={{backgroundColor:this.state.activeSegment == 1 ? '#007AFF' : undefined}} first active={this.state.activeSegment == 1} onPress={()=>this.setState({activeSegment: 1})}><Text style={{color: this.state.activeSegment == 1 ? 'white' : '#007AFF'}}>Floor</Text></Button>
                        <Button  style={{backgroundColor:this.state.activeSegment == 2 ? '#007AFF' : undefined}} active={this.state.activeSegment == 2} onPress={()=>this.setState({activeSegment: 2})}><Text style={{color: this.state.activeSegment == 2 ? 'white' : '#007AFF'}}>Room Type</Text></Button>
                        <Button style={{backgroundColor:this.state.activeSegment == 3 ? '#007AFF' : undefined}} last active={this.state.activeSegment == 3} onPress={()=>this.setState({activeSegment: 3})}><Text style={{color: this.state.activeSegment == 3 ? 'white' : '#007AFF'}}>Status</Text></Button>
                    </Segment>
                    {this.props.rooms ? <ScrollView>
                        {this.state.activeSegment == 2 ? this.state.types.map(type => {
                            let index = this.state.types.indexOf(type)
                            return (
                            <View key={index}>
                                <BottomBorder leftPadding={15}>
                                    <TouchableOpacity onPress={()=>this.setState({types:this.newCollapsed(this.state.types,index)})} style={{flex:1,alignItems:'center',paddingTop:10,paddingRight:10, flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
                                        <Text style={{fontSize:12,color:'darkgrey'}}>{type.type}</Text>
                                        {this.state.types[index].collapsed ? 
                                        <Icon style={{fontSize:18,color:'lightgrey'}} name='ios-arrow-forward'/>:
                                        <Icon style={{fontSize:18,color:'lightgrey'}} name='ios-arrow-down'/>
                                        }
                                    </TouchableOpacity>
                                </BottomBorder>
                                <Collapsible collapsed={type.collapsed}>
                                    <View style={{padding:10,paddingTop:20,padding:25}}>
                                        {groupIn(this.props.rooms.filter(room => room.roomType === type.type),4).map((roomGroup,index) => (
                                            <View key={index}>
                                                <View style ={{flexDirection:'row'}}>
                                                    {roomGroup.map(room => (
                                                        <View style={{flexDirection:'row'}} key={roomGroup.indexOf(room)}>
                                                            <RoomItem roomNumber={room.roomNumber} roomType={room.roomType} status={room.status} checked={room.checked} onTapped={()=>this.selectRoom(room.roomNumber)} editing={this.state.editing}/>
                                                            <View style={{width:width*0.02}}/>
                                                        </View>
                                                    ))}
                                                </View>
                                                <View style={{height:width*0.02}}/>
                                            </View>
                                        ))}
                                    </View>
                                </Collapsible>
                            </View>
                            )
                        }) : this.state.activeSegment == 1 ? 
                            this.state.floors.map(floor => {
                            let index = this.state.floors.indexOf(floor)
                            return (
                            <View key={index}>
                                <BottomBorder leftPadding={15}>
                                    <TouchableOpacity onPress={()=>this.setState({floors:this.newCollapsed(this.state.floors,index)})} style={{flex:1,alignItems:'center',paddingTop:10,paddingRight:10, flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
                                        <Text style={{fontSize:12,color:'darkgrey'}}>{floor.name}</Text>
                                        {this.state.floors[index].collapsed ? 
                                        <Icon style={{fontSize:18,color:'lightgrey'}} name='ios-arrow-forward'/>:
                                        <Icon style={{fontSize:18,color:'lightgrey'}} name='ios-arrow-down'/>
                                        }
                                    </TouchableOpacity>
                                </BottomBorder>
                                <Collapsible collapsed={floor.collapsed}>
                                    <View style={{padding:10,paddingTop:20,padding:25}}>
                                        {groupIn(this.props.rooms.filter(room => room.floor == floor.name[floor.name.length - 1]),4).map((roomGroup,index) => (
                                            <View key={index}>
                                                <View style ={{flexDirection:'row'}}>
                                                    {roomGroup.map(room => (
                                                        <View style={{flexDirection:'row'}} key={roomGroup.indexOf(room)}>
                                                            <RoomItem roomNumber={room.roomNumber} roomType={room.roomType} status={room.status} checked={room.checked} onTapped={()=>this.selectRoom(room.roomNumber)} editing={this.state.editing}/>
                                                            <View style={{width:width*0.02}}/>
                                                        </View>
                                                    ))}
                                                </View>
                                                <View style={{height:width*0.02}}/>
                                            </View>
                                        ))}
                                    </View>
                                </Collapsible>
                            </View>
                            )
                        })
                        : 
                        this.state.statuses.map(status => {
                            let index = this.state.statuses.indexOf(status)
                            return (
                            <View key={index}>
                                <BottomBorder leftPadding={15}>
                                    <TouchableOpacity onPress={()=>this.setState({statuses:this.newCollapsed(this.state.statuses,index)})} style={{flex:1,alignItems:'center',paddingTop:10,paddingRight:10, flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
                                        <Text style={{fontSize:12,color:'darkgrey'}}>{status.name}</Text>
                                        {this.state.statuses[index].collapsed ? 
                                        <Icon style={{fontSize:18,color:'lightgrey'}} name='ios-arrow-forward'/>:
                                        <Icon style={{fontSize:18,color:'lightgrey'}} name='ios-arrow-down'/>
                                        }
                                    </TouchableOpacity>
                                </BottomBorder>
                                <Collapsible collapsed={status.collapsed}>
                                    <View style={{padding:10,paddingTop:20,padding:25}}>
                                        {groupIn(this.props.rooms.filter(room => room.status == status.name),4).map((roomGroup,index) => (
                                            <View key={index}>
                                                <View style ={{flexDirection:'row'}}>
                                                    {roomGroup.map(room => (
                                                        <View style={{flexDirection:'row'}} key={roomGroup.indexOf(room)}>
                                                            <RoomItem roomNumber={room.roomNumber} roomType={room.roomType} status={room.status} checked={room.checked} onTapped={()=>this.selectRoom(room.roomNumber)} editing={this.state.editing}/>
                                                            <View style={{width:width*0.02}}/>
                                                        </View>
                                                    ))}
                                                </View>
                                                <View style={{height:width*0.02}}/>
                                            </View>
                                        ))}
                                    </View>
                                </Collapsible>
                            </View>
                            )
                        })}
                    </ScrollView> : undefined}
                </Content>
                {this.state.checkedRooms.length > 0 ? 
                    <Footer style={{alignItems:'center',justifyContent:'center',padding:10,height:Dimensions.get('window').height*0.07,backgroundColor: Platform.OS === 'ios' ? undefined : '#f8f8f8',borderTopColor:Platform.OS === 'ios' ? undefined :'lightgrey',borderTopWidth:Platform.OS === 'ios' ? undefined :0.25}}>
                        <Button transparent style={{position:'absolute',top:0}} onPress={()=>Actions.updateStatus({checkedRooms:this.state.checkedRooms})}>
                            <Text style={{color:'#007AFF',fontWeight:'bold'}}>Update Room Status</Text>
                        </Button>
                    </Footer> : undefined
                }
            </Container>
        )
    }
} 

const groupIn = (arr,value) => {
    var newArray = []
    while (arr.length > 0) newArray.push(arr.splice(0, value));
    return newArray
}

const mapDispatchToProps = dispatch => ({
    setRooms: rooms => dispatch({type:'SET_ROOMS_HARDCODE',rooms})
})

const mapStateToProps = state => ({
    rooms: state.get('rooms')
})

const RoomItem = ({roomNumber, roomType, status,checked,onTapped,editing}) => 
    <TouchableOpacity onPress={onTapped}>
    <View style={{backgroundColor:'white',borderColor:'grey',borderWidth:0.5,alignItems:'center',padding:15,width:0.21*width,height:0.2*width}}>
        {checked ? <Icon style={{position:'absolute',top:1,right:1,color:'#007AFF',fontSize:22}} name='ios-checkmark-circle'/> : undefined}
        <Text style={{textAlign:'center'}}>{roomNumber}</Text>
        <Text style={{textAlign:'center'}}>{roomType}</Text>
        <Text style={{textAlign:'center',color:'grey',fontSize:10}}>{status}</Text>
    </View>
    </TouchableOpacity>

export default connect(mapStateToProps,mapDispatchToProps)(RoomScreen)