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
  Switch,
  Form,
  Label,
  Input,
  Item
} from 'native-base';
import {connect} from 'react-redux'
import Collapsible from 'react-native-collapsible';
import {Actions} from 'react-native-router-flux'
import CollapsibleUser from './CollapsibleUser'

class AddUser extends Component {
  static renderRightButton = (props) => {
    return (
        <TouchableOpacity style={{paddingRight: 15}} onPress={() => console.log('onRightPressed')}>
            <Text style={{color: '#0075ff'}}>Done</Text>
        </TouchableOpacity>
    );
  }

  render(){
      return (
          <View style={{flex:1}}>
              <Content style={{backgroundColor: 'white'}}>
                <Separator />
                <Form>
                  <Item inlineLabel>
                    <Label style={{color: "#000000"}}>Username</Label>
                    <Input />
                  </Item>
                  <Item inlineLabel>
                    <Label style={{color: "#000000"}}>Cashier ID</Label>
                    <Input />
                  </Item>
                  <ListItem icon onPress={() => {}}>
                    <Body>
                      <Text>User Role</Text>
                    </Body>
                    <Right>
                      <Text>Not Set</Text>
                      <Icon name="arrow-forward" />
                    </Right>
                  </ListItem>
                  <ListItem icon onPress={() => {}}>
                    <Body>
                      <Text>Email</Text>
                    </Body>
                    <Right>
                      <Text>Not Set</Text>
                      <Icon name="arrow-forward" />
                    </Right>
                  </ListItem>
                  <ListItem icon onPress={() => {}}>
                    <Body>
                      <Text>Generate QR Code</Text>
                      <Text note>Authorize user to access PMS</Text>
                    </Body>
                    <Right>
                      <Text>QR CODE</Text>
                    </Right>
                  </ListItem>
                </Form>
              </Content>
          </View>
      )
  }
}

export default connect()(AddUser)
