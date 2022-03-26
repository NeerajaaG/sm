import React, { useState } from 'react'
import { View, Text,Image, TouchableOpacity } from 'react-native'
import colors from '../config/colors'
import {WIDTH, HEIGHT} from '../config/utils'


export default ({item, index, separators}) => {
  
    
   
    return (
        <View style={{
            borderColor: colors.gray,
            borderWidth: 1,
            borderRadius: HEIGHT(10),
            flex: 1,
            paddingVertical: HEIGHT(10),
            paddingHorizontal: WIDTH(10),
            marginTop: HEIGHT(10),alignItems:"center",justifyContent:"center"
        }}
           
        >
            <Text style={{fontSize: WIDTH(23),  marginBottom: HEIGHT(8)}}>{item.original_title}</Text>
            <View style={{alignItems:"center"}}>

            <Text style={{fontSize: WIDTH(23), marginBottom: HEIGHT(10)}}>{item.first_name}</Text>
            <Text style={{fontSize: WIDTH(23), marginBottom: HEIGHT(10)}}>{item.last_name}</Text>
            <Text style={{fontSize: WIDTH(23), marginBottom: HEIGHT(10)}}>{item.email}</Text>

            <Image source={{uri: item.avatar}} style={{width:WIDTH(200),height:WIDTH(200)}}></Image>

            </View>
           
        
        </View>
    )
}