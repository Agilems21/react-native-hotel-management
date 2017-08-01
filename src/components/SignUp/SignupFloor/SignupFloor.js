import React, { Component } from 'react';
import {View,Button,TouchableOpacity,TextInput,ScrollView,Platform} from 'react-native'
import {List,ListItem,Body,Icon,Left,Text} from 'native-base'
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'

class SignupFloor extends Component {
    constructor(props) {
        super(props);
        this.state = {floors:[{floor:1,rooms:5},{floor:2,rooms:5}]}
        this.minusRoom = this.minusRoom.bind(this)
        this.addRoom = this.addRoom.bind(this)
    }

    minusRoom(state,result) {
        return state.map(item => item.floor == result.floor && result.rooms > 1 ? {...item, rooms: item.rooms--} : item )
    }

    addRoom(state,result) {
        return state.map(item => item.floor == result.floor ? {...item, rooms: item.rooms++} : item)
    }

    render() {
        return (
        <View style={{flex:1,backgroundColor:'white'}}>
            {Platform.OS === 'ios' ? 
                <View style={{flex:0.5,justifyContent:'space-between',paddingTop:20,flexDirection:'row'}}>
                    <Button title="Back" onPress={()=>Actions.pop()}/>
                    <Button title="Next" onPress={()=>{Actions.signupRoomType();this.props.collectFloors(this.state.floors)}}/>
                </View>
                : 
                <View style={{flex:0.5,justifyContent:'space-between',padding:15,flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>Actions.pop()}>
                        <Text style={{fontSize:18,color:'#4657fa'}}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Actions.signupRoomType();this.props.collectFloors(this.state.floors)}}>
                        <Text style={{color:'#4657fa',fontSize:18}}>Next</Text>
                    </TouchableOpacity> 
                </View>
                }
            
            <View style={{flex:9.5}}>
                <ScrollView>
                    <List>
                        {this.state.floors.map(result => 
                            <ListItem key={this.state.floors.indexOf(result)}>
                                <Body style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>                                 
                                    <Text style={{flex:4}}>Floor <Text style={{color:'blue'}}>{result.floor}</Text></Text>
                                    <View style={{flexDirection:'row',justifyContent:'space-around',flex:6}}>
                                        <Text>Room</Text>
                                        <TouchableOpacity onPress={()=>this.setState(this.minusRoom(this.state.floors,result))}>
                                            <Icon name='ios-remove-circle-outline' style={{color:'#4657fa',fontSize:23}}/>
                                        </TouchableOpacity>
                                        <Text>{this.state.floors[result.floor - 1].rooms}</Text>
                                        <TouchableOpacity onPress={()=>this.setState(this.addRoom(this.state.floors,result))}>
                                            <Icon name='ios-add-circle-outline' style={{color:'#4657fa',fontSize:23}}/>
                                        </TouchableOpacity>
                                    </View>
                                </Body>
                            </ListItem>
                        )}
                        
                        <TouchableOpacity >
                            <ListItem onPress={() => this.setState({floors:this.state.floors.concat({floor:this.state.floors.length + 1, rooms:5})})}>
                                <Left>
                                    <Icon name='ios-add-circle' style={{color:'#5BC236',fontSize:23}}/>
                                    <Text>Add Floor</Text>
                                </Left>
                            </ListItem>
                        </TouchableOpacity>
                        
                    </List>
                </ScrollView>
            </View>
        </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    collectFloors: (floors) => {
        const roomFloor = floors.map(floor => ({name:'Floor'+ floor.floor , totalRoom: floor.rooms , code:'FL' + floor.floor}))
        dispatch({type:'COLLECT_FLOORS',roomFloor})
    }
})

export default connect(null,mapDispatchToProps)(SignupFloor);