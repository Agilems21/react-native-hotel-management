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

class AccountOverview extends Component {
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
                  <List>
                    <ListItem icon onPress={() => {}}>
                      <Body>
                        <Text>Hotel Name</Text>
                      </Body>
                      <Right>
                        <Text>Aloft Kuala Lamput Sentral</Text>
                      </Right>
                    </ListItem>
                  </List>

                  <Separator />

                  <List>
                    <ListItem icon onPress={() => {}}>
                      <Body>
                        <Text>Full Name</Text>
                      </Body>
                      <Right>
                        <Text>Not Set</Text>
                        <Icon name="ios-arrow-forward" />
                      </Right>
                    </ListItem>

                    <ListItem icon onPress={() =>{}}>
                      <Body>
                        <Text>Email</Text>
                      </Body>
                      <Right>
                        <Text>Not Set</Text>
                        <Icon name="ios-arrow-forward" />
                      </Right>
                    </ListItem>

                    <ListItem icon onPress={() => {}}>
                      <Body>
                        <Text>Contact Number</Text>
                      </Body>
                      <Right>
                        <Text>Not Set</Text>
                        <Icon name="ios-arrow-forward" />
                      </Right>
                    </ListItem>

                    <ListItem icon onPress={() => {}}>
                      <Body>
                        <Text>Address</Text>
                      </Body>
                      <Right>
                        <Text>No 5 Jalan Stesan Sentral 5...</Text>
                        <Icon name="ios-arrow-forward" />
                      </Right>
                    </ListItem>

                    <ListItem icon onPress={() => {}}>
                      <Body>
                        <Text>Country</Text>
                      </Body>
                      <Right>
                        <Text>Malaysia</Text>
                        <Icon name="ios-arrow-forward" />
                      </Right>
                    </ListItem>
                  </List>

                  <Separator />

                  <List>
                    <ListItem icon onPress={() => {}}>
                      <Body>
                        <Text>User Name</Text>
                      </Body>
                      <Right>
                        <Text>Not Set</Text>
                        <Icon name="ios-arrow-forward" />
                      </Right>
                    </ListItem>

                    <ListItem icon onPress={() => {}}>
                      <Body>
                        <Text>Password</Text>
                      </Body>
                      <Right>
                        <Text>Not Set</Text>
                        <Icon name="ios-arrow-forward" />
                      </Right>
                    </ListItem>

                    <ListItem icon onPress={() => {}}>
                      <Body>
                        <Text>Reset Password</Text>
                      </Body>

                    </ListItem>
                  </List>
                  
                  <Separator />
                </Content>

            </View>
        )
    }
}

export default connect()(AccountOverview)
