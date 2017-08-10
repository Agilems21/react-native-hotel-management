import React, { Component } from 'react';
import {View,TouchableOpacity,Text,TextInput,ScrollView,ListView,Dimensions} from 'react-native'
import {Body,Icon,Left,CheckBox,Footer,Title,Right,Button,Header,Container,Item,Input,Content,ListItem} from 'native-base'
import Collapsible from 'react-native-collapsible';
import BottomBorder from '../../BottomBorderWrapper'
var {width,height} = Dimensions.get('window')

class NewReservation extends Component {
    constructor(props){
        super(props)
        this.state = {
            adults: 1,
            children: 0,
            additionalDetails: false
        }
    }

    render(){
        return (
            <Container>
                <Header>
                    <Left><Button transparent><Text style={{color:'#007AFF'}}>Cancel</Text></Button></Left>
                    <Body>
                        <Text style={{fontWeight:'bold',fontSize:14,textAlign:'center'}}>New Reservation</Text>
                    </Body>
                    <Right>
                        <Button transparent><Text style={{color:'#007AFF'}}>Create</Text></Button>
                    </Right>
                </Header>
                <Content style={{backgroundColor:'#f0eff4'}}>
                    <ScrollView>
                        <View style={{height:0.04*height}}/>
                        <FormItem topPadding={15} bottomPadding={15}>
                            <Text style={{flex:1,fontSize:16}}>Guest</Text>
                            <View style={{flex:5}}/>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-around',flex:2}}>
                                <Text style={{color:'grey',fontSize:16}}>Required</Text>
                                <Icon style={{fontSize:18,color:'grey'}} name='ios-arrow-forward'/>
                            </TouchableOpacity>
                        </FormItem>
                        <View style={{height:0.04*height}}/>
                        <FormItem topPadding={15} bottomPadding={15}>
                            <Text style={{flex:1,fontSize:16}}>From</Text>
                            <TextInput placeholder='Start Date'/>
                        </FormItem>
                        <FormItem topPadding={15} bottomPadding={15}>
                            <Text style={{flex:1,fontSize:16}}>To</Text>
                            <TextInput placeholder='End Date'/>
                        </FormItem>
                        <View style={{height:0.04*height}}/>
                        <FormItem topPadding={15} bottomPadding={15}>
                            <Text style={{flex:1,fontSize:16}}>{(this.state.adults == 1) ? this.state.adults + ' Adult'  : this.state.adults + ' Adults'}</Text>
                            <View style={{flex:2}}/>
                            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',flex:2}}>
                                <TouchableOpacity style={{borderColor:'#007AFF',borderWidth:0.9,borderRadius:5,flex:1,alignItems:'center'}}
                                    onPress={()=>this.setState({adults: this.state.adults+=1})}>
                                    <Icon style={{fontSize:22,color:'#007AFF'}} name='ios-add'/>
                                </TouchableOpacity>
                                <TouchableOpacity style={{borderColor:'#007AFF',borderWidth:0.9,borderRadius:5,flex:1,alignItems:'center'}}
                                 onPress={()=>this.state.adults >= 2 ? this.setState({adults: this.state.adults-=1}) : undefined}>
                                    <Icon style={{fontSize:22,color:'#007AFF'}} name='ios-remove'/>
                                </TouchableOpacity>
                            </View>
                        </FormItem>
                        <FormItem topPadding={15} bottomPadding={15}>
                            <Text style={{flex:1,fontSize:14.6}}>{(this.state.children == 1) ? this.state.children + ' Child'  : this.state.children + ' Children'}</Text>
                            <View style={{flex:2}}/>
                            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',flex:2}}>
                                <TouchableOpacity style={{borderColor:'#007AFF',borderWidth:0.9,borderRadius:5,flex:1,alignItems:'center'}}
                                    onPress={()=>this.setState({children: this.state.children+=1})}>
                                    <Icon style={{fontSize:22,color:'#007AFF'}} name='ios-add'/>
                                </TouchableOpacity>
                                <TouchableOpacity style={{borderColor:'#007AFF',borderWidth:0.9,borderRadius:5,flex:1,alignItems:'center'}}
                                 onPress={()=>this.state.children >= 1 ? this.setState({children: this.state.children-=1}) : undefined}>
                                    <Icon style={{fontSize:22,color:'#007AFF'}} name='ios-remove'/>
                                </TouchableOpacity>
                            </View>
                        </FormItem>
                        <FormItem topPadding={15} bottomPadding={15}>
                            <Text style={{flex:1,fontSize:16}}>Room Rate</Text>
                            <View style={{flex:1.5}}/>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-around',flex:1.5}}>
                                <Text style={{color:'grey',fontSize:16}}>Please Select</Text>
                                <Icon style={{fontSize:18,color:'grey'}} name='ios-arrow-forward'/>
                            </TouchableOpacity>
                        </FormItem>
                        <FormItem topPadding={15} bottomPadding={15}>
                            <TouchableOpacity >
                                <Left style={{flexDirection:'row',alignItems:'center'}}>
                                    <Icon name='ios-add-circle' style={{color:'#5BC236',fontSize:23,paddingRight:10}}/>
                                    <Text style={{fontSize:16}}>Add Ons</Text>
                                </Left>
                            </TouchableOpacity>
                        </FormItem>
                        <FormItem topPadding={15} bottomPadding={15}>
                            <Text style={{flex:1,fontSize:16}}>Room Rate</Text>
                            <View style={{flex:1.5}}/>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-around',flex:1.5}}>
                                <Text style={{color:'grey',fontSize:16}}>Please Select</Text>
                                <Icon style={{fontSize:18,color:'grey'}} name='ios-arrow-forward'/>
                            </TouchableOpacity>
                        </FormItem>
                        <FormItem topPadding={15} bottomPadding={15}>
                            <Text style={{flex:1,fontSize:16}}>Cost</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize:16,paddingRight:10}}>$100</Text>
                                <TouchableOpacity>
                                    <Icon style={{fontSize:20,color:'#007AFF'}} name='ios-information-circle-outline'/>
                                </TouchableOpacity>
                            </View>
                        </FormItem>
                        <View style={{height:0.04*height}}/>
                        <FormItem topPadding={15} bottomPadding={15}>
                            <TextInput placeholder='Notes' style={{flex:1}}/>
                        </FormItem>
                        <View style={{height:0.02*height}}/>
                        <View style={{height:0.04*height,paddingLeft:10}}>
                            <BottomBorder>
                                <TouchableOpacity onPress={()=>this.setState({additionalDetails:!this.state.additionalDetails})} style={{flex:1,alignItems:'center',paddingTop:10,paddingRight:10, flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
                                    <Text style={{fontSize:13,color:'darkgrey'}}>ADDITIONAL DETAILS</Text>
                                    {this.state.additionalDetails ? 
                                    <Icon style={{fontSize:18,color:'lightgrey'}} name='ios-arrow-forward'/>:
                                    <Icon style={{fontSize:18,color:'lightgrey'}} name='ios-arrow-down'/>
                                    }
                                </TouchableOpacity>
                            </BottomBorder>
                        </View>
                        <View style={{height:0.01*height}}/>
                        <Collapsible collapsed={this.state.additionalDetails}>
                            <FormItem topPadding={15} bottomPadding={15}>
                                <Text style={{flex:1,fontSize:16}}>Market</Text>
                                <View style={{flex:1.5}}/>
                                <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-around',flex:1.5}}>
                                    <Text style={{color:'grey',fontSize:16}}>Please Select</Text>
                                    <Icon style={{fontSize:18,color:'grey'}} name='ios-arrow-forward'/>
                                </TouchableOpacity>
                            </FormItem>
                            <FormItem topPadding={15} bottomPadding={15}>
                                <Text style={{flex:1,fontSize:16}}>Source</Text>
                                <View style={{flex:1.5}}/>
                                <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-around',flex:1.5}}>
                                    <Text style={{color:'grey',fontSize:16}}>Please Select</Text>
                                    <Icon style={{fontSize:18,color:'grey'}} name='ios-arrow-forward'/>
                                </TouchableOpacity>
                            </FormItem>
                            <FormItem topPadding={15} bottomPadding={15}>
                                <Text style={{flex:1.5,fontSize:16}}>Company</Text>
                                <View style={{flex:1.5}}/>
                                <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-around',flex:1}}>
                                    <Text style={{color:'grey',fontSize:16}}>Not Set</Text>
                                    <Icon style={{fontSize:18,color:'grey'}} name='ios-arrow-forward'/>
                                </TouchableOpacity>
                            </FormItem>
                            <FormItem topPadding={15} bottomPadding={15}>
                                <Text style={{flex:1.5,fontSize:16}}>Travel Agent</Text>
                                <View style={{flex:1.5}}/>
                                <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-around',flex:1}}>
                                    <Text style={{color:'grey',fontSize:16}}>Not Set</Text>
                                    <Icon style={{fontSize:18,color:'grey'}} name='ios-arrow-forward'/>
                                </TouchableOpacity>
                            </FormItem>
                            <FormItem topPadding={15} bottomPadding={15}>
                                <Text style={{flex:1.5,fontSize:16}}>Special Requests</Text>
                                <View style={{flex:1.5}}/>
                                <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-around',flex:1}}>
                                    <Text style={{color:'grey',fontSize:16}}>None</Text>
                                    <Icon style={{fontSize:18,color:'grey'}} name='ios-arrow-forward'/>
                                </TouchableOpacity>
                            </FormItem>
                            <FormItem topPadding={15} bottomPadding={15}>
                                <Text style={{flex:1.5,fontSize:16}}>ETA</Text>
                                <View style={{flex:1.5}}/>
                                <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-around',flex:1}}>
                                    <Text style={{color:'grey',fontSize:16}}>Not Set</Text>
                                    <Icon style={{fontSize:18,color:'grey'}} name='ios-arrow-forward'/>
                                </TouchableOpacity>
                            </FormItem>
                            <FormItem topPadding={15} bottomPadding={15}>
                                <Text style={{flex:1.5,fontSize:16}}>ETD</Text>
                                <View style={{flex:1.5}}/>
                                <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-around',flex:1}}>
                                    <Text style={{color:'grey',fontSize:16}}>Not Set</Text>
                                    <Icon style={{fontSize:18,color:'grey'}} name='ios-arrow-forward'/>
                                </TouchableOpacity>
                            </FormItem>
                        </Collapsible>
                        <View style={{height:0.04*height}}/>
                        <FormItem topPadding={15} bottomPadding={15}>
                            <Text style={{flex:1,fontSize:16}}>Guarantee</Text>
                            <View style={{flex:1.5}}/>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-around',flex:1.5}}>
                                <Text style={{color:'grey',fontSize:16}}>Not-guaranteed</Text>
                                <Icon style={{fontSize:18,color:'grey'}} name='ios-arrow-forward'/>
                            </TouchableOpacity>
                        </FormItem>
                        <View style={{height:0.04*height}}/>
                        <FormItem topPadding={15} bottomPadding={15}>
                            <Text style={{flex:1.5,fontSize:16}}>Sharer</Text>
                            <View style={{flex:1.5}}/>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-around',flex:1}}>
                                <Text style={{color:'grey',fontSize:16}}>Not Set</Text>
                                <Icon style={{fontSize:18,color:'grey'}} name='ios-arrow-forward'/>
                            </TouchableOpacity>
                        </FormItem>
                        <View style={{height:0.04*height}}/>
                        <FormItem topPadding={15} bottomPadding={15}>
                            <Text style={{flex:1.5,fontSize:16}}>Booker</Text>
                            <View style={{flex:1.5}}/>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-around',flex:1}}>
                                <Text style={{color:'grey',fontSize:16}}>Not Set</Text>
                                <Icon style={{fontSize:18,color:'grey'}} name='ios-arrow-forward'/>
                            </TouchableOpacity>
                        </FormItem>
                        <View style={{height:0.04*height}}/>
                         <FormItem topPadding={15} bottomPadding={15}>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-around',flex:0.25}}>
                                <Text style={{flex:2.25,fontSize:16}}>Billing Instructions</Text>
                                <Icon style={{fontSize:18,color:'grey'}} name='ios-arrow-forward'/>
                            </TouchableOpacity>
                        </FormItem>
                        <View style={{height:0.04*height}}/>
                    </ScrollView>
                    
                </Content>
                <Footer style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',padding:5,height:Dimensions.get('window').height*0.07}}>
                      <View style={{flex:3,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Button transparent><Icon style={{fontSize:40,color:'#007AFF'}} name='ios-more'/></Button>
                        <Text>{'Total: $' + '100'}</Text>
                      </View>
                        <View style={{flex:2}}/>
                    </Footer>
            </Container>
        )
    }
}

const FormItem = ({children,topPadding,bottomPadding}) => (
    <View style={{backgroundColor:'white',flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderColor:'lightgrey',borderBottomWidth:0.5,paddingLeft:15,paddingTop:topPadding,paddingBottom:bottomPadding,paddingRight:13}}>
        {children}
    </View>
)

export default NewReservation;