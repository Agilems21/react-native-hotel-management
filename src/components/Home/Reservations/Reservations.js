import React, { Component } from 'react';
import {View,TouchableOpacity,Text,TextInput,ScrollView,ListView,Dimensions} from 'react-native'
import {Body,Icon,Left,CheckBox,Footer,Title,Right,Button,Header,Container,Item,Input,Content,List,ListItem} from 'native-base'
import BottomBorder from '../../BottomBorderWrapper'
import Collapsible from 'react-native-collapsible';
import { SwipeRow } from 'react-native-swipe-list-view';
import ResevationList from './ReservationList'
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

    render() {
        return (
            <Container>
                <Header>
                    <Left/>
                    <Body>
                        <Title>Reservations</Title>
                    </Body>
                    <Right>
                        <View style={{flex:0.4}}></View>
                       <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',flex:2}}>
                        <Button transparent >
                            <Icon name='ios-clipboard-outline' style={{fontSize:30}} />
                        </Button>
                        <Button transparent>
                            <Icon name='ios-search' style={{fontSize:30}}/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-add' style={{fontSize:30}}/>
                        </Button>
                       </View>
                    </Right>
                </Header>
                <Content style={{backgroundColor:'#f0eff4'}}>
                    <ScrollView>
                        <Header searchBar style={{backgroundColor:'lightgrey',height:height*0.06,paddingBottom:15}}>
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
                                    <ResevationList reservations={[{name:'Taylor Malloran',duration:'26/04/2017 to 27/04/2017',roomType:'STDB',roomRate:150,roomNo:1001},{name:'Taylor Malloran',duration:'26/04/2017 to 27/04/2017',roomType:'STDB',roomRate:150,roomNo:1001}]}/>
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



export default Reservations