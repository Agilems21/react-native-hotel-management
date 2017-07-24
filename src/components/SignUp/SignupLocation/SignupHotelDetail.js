import React, { Component } from 'react';
import {View,Button,TouchableOpacity,TextInput} from 'react-native'
import {List,ListItem,Text} from 'native-base'
import {Actions} from 'react-native-router-flux'
import ModalSelect from './ModalSelect'
import {connect} from 'react-redux';

class SignupHotelDetail extends Component {
    constructor(props){
        super(props)
        this.state = {address:this.props.address,addressName:this.props.addressName,isCountryModalVisible: false,
                      selectedCountry:116,selectedCurrency:103, isTimezoneModalVisible:false,selectedTimezone:19};
    }

    _showCountryModal = () => this.setState({ isCountryModalVisible: true })

    _hideCountryModal = () => this.setState({ isCountryModalVisible: false })

    selectCountry = (countryIndex) => {this.setState({selectedCountry: countryIndex}); this._hideCountryModal()}

    _showCurrencyModal = () => this.setState({ isCurrencyModalVisible: true })

    _hideCurrencyModal = () => this.setState({ isCurrencyModalVisible: false })

    selectCurrency = (currencyIndex) => {this.setState({selectedCurrency: currencyIndex}); this._hideCurrencyModal()}

    _showTimezoneModal = () => this.setState({ isTimezoneModalVisible: true })

    _hideTimezoneModal = () => this.setState({ isTimezoneModalVisible: false })

    selectTimezone = (zoneIndex) => {this.setState({selectedTimezone: zoneIndex}); this._hideTimezoneModal()}

    render() {
        
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <View style={{flex:0.5,justifyContent:'space-between',paddingTop:20,flexDirection:'row'}}>
                    <Button title="Back" onPress={()=>Actions.pop()} />
                    <Button title="Next" onPress={()=>{
                        this.props.collectLocation(this.state.addressName,
                                                   this.state.address,
                                                   country_list[this.state.selectedCountry],
                                                   currencyCodes[this.state.selectedCurrency],
                                                   timeZones[this.state.selectedTimezone]);
                        Actions.signupFloor()
                        }} 
                        disabled={this.state.address.length < 1 || this.state.addressName.length < 1}/>
                </View>
                <View style={{flex:9.5,justifyContent:'flex-start',paddingLeft:10,paddingTop:30}}>
                    <View style={{borderColor:'lightgrey',borderBottomWidth:0.5,flexDirection:'row',justifyContent:'flex-start',paddingBottom:10}}>
                        <TextInput 
                        style={{paddingLeft:10,flex:1,fontSize:18}} 
                        placeholder='Address Name'
                        onChangeText={text =>this.setState({addressName:text})}
                        value={this.state.addressName}
                        />
                    </View>
                    <View style={{borderColor:'lightgrey',borderBottomWidth:0.5,flexDirection:'row',justifyContent:'flex-start',paddingBottom:10,paddingTop:10}}>
                        <TextInput 
                        ref='address'
                        multiline={true}
                        style={{paddingLeft:10,flex: 1,fontSize:18}} 
                        placeholder='Address'
                        onChangeText={text =>this.setState({address:text})}
                        value={this.state.address}
                        />
                    </View>
                    <ModalSelect isVisible={this.state.isCountryModalVisible} modalData={country_list}
                                listAction={this.selectCountry} selectedItem={this.state.selectedCountry}
                                hide={this._hideCountryModal} show={this._showCountryModal}                         
                    />

                    <ModalSelect isVisible={this.state.isCurrencyModalVisible} modalData={currencyCodes}
                                listAction={this.selectCurrency} selectedItem={this.state.selectedCurrency}
                                hide={this._hideCurrencyModal} show={this._showCurrencyModal}                        
                    />

                    <ModalSelect isVisible={this.state.isTimezoneModalVisible} modalData={timeZones}
                                listAction={this.selectTimezone} selectedItem={this.state.selectedTimezone}
                                hide={this._hideTimezoneModal} show={this._showTimezoneModal}                        
                    />
                    
                </View>
            </View>
        )
    }
}

var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
		,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
		,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
		,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
		,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
		,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
		,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
		,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
		,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
		,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
		,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
		,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
		,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
		,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)"
        ,"Yemen","Zambia","Zimbabwe"];

var currencyCodes = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYR", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTL", "LVL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "USS", "UYI", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XFU", "XOF", "XPD", "XPF", "XPT", "XTS", "XXX", "YER", "ZAR", "ZMW"];

var timeZones = ['UTC-12 hours','UTC-11 hours','UTC-10 hours','UTC-9 hours','UTC-8 hours','UTC-7 hours','UTC-6 hours','UTC-5 hours','UTC-4 hours','UTC-3 hours','UTC-2 hours','UTC+0 hours','UTC+1 hours','UTC+2 hours','UTC+3 hours','UTC+4 hours','UTC+5 hours','UTC+6 hours','UTC+7 hours','UTC+8 hours','UTC+9 hours','UTC+10 hours','UTC+11 hours','UTC+12 hours','UTC+13 hours','UTC+14 hours']

const mapDispatchToProps = dispatch => ({
    collectLocation: (hotelName, address, country, currencyCode, timeZone) => {
    dispatch({type:'COLLECT_LOCATION' , location:{hotelName,address,country,currencyCode,timeZone}})
    }
})

export default connect(null,mapDispatchToProps)(SignupHotelDetail)