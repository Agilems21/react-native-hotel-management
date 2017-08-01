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

class UserConfig extends Component {
    render(){
        return (
            <View style={{flex:1}}>
              <Content style={{backgroundColor: 'white'}}>
                <Separator />
                <List>
                  <ListItem icon onPress={() => {Actions.userRoleConfig()}}>
                    <Body>
                      <Text>User Role Config</Text>
                    </Body>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                  </ListItem>
                  <ListItem icon onPress={() => {}}>
                    <Body>
                      <Text>User Config</Text>
                    </Body>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                  </ListItem>
                </List>
              </Content>
            </View>
        )
    }
}

export default connect()(UserConfig)
