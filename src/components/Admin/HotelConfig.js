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

class HotelConfig extends Component {
    constructor(props) {
      super(props)
      this.state = {
        collapsibleOne: false,
        collapsibleTwo: false,
        collapsibleThree: false
      }
    }

    render(){
        return (
            <View style={{flex:1}}>
                <Content style={{backgroundColor: 'white'}}>
                  <Separator />
                  <List>
                    <ListItem icon onPress={() => {}}>
                      <Body>
                        <Text>Date Format</Text>
                      </Body>
                      <Right>
                        <Text>DD-MM-YY</Text>
                        <Icon name="arrow-forward" />
                      </Right>
                    </ListItem>
                  </List>

                  <Separator />

                  <List>
                    <ListItem icon onPress={() => {this.setState({collapsibleOne: !this.state.collapsibleOne})}}>
                      <Body>
                        <Text>System Currency, Time/Date</Text>
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
                          <Text>Currency</Text>
                        </Body>
                        <Right>
                          <Text>MYR</Text>
                          <Icon name="arrow-forward" />
                        </Right>
                      </ListItem>
                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>Decimal Places</Text>
                        </Body>
                        <Right>
                          <Text>2</Text>
                          <Icon name="arrow-forward" />
                        </Right>
                      </ListItem>
                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>Set Automatically</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>
                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>Time Zone</Text>
                        </Body>
                        <Right>
                          <Text>Kuala Lampur, Malaysia</Text>
                          <Icon name="arrow-forward" />
                        </Right>
                      </ListItem>
                    </List>
                  </Collapsible>

                  <Separator />

                  <List>
                    <ListItem icon onPress={() => {this.setState({collapsibleTwo: !this.state.collapsibleTwo})}}>
                      <Body>
                        <Text>Upload Template</Text>
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
                          <Text>Registration Card</Text>
                        </Body>
                        <Right>
                          <Text>registrationcard.html</Text>
                          <Icon name="arrow-forward" />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>Guest Folio</Text>
                        </Body>
                        <Right>
                          <Text>guestfolio.html</Text>
                          <Icon name="arrow-forward" />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>AR Invoice</Text>
                        </Body>
                        <Right>
                          <Text>arinvoice.html</Text>
                          <Icon name="arrow-forward" />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>AR Statement</Text>
                        </Body>
                        <Right>
                          <Text>arstatement.html</Text>
                          <Icon name="arrow-forward" />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>Confirmation Letter</Text>
                        </Body>
                        <Right>
                          <Text>confirmationletter.html</Text>
                          <Icon name="arrow-forward" />
                        </Right>
                      </ListItem>
                    </List>
                  </Collapsible>

                  <Separator />

                  <List>
                    <ListItem icon onPress={() =>{}}>
                      <Body>
                        <Text>Forex</Text>
                      </Body>
                      <Right>
                        <Icon name="ios-arrow-forward" />
                      </Right>
                    </ListItem>
                  </List>

                  <Separator />

                  <List>
                    <ListItem icon onPress={() =>{Actions.accountOverview()}}>
                      <Body>
                        <Text>Account Overview</Text>
                      </Body>
                      <Right>
                        <Icon name="ios-arrow-forward" />
                      </Right>
                    </ListItem>

                    <ListItem icon onPress={() =>{}}>
                      <Body>
                        <Text>Update Payment Details/Subscription</Text>
                      </Body>
                      <Right>
                        <Icon name="ios-arrow-forward" />
                      </Right>
                    </ListItem>
                  </List>

                  <Separator />

                  <List>
                    <ListItem icon onPress={() => {this.setState({collapsibleThree: !this.state.collapsibleThree})}}>
                      <Body>
                        <Text>Interface</Text>
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
                          <Text>Unicorn</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>

                      <ListItem icon onPress={() => {}}>
                        <Body>
                          <Text>Windsurfer</Text>
                        </Body>
                        <Right>
                          <Switch value={true} />
                        </Right>
                      </ListItem>
                    </List>
                  </Collapsible>

                  <Separator />

                  <List>
                    <ListItem icon onPress={() => {}}>
                      <Body>
                        <Text>Automated Start of Day</Text>
                      </Body>
                      <Right>
                        <Switch value={true} />
                      </Right>
                    </ListItem>
                    <ListItem icon onPress={() => {}}>
                      <Body>
                        <Text>Automated Start Time</Text>
                      </Body>
                      <Right>
                        <Text>HH:MM</Text>
                        <Icon name="arrow-forward" />
                      </Right>
                    </ListItem>
                  </List>
                  <Text style={{fontSize: 12, fontWeight: '300', padding: 6}}>Automated End of Day will stopped in the event system detected oustanding arrivals or departures. User require to enter manual End of Day to avoid system interruption.</Text>
                  <Separator />
                </Content>

            </View>
        )
    }
}

export default connect()(HotelConfig)
