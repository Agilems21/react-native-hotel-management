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

class UserRoleConfig extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsibleOne: true,
      collapsibleTwo: true,
      collapsibleThree: true,
      collapsibleFour: true,
      collapsibleFive: true,
      collapsibleSix: true,
      collapsibleSeven: true
    }
  }

  render(){
      return (
          <View style={{flex:1}}>
              <Content style={{backgroundColor: 'white'}}>
                <Separator />
                <List>
                  <ListItem icon onPress={() => { this.setState({collapsibleOne: !this.state.collapsibleOne}) }}>
                    <Body>
                      <Text>IT Admin</Text>
                    </Body>
                    <Right>
                      { this.state.collapsibleOne ? <Icon name="ios-arrow-forward" /> : <Icon name="ios-arrow-down" /> }
                    </Right>
                  </ListItem>
                </List>
                <Collapsible collapsed={this.state.collapsibleOne}>
                  <List>
                    <ListItem icon onPress={() => {}}>
                      <Body>
                        <Text>Generate QR Code</Text>
                        <Text note>Authorize user to access PMS</Text>
                      </Body>
                      <Right>
                        <Text>QR CODE</Text>
                      </Right>
                    </ListItem>
                  </List>

                  <List>
                    <ListItem icon onPress={() => { this.setState({collapsibleTwo: !this.state.collapsibleTwo}) }}>
                      <Body>
                        <Text>Login/Tasks</Text>
                      </Body>
                      <Right>
                        { this.state.collapsibleTwo ? <Icon name="ios-arrow-forward" /> : <Icon name="ios-arrow-down" /> }
                      </Right>
                    </ListItem>
                  </List>
                  <Collapsible collapsed={this.state.collapsibleTwo}>
                    <List>
                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>Reset Password</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>View Task</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>New/Edit Task</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>
                    </List>
                  </Collapsible>

                  <List>
                    <ListItem icon onPress={() => { this.setState({collapsibleThree: !this.state.collapsibleThree}) }}>
                      <Body>
                        <Text>Profiles</Text>
                      </Body>
                      <Right>
                        { this.state.collapsibleThree ? <Icon name="ios-arrow-forward" /> : <Icon name="ios-arrow-down" /> }
                      </Right>
                    </ListItem>
                  </List>
                  <Collapsible collapsed={this.state.collapsibleThree}>
                    <List>
                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>View Profile</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>New/Edit Profile</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>Delete Profile</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>
                    </List>
                  </Collapsible>

                  <List>
                    <ListItem icon onPress={() => { this.setState({collapsibleFour: !this.state.collapsibleFour}) }}>
                      <Body>
                        <Text>Reservation</Text>
                      </Body>
                      <Right>
                        { this.state.collapsibleFour ? <Icon name="ios-arrow-forward" /> : <Icon name="ios-arrow-down" /> }
                      </Right>
                    </ListItem>
                  </List>
                  <Collapsible collapsed={this.state.collapsibleFour}>
                    <List>
                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>View Reservation</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>New/Edit Contract Rate</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>New/Edit Reservation</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>
                    </List>
                  </Collapsible>

                  <List>
                    <ListItem icon onPress={() => { this.setState({collapsibleFive: !this.state.collapsibleFive}) }}>
                      <Body>
                        <Text>Cashiering</Text>
                      </Body>
                      <Right>
                        { this.state.collapsibleFive ? <Icon name="ios-arrow-forward" /> : <Icon name="ios-arrow-down" /> }
                      </Right>
                    </ListItem>
                  </List>
                  <Collapsible collapsed={this.state.collapsibleFive}>
                    <List>
                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>View Bill</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>Post/Edit Transaction</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>Posting Forex/House Bank</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>Reprint Bill/Receipt</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>Close Cashier</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>View AR Account</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>New/Edit AR Account</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>
                    </List>
                  </Collapsible>

                  <List>
                    <ListItem icon onPress={() => { this.setState({collapsibleSix: !this.state.collapsibleSix}) }}>
                      <Body>
                        <Text>Rooms</Text>
                      </Body>
                      <Right>
                        { this.state.collapsibleSix ? <Icon name="ios-arrow-forward" /> : <Icon name="ios-arrow-down" /> }
                      </Right>
                    </ListItem>
                  </List>
                  <Collapsible collapsed={this.state.collapsibleSix}>
                    <List>
                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>View Room Status</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>Update Room Status</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>New/Edit OOS/OOO</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>Print Reports</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>Run End od Day Process</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>
                    </List>
                  </Collapsible>

                  <List>
                    <ListItem icon onPress={() => { this.setState({collapsibleSeven: !this.state.collapsibleSeven}) }}>
                      <Body>
                        <Text>Configuration</Text>
                      </Body>
                      <Right>
                        { this.state.collapsibleSeven ? <Icon name="ios-arrow-forward" /> : <Icon name="ios-arrow-down" /> }
                      </Right>
                    </ListItem>
                  </List>
                  <Collapsible collapsed={this.state.collapsibleSeven}>
                    <List>
                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>Edit Hotel Config</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>Edit User Config</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>Edit Profile Config</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>Edit Reservation Config</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>Edit Cashiering Config</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>Edit Room Config</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>Edit Rate Management Config</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>
                    </List>
                  </Collapsible>
                </Collapsible>

                <List>
                  <ListItem icon onPress={() => {}}>
                    <Body>
                      <Text>Admin</Text>
                    </Body>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                  </ListItem>

                  <ListItem icon onPress={() => {}}>
                    <Body>
                      <Text>Front Desk Manager</Text>
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

export default connect()(UserRoleConfig)
