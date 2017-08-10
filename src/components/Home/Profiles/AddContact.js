import React, { Component } from 'react';
import {View,TouchableOpacity,Text,TextInput,ScrollView,ListView,Dimensions,Platform} from 'react-native'
import {Body,Icon,Left,CheckBox,Footer,Title,Right,Button,Header,Container,Item,Input,Content,List,ListItem,Segment} from 'native-base'
import {Actions} from 'react-native-router-flux'

class AddContact extends Component {
    constructor(props){
        super(props);
        this.state = {
            emailField: false,
            vipField: false,
            addressField: false,
            phoneNoField: false,
            nationalityField: false,
            birthdayField: false,
            idField: false
        }
    }

    //vip checkbox?

    render(){
        return (
            <Container>
                <Header style={{backgroundColor:'#f8f8fa'}}>
                    <Left>
                        <Button transparent onPress={()=>Actions.pop()}>
                            <Text style={{color:'#007AFF',fontSize:17}}>Cancel</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color:'black'}}>{'New ' + this.props.contactType}</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Text style={{color:'#007AFF',fontSize:17}}>Done</Text>
                        </Button>
                    </Right>
                </Header>
                <Content style={{backgroundColor:'white'}}>
                    <Item>
                        <Input 
                        style={{paddingLeft:10}} 
                        placeholder='First Name'
                        underlineColorAndroid='transparent'
                        />
                    </Item>
                    <Item>
                        <Input 
                        style={{paddingLeft:10}} 
                        placeholder='Last Name' 
                        underlineColorAndroid='transparent'
                        />
                    </Item>
                    <Item>
                        <Input 
                        style={{paddingLeft:10}} 
                        placeholder='Company' 
                        underlineColorAndroid='transparent'
                        />
                    </Item>
                    {this.state.emailField ? 
                        <Item>
                            <Input 
                            style={{paddingLeft:10}} 
                            placeholder='Email' 
                            underlineColorAndroid='transparent'
                            />
                        </Item> :
                        <TouchableOpacity style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',padding:10}} onPress={()=>this.setState({emailField: true})}>   
                            <Icon name='ios-add-circle' style={{color:'#5BC236',fontSize:18}}/>
                            <Text> add email</Text>
                        </TouchableOpacity>
                    }
                    {this.props.contactType === 'Guest' ? this.state.vipField ? 
                        <Item>
                            <Input 
                            style={{paddingLeft:10}} 
                            placeholder='Vip' 
                            underlineColorAndroid='transparent'
                            />
                        </Item> :
                        <TouchableOpacity style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',padding:10}} onPress={()=>this.setState({vipField: true})}>   
                            <Icon name='ios-add-circle' style={{color:'#5BC236',fontSize:18}}/>
                            <Text> add vip</Text>
                        </TouchableOpacity> : undefined
                    }
                    {this.state.addressField ? 
                        <Item>
                            <Input 
                            style={{paddingLeft:10}} 
                            placeholder='Address' 
                            underlineColorAndroid='transparent'
                            />
                        </Item> :
                        <TouchableOpacity style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',padding:10}} onPress={()=>this.setState({addressField: true})}>   
                            <Icon name='ios-add-circle' style={{color:'#5BC236',fontSize:18}}/>
                            <Text> add address</Text>
                        </TouchableOpacity>
                    }
                    {this.state.phoneNoField ? 
                        <Item>
                            <Input 
                            style={{paddingLeft:10}} 
                            placeholder='Phone Number' 
                            underlineColorAndroid='transparent'
                            />
                        </Item> :
                        <TouchableOpacity style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',padding:10}} onPress={()=>this.setState({phoneNoField: true})}>   
                            <Icon name='ios-add-circle' style={{color:'#5BC236',fontSize:18}}/>
                            <Text> add phone number</Text>
                        </TouchableOpacity>
                    }
                    {this.props.contactType === 'Guest' ? this.state.nationalityField ? 
                        <Item>
                            <Input 
                            style={{paddingLeft:10}} 
                            placeholder='Nationality' 
                            underlineColorAndroid='transparent'
                            />
                        </Item> :
                        <TouchableOpacity style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',padding:10}} onPress={()=>this.setState({nationalityField: true})}>   
                            <Icon name='ios-add-circle' style={{color:'#5BC236',fontSize:18}}/>
                            <Text> add nationality</Text>
                        </TouchableOpacity> : undefined
                    }
                    {this.props.contactType === 'Guest' ? this.state.birthdayField ? 
                        <Item>
                            <Input 
                            style={{paddingLeft:10}} 
                            placeholder='Birthday' 
                            underlineColorAndroid='transparent'
                            />
                        </Item> :
                        <TouchableOpacity style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',padding:10}} onPress={()=>this.setState({birthdayField: true})}>   
                            <Icon name='ios-add-circle' style={{color:'#5BC236',fontSize:18}}/>
                            <Text> add birthday</Text>
                        </TouchableOpacity> : undefined
                    }
                    {this.props.contactType === 'Guest' ? this.state.idField ? 
                        <Item>
                            <Input 
                            style={{paddingLeft:10}} 
                            placeholder='ID Number' 
                            underlineColorAndroid='transparent'
                            />
                        </Item> :
                        <TouchableOpacity style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',padding:10}} onPress={()=>this.setState({idField: true})}>   
                            <Icon name='ios-add-circle' style={{color:'#5BC236',fontSize:18}}/>
                            <Text> add id number</Text>
                        </TouchableOpacity> : undefined
                    }
                </Content>
            </Container>
        )
    }
}

export default AddContact