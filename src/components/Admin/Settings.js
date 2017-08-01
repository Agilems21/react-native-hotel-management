import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Platform
} from 'react-native';
import { Container, Header, Content, List, ListItem, Text , Icon, Right, Left, Separator, Button, Body, Title} from 'native-base';
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'

class Settings extends Component {
    render(){
        return (
            <View style={{flex:1}}>
                <Content style={{backgroundColor: 'white'}}>
                  <List>
                    <Separator>

                    </Separator>
                    <ListItem onPress={() => {Actions.hotelConfig()}}>
                      <Text>Hotel Config</Text>
                      <Right>
                        <Icon name="arrow-forward" />
                      </Right>
                    </ListItem>
                    <ListItem onPress={() => {Actions.userConfig()}}>
                      <Text>User Config</Text>
                      <Right>
                        <Icon name="arrow-forward" />
                      </Right>
                    </ListItem>
                    <ListItem onPress={() => {}}>
                      <Text>Profile Config</Text>
                      <Right>
                        <Icon name="arrow-forward" />
                      </Right>
                    </ListItem>
                    <ListItem onPress={() => {}}>
                      <Text>Reservation Config</Text>
                      <Right>
                        <Icon name="arrow-forward" />
                      </Right>
                    </ListItem>
                    <ListItem onPress={() => {}}>
                      <Text>Cashiering Config</Text>
                      <Right>
                        <Icon name="arrow-forward" />
                      </Right>
                    </ListItem>
                    <ListItem onPress={() => {}}>
                      <Text>Room Config</Text>
                      <Right>
                        <Icon name="arrow-forward" />
                      </Right>
                    </ListItem>
                    <ListItem onPress={() => {}}>
                      <Text>Rate Management Config</Text>
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

export default connect()(Settings)
