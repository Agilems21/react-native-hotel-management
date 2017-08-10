import React, { Component } from 'react';
import {View,TouchableOpacity,Text,TextInput,ScrollView,ListView,Dimensions,Platform} from 'react-native'
import {Body,Icon,Left,CheckBox,Footer,Title,Right,Button,Header,Container,Item,Input,Content,List,ListItem,Segment} from 'native-base'
import AlphabetListView from 'react-native-alphabetlistview'
import {Actions} from 'react-native-router-flux'
var {width,height} = Dimensions.get('window');

class Profiles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeSegment: 1,
            data: {
                A: ['Taylor Mall','Osman Abdelnasir','Steve Paul Jobs'],
                B: ['some','entries','are here'],
                C: ['some','entries','are here'],
                D: ['some','entries','are here'],
                E: ['some','entries','are here'],
                F: ['some','entries','are here'],
                G: ['some','entries','are here'],
                H: ['some','entries','are here'],
                I: ['some','entries','are here'],
                J: ['some','entries','are here'],
                K: ['some','entries','are here'],
                L: ['some','entries','are here'],
                M: ['some','entries','are here'],
                N: ['some','entries','are here'],
                O: ['some','entries','are here'],
                P: ['some','entries','are here'],
                Q: ['some','entries','are here'],
                R: ['some','entries','are here'],
                S: ['some','entries','are here'],
                T: ['some','entries','are here'],
                U: ['some','entries','are here'],
                V: ['some','entries','are here'],
                W: ['some','entries','are here'],
                X: ['some','entries','are here'],
                Y: ['some','entries','are here'],
                Z: ['some','entries','are here'],
            }
        }
    }

    whichSegment() {
        switch(this.state.activeSegment){
            case 1: return 'Guest';
            case 2: return 'Company';
            case 3: return 'Travel Agent';
        }
    }

    render() {
        return (
             <Container>
                <Header style={{backgroundColor:'#f8f8fa',height:height*0.1}}>
                    <Left>
                        <Button transparent>
                            <Icon name='ios-arrow-back' style={{fontSize:30,color:'#007AFF'}}/>
                            <Text style={{color:'#007AFF',fontSize:17}}> Back</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color:'black'}}>Profiles</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={()=>Actions.addContact({contactType: this.whichSegment()})}>
                            <Icon name='ios-add' style={{fontSize:30,color:'#007AFF'}}/>
                        </Button>
                    </Right>
                </Header>
                <View style={{backgroundColor:'white',height:height*0.9,justifyContent:'flex-start'}}>
                    <View style={{flex:1.5}}>
                        <Header searchBar style={{backgroundColor:'lightgrey',height:height*0.06,paddingBottom:15,paddingTop:15}}>
                            <Item style={{backgroundColor:'white',height:height*0.04}} >
                                <Icon name="ios-search" />
                                <Input placeholder="Search"/>
                            </Item>
                        </Header>
                        <Segment style={{flex:1}}>
                            <Button  style={{backgroundColor:this.state.activeSegment == 1 ? '#007AFF' : undefined}} first active={this.state.activeSegment == 1} onPress={()=>this.setState({activeSegment: 1})}><Text style={{color: this.state.activeSegment == 1 ? 'white' : '#007AFF'}}>Guest</Text></Button>
                            <Button  style={{backgroundColor:this.state.activeSegment == 2 ? '#007AFF' : undefined}} active={this.state.activeSegment == 2} onPress={()=>this.setState({activeSegment: 2})}><Text style={{color: this.state.activeSegment == 2 ? 'white' : '#007AFF'}}>Company</Text></Button>
                            <Button style={{backgroundColor:this.state.activeSegment == 3 ? '#007AFF' : undefined}} last active={this.state.activeSegment == 3} onPress={()=>this.setState({activeSegment: 3})}><Text style={{color: this.state.activeSegment == 3 ? 'white' : '#007AFF'}}>Travel Agent</Text></Button>
                        </Segment>
                    </View>
                    <AlphabetListView
                        data={this.state.data}
                        cell={CellItem}
                        cellHeight={30}
                        sectionHeader={SectionHeader}
                        sectionHeaderHeight={30}
                        style={{flex:8.5}}
                    />
                </View>
                

            </Container>
        )
    }
}

class SectionHeader extends Component {
  render() {
    // inline styles used for brevity, use a stylesheet when possible
    var textStyle = {
      textAlign:'left',
      color:'#007AFF',
      justifyContent: 'center',
      fontSize:16
    };

    var viewStyle = {
      backgroundColor: '#f9f9f9',
      justifyContent: 'center',
      paddingLeft:10,
      height:30
    };
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{this.props.title}</Text>
      </View>
    );
  }
}


const CellItem = ({item,index,isLast}) => {
    return (
        <View style={{paddingLeft:10}}>
            <View style={{height:40,flexDirection:'row',alignItems:'center',borderColor:'lightgrey',borderBottomWidth: isLast ? 0 : 0.5}}>
                <Text style={{fontWeight:'bold',fontSize:15}}>{item.split(' ')[0] + ' '}</Text>
                <Text style={{fontSize:15}}>{item.split(' ').filter(name => item.indexOf(name) != 0).map(name => name + ' ')}</Text>
            </View>
        </View>
    )
}

export default Profiles;