import React, { Component } from 'react';
import {View,Button,TextInput,ScrollView,Platform,TouchableOpacity} from 'react-native'
import {List,ListItem,Body,Icon,Left,Text,Item,Input} from 'native-base'
import {addressSearch} from '../../../actions/preAuth'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import BottomBorder from '../../BottomBorderWrapper'
import {revGeocode} from '../../../actions/preAuth'

class SignupLocation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            address: 'GETTING GPS LOCATION'
        }
    }
    componentWillUnmount(){
        this.props.unmountSearch()
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
        (position) => {
            this.props.getUserAddress(position.coords)
        },
        (error) => this.setState({ address: error.message }),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }

    componentWillReceiveProps(newProps){
        if(newProps.gpsAddress && this.state.address === 'GETTING GPS LOCATION'){
            this.setState({address: newProps.gpsAddress})
            console.log({address: newProps.gpsAddress})
        }
    }

    render() {
        console.log('address',this.state.address)
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <View style={{flex:0.5,alignItems:'flex-end',paddingTop:20}}>
                    {Platform.OS === 'ios' ? 
                    <Button
                    title="Next"
                    onPress = {()=>{
                        this.props.unmountSearch();
                        Actions.signupHotelDetail({address:this.state.address,addressName:''})
                    }}
                    /> :
                    <TouchableOpacity onPress = {()=>{
                        this.props.unmountSearch();
                        Actions.signupHotelDetail({address:'',addressName:''})
                    }} style={{paddingRight:10}}>
                        <Text style={{fontSize:18,color:'#007AFF'}}>Next</Text>
                    </TouchableOpacity>
                    }
                </View>
                <View style={{flex:1,paddingLeft:20,justifyContent:'space-around'}}>
                    {/* <BottomBorder bottomPadding={5}> */}
                        <Item>
                        <Icon
                        name='ios-pin'
                        style={{color:'#007AFF'}}
                        /> 
                        <Input 
                        style={{paddingLeft:25}} 
                        placeholder='Enter your address'
                        value = {this.state.address}
                        onChangeText={text => {
                            this.setState({address: text})
                            if(text.length > 3 ){
                                this.props.addressSearch(text)
                            }  else {
                                this.props.clearSearch()
                            } 
                            }} 
                        />
                        </Item>
                    {/* </BottomBorder> */}
                </View>
                <View style={{flex:8,paddingLeft:20,justifyContent:'space-around',paddingTop:20}}>
                    {this.props.addressResults && this.props.addressResults.length > 0  ? 
                    <View style={{flex:1}}>
                        <BottomBorder>
                            <Text style={{color:'grey'}}>MORE LOCATIONS</Text>
                        </BottomBorder> 
                        <View style={{flex:9.5}}>
                            <ScrollView>
                                <List>
                                    {this.props.addressResults.map(result => 
                                        <ListItem key={this.props.addressResults.indexOf(result)} onPress={()=>{Actions.signupHotelDetail({address:result.address,addressName:result.addressName});this.props.unmountSearch();}}>
                                            <Icon name='ios-pin-outline' style={{color:'grey',paddingRight:10}}/>
                                            <Body>
                                                <Text style={{fontWeight:'bold',fontSize:20}}>{result.addressName}</Text>
                                                <Text note>{result.address}</Text>
                                            </Body>
                                        </ListItem>
                                    )}
                                </List>
                            </ScrollView>
                        </View>
                    </View> : undefined }
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    addressResults: state.get('searchResults'),
    gpsAddress: state.get('gpsAddress')
})

const mapDispatchToProps = dispatch => ({
    addressSearch: query => {
        dispatch(addressSearch(query))
    },
    unmountSearch: () => {
        dispatch({type:'UMOUNT_SEARCH'})
    },
    clearSearch: () => {
        dispatch({type:'CLEAR_SEARCH'})
    },
    getUserAddress: (location) => dispatch(revGeocode(location))
})




export default connect(mapStateToProps,mapDispatchToProps)(SignupLocation);