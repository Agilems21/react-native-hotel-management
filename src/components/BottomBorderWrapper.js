import {View} from 'react-native'
import React, { Component } from 'react'

const BottomBorder = ({children,bottomPadding,topPadding,leftPadding}) => 
    <View style={{borderColor:'lightgrey',borderBottomWidth:0.5,flexDirection:'row',justifyContent:'flex-start',paddingBottom:bottomPadding || 10,paddingTop:topPadding||0,alignItems:'center',paddingLeft:leftPadding||0}}>
        {children}
    </View>

export default BottomBorder