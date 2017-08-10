import React, { Component } from 'react';
import {Body,Icon,Left,CheckBox,Footer,Title,Right,Button,Header,Container,Item,Input,Content} from 'native-base'
import {View,TouchableOpacity,Text,TextInput,ScrollView,ListView,Dimensions,Platform} from 'react-native'
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'
import DatePicker from 'react-native-datepicker'
var {width,height} = Dimensions.get('window');


const styles = {
    firstThree: {flexDirection:'row',alignItems:'center',justifyContent:'space-between',height:0.06*height,flex:1,borderColor:'grey',borderTopWidth:0.5,borderBottomWidth:0.5,padding:8}
}

class UpdateStatus extends Component {
    constructor(props){
        super(props);
        this.state = {
            checked:  this.props.roomStatus ?  Object.keys(this.props.roomStatus).join() :'Inspected',
            outOfServiceFrom: this.props.roomStatus ? this.props.roomStatus[Object.keys(this.props.roomStatus).join()].outOfServiceFrom || new Date() : new Date(),
            outOfServiceTo: this.props.roomStatus ? this.props.roomStatus[Object.keys(this.props.roomStatus).join()].outOfServiceTo || new Date() : new Date(),
            outOfOrderFrom: this.props.roomStatus ? this.props.roomStatus[Object.keys(this.props.roomStatus).join()].outOfOrderFrom || new Date() : new Date(),
            outOfOrderTo: this.props.roomStatus ? this.props.roomStatus[Object.keys(this.props.roomStatus).join()].outOfOrderTo || new Date() : new Date()
        }
    }

    render(){
        return (
            <Container>
                <Header style={{backgroundColor:'#f8f8fa'}}>
                    <Left>
                        <Button transparent onPress={()=>Actions.pop()}>
                            <Icon name='ios-arrow-back' style={{fontSize:30,color:'#007AFF'}}/>
                            <Text style={{color:'#007AFF',fontSize:17}}> Rooms</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent onPress={()=>{this.props.setRooms(this.props.rooms.map(room => this.props.checkedRooms.includes(room.roomNumber) ? Object.assign(room,{roomStatus:{[this.state.checked]:{outOfServiceFrom:this.state.outOfServiceFrom,
                                                                                                                                                                                                                    outOfServiceTo:this.state.outOfServiceTo,
                                                                                                                                                                                                                    outOfOrderFrom:this.state.outOfOrderFrom,
                                                                                                                                                                                                                    outOfOrderTo:this.state.outOfOrderTo
                                                                                                                                                                                                                    }}}) : room));Actions.pop()}} >
                            <Text style={{color:'#007AFF',fontSize:17}}>Done</Text>
                        </Button> 
                    </Right>
                </Header>
                <Content style={{backgroundColor:'white'}}>
                    <ScrollView style={{flex:1}}>
                        <TouchableOpacity style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center',height:0.06*height,borderColor:'grey',borderTopWidth:0.5,borderBottomWidth:0.5,padding:8}}>
                            <Text style={{color:'#007AFF'}}>{this.props.checkedRooms.join() + ' '}</Text>
                            <Icon name='ios-arrow-down' style={{fontSize:17}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.firstThree} onPress={()=>this.setState({checked:'Inspected'})}>
                            <Text style={{color:this.state.checked === 'OutOfService' || this.state.checked === 'OutOfOrder' ? 'lightgrey' : 'grey'}}>Inspected</Text>
                            {this.state.checked === 'Inspected' ? <Icon name='ios-checkmark'/> : undefined}
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.firstThree} onPress={()=>this.setState({checked:'Clean'})}>
                            <Text style={{color:this.state.checked === 'OutOfService' || this.state.checked === 'OutOfOrder' ? 'lightgrey' : 'grey'}}>Clean</Text>
                            {this.state.checked === 'Clean' ? <Icon name='ios-checkmark'/> : undefined}
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.firstThree} onPress={()=>this.setState({checked:'Dirty'})}>
                            <Text style={{color:this.state.checked === 'OutOfService' || this.state.checked === 'OutOfOrder' ? 'lightgrey' : 'grey'}}>Dirty</Text>
                            {this.state.checked === 'Dirty' ? <Icon name='ios-checkmark'/> : undefined}
                        </TouchableOpacity>
                        <View style={{flex:1,borderColor:'grey',borderTopWidth:0.5,borderBottomWidth:0.5,height:0.06*height}} />
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',height:0.06*height,flex:1,borderColor:'lightgrey',borderTopWidth:0.5,borderBottomWidth:0.5,padding:8}} onPress={()=>this.setState({checked:'OutOfService'})}>
                            <Text style={{color:'grey'}}>Out of Service</Text>
                            {this.state.checked === 'OutOfService' ? <Icon name='ios-checkmark'/> : undefined}
                        </TouchableOpacity>
                        {this.state.checked === 'OutOfService' ? 
                            <View>
                                <View style={styles.firstThree}>
                                    <Text style={{fontWeight:'bold'}}>From</Text>
                                    <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                                        <DatePicker
                                            date={this.state.outOfServiceFrom}
                                            mode="date"
                                            placeholder="select date"
                                            format="DD MMMM YYYY"
                                            confirmBtnText="Confirm"
                                            cancelBtnText="Cancel"
                                            customStyles={{
                                            dateIcon: {
                                                width:0,
                                                height:0
                                            },
                                            dateInput:{
                                                borderWidth:0,
                                                alignItems: 'flex-end'
                                            }
                                            }}
                                            onDateChange={(date) => {this.setState({outOfServiceFrom: date})}}
                                        />
                                        <Icon style={{fontSize:18}}  name='ios-arrow-forward'/>
                                    </View>
                                </View>
                                <View style={styles.firstThree}>
                                    <Text style={{fontWeight:'bold'}}>To</Text>
                                    <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                                        <DatePicker
                                            date={this.state.outOfServiceTo}
                                            mode="date"
                                            placeholder="select date"
                                            format="DD MMMM YYYY"
                                            confirmBtnText="Confirm"
                                            cancelBtnText="Cancel"
                                            customStyles={{
                                            dateIcon: {
                                                width:0,
                                                height:0
                                            },
                                            dateInput:{
                                                borderWidth:0,
                                                alignItems: 'flex-end'
                                            }
                                            }}
                                            onDateChange={(date) => {this.setState({outOfServiceTo: date})}}
                                        />
                                        <Icon style={{fontSize:18}} name='ios-arrow-forward'/>
                                    </View>
                                </View>
                            </View>
                            : undefined
                            }
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',height:0.06*height,flex:1,borderColor:'lightgrey',borderTopWidth:0.5,borderBottomWidth:1,padding:8}} onPress={()=>this.setState({checked:'OutOfOrder'})}>
                            <Text style={{color:'grey'}}>Out of Order</Text>
                            {this.state.checked === 'OutOfOrder' ? <Icon name='ios-checkmark'/> : undefined}
                            
                        </TouchableOpacity>
                        {this.state.checked === 'OutOfOrder' ? 
                            <View>
                                <View style={styles.firstThree}>
                                    <Text style={{fontWeight:'bold'}}>From</Text>
                                    <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                                        <DatePicker
                                            date={this.state.outOfOrderFrom}
                                            mode="date"
                                            placeholder="select date"
                                            format="DD MMMM YYYY"
                                            confirmBtnText="Confirm"
                                            cancelBtnText="Cancel"
                                            customStyles={{
                                            dateIcon: {
                                                width:0,
                                                height:0
                                            },
                                            dateInput:{
                                                borderWidth:0,
                                                alignItems: 'flex-end'
                                            }
                                            }}
                                            onDateChange={(date) => {this.setState({outOfOrderFrom: date})}}
                                        />
                                        <Icon style={{fontSize:18}} name='ios-arrow-forward'/>
                                    </View>
                                </View>
                                <View style={styles.firstThree}>
                                    <Text style={{fontWeight:'bold'}}>To</Text>
                                    <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                                        <DatePicker
                                            date={this.state.outOfOrderTo}
                                            mode="date"
                                            placeholder="select date"
                                            format="DD MMMM YYYY"
                                            confirmBtnText="Confirm"
                                            cancelBtnText="Cancel"
                                            customStyles={{
                                            dateIcon: {
                                                width:0,
                                                height:0
                                            },
                                            dateInput:{
                                                borderWidth:0,
                                                alignItems: 'flex-end'
                                            }
                                            }}
                                            onDateChange={(date) => {this.setState({outOfOrderTo: date})}}
                                        />
                                        <Icon style={{fontSize:18}} name='ios-arrow-forward'/>
                                    </View>
                                </View>
                            </View>
                            : undefined
                            }
                        <View style={{flex:3}}/>
                    </ScrollView>
                </Content>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setRooms: rooms => dispatch({type:'SET_ROOMS_HARDCODE',rooms})
})

const mapStateToProps = state => ({
    rooms: state.get('rooms')
})

export default connect(mapStateToProps,mapDispatchToProps)(UpdateStatus)