import React, { Component } from 'react';
import {View,TouchableOpacity,Text,TextInput,ScrollView,ListView,Dimensions} from 'react-native'
import {Body,Icon,Left,CheckBox,Footer,Title,Right,Button,Header,Container,Item,Input,Content,List,ListItem} from 'native-base'
import BottomBorder from '../../BottomBorderWrapper'
import Collapsible from 'react-native-collapsible';
import { SwipeRow } from 'react-native-swipe-list-view';
import ResevationList from './ReservationList'
import {reservationSearch} from '../../../actions/postAuth'
import {connect} from 'react-redux'
var {width,height} = Dimensions.get('window')

class Reservations extends Component {
    constructor(props) {
        super(props)
        this.state = {
                        sections: ['DEPARTURE','ARRIVAL','CHECKED IN','CHECKED OUT'].map(name => ({name,collapsed:false}))
                     }
        console.log(this.state)
    }

    newCollapsed = (oldCollapsed,index) => {
        let obj = {}
        obj[index] = Object.assign(oldCollapsed[index],{collapsed:!oldCollapsed[index].collapsed})
        return Object.assign([], oldCollapsed, obj)
    }

    componentWillMount(){
        this.props.getUserReservations({headers:{token:this.props.token}, body:{
            keyword: '',
            feilds: ["guestName","rateAmount","rateCode","roomTypeCode","roomNumber"]
        }})
    }

    render() {
        return (
            <Container>
                <Header style={{backgroundColor:'#f8f8fa'}}>
                    <Left/>
                    <Body>
                        <Title style={{color:'black'}}>Reservations</Title>
                    </Body>
                    <Right>
                        <View style={{flex:0.4}}></View>
                       <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',flex:2}}>
                        <Button transparent >
                            <Icon name='ios-clipboard-outline' style={{fontSize:30,color:'#007AFF'}} />
                        </Button>
                        <Button transparent>
                            <Icon name='ios-search' style={{fontSize:30,color:'#007AFF'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-add' style={{fontSize:30,color:'#007AFF'}}/>
                        </Button>
                       </View>
                    </Right>
                </Header>
                <Content style={{backgroundColor:'#f0eff4'}}>
                    <ScrollView>
                        <Header searchBar style={{backgroundColor:'lightgrey',height:height*0.06,paddingBottom:15,paddingTop:15}}>
                            <Item style={{backgroundColor:'white',height:height*0.04}} >
                                <Icon name="ios-search" />
                                <Input placeholder="Search"/>
                            </Item>
                        </Header>
                        {this.state.sections.map(section => {
                            let index = this.state.sections.indexOf(section)
                            return (
                            <View key={index}>
                                <BottomBorder leftPadding={15}>
                                    <TouchableOpacity onPress={()=>this.setState({sections:this.newCollapsed(this.state.sections,index)})} style={{flex:1,alignItems:'center',paddingTop:10,paddingRight:10, flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
                                        <Text style={{fontSize:12,color:'darkgrey'}}>{section.name}</Text>
                                        {this.state.sections[index].collapsed ? 
                                        <Icon style={{fontSize:18,color:'lightgrey'}} name='ios-arrow-forward'/>:
                                        <Icon style={{fontSize:18,color:'lightgrey'}} name='ios-arrow-down'/>
                                        }
                                    </TouchableOpacity>
                                </BottomBorder>
                                <Collapsible collapsed={section.collapsed}>
                                   {this.props.userReservations ? <ResevationList reservations={this.props.userReservations.filter(reservation => reservation.reservationStatus === section.name.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}).replace(/ /g,''))}/> : undefined} 
                                </Collapsible>
                            </View>
                            )
                        })}
                    </ScrollView>
                   
                </Content>
                
                
            </Container>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    getUserReservations: options => dispatch(reservationSearch(options))
})

const mapStateToProps = state => ({
    token: state.get('token'),
    userReservations: state.get('userReservations')
})

export default connect(mapStateToProps,mapDispatchToProps)(Reservations)