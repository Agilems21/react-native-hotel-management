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

export default class CollapsibleUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsibleOne: true
    }
  }

  render(){
      var user = this.props.user

      return (
          <View style={{flex:1}}>
            <ListItem icon onPress={() => { this.setState({collapsibleOne: !this.state.collapsibleOne}) }}>
              <Body>
                <Text>{user.name}</Text>
                <Text note>{user.subtitle}</Text>
              </Body>
              <Right>
                { this.state.collapsibleOne ? <Icon name="ios-arrow-forward" /> : <Icon name="ios-arrow-down" /> }
              </Right>
            </ListItem>
            <Collapsible collapsed={this.state.collapsibleOne}>
              <List>
                <ListItem icon onPress={() => {}}>
                  <Body>
                    <Text>User Name</Text>
                  </Body>
                  <Right>
                    <Text>{user.username}</Text>
                  </Right>
                </ListItem>

                <ListItem icon onPress={() => {}}>
                  <Body>
                    <Text>Cashier ID</Text>
                  </Body>
                  <Right>
                    <Text>{user.cashierID}</Text>
                  </Right>
                </ListItem>

                <ListItem icon onPress={() => {}}>
                  <Body>
                    <Text>User Role</Text>
                  </Body>
                  <Right>
                    <Text>{user.role}</Text>
                    <Icon name={"arrow-forward"}/>
                  </Right>
                </ListItem>

                <ListItem icon onPress={() => {}}>
                  <Body>
                    <Text>Email</Text>
                  </Body>
                  <Right>
                    <Text>{user.email ? user.email : "Not Set"}</Text>
                    <Icon name={"arrow-forward"}/>
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

                <ListItem icon onPress={() => {}}>
                  <Body>
                    <Text style={{color: 'red'}}>Delete User</Text>
                  </Body>
                </ListItem>
              </List>
            </Collapsible>
          </View>
      )
  }
}
