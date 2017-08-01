import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Platform
} from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Icon,
  Right,
  Left,
  Separator,
  Button,
  Body,
  Title,
  Switch
} from 'native-base';
import {connect} from 'react-redux'
import Collapsible from 'react-native-collapsible';
import {Actions} from 'react-native-router-flux'
import CollapsibleUser from './CollapsibleUser'

class UserConfigOptions extends Component {
  render(){
      return (
          <View style={{flex:1}}>
              <Content style={{backgroundColor: 'white'}}>
                <Separator />
                <List>
                  <CollapsibleUser user={{name: 'FOJEROME', subtitle: 'Front Desk Agent 002'}} />
                  <CollapsibleUser user={{name: 'ACTINA', subtitle: 'Front Desk Agent 004'}} />
                  <CollapsibleUser user={{name: 'FOTEO', subtitle: 'Front Desk Agent 003'}} />
                  <CollapsibleUser user={{name: 'IT JIM', subtitle: 'IT Admin 001', username: 'ITJIM', cashierID: '001', role: 'IT Admin'}} />
                </List>
              </Content>
          </View>
      )
  }
}

export default connect()(UserConfigOptions)
