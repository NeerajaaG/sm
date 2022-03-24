import React, { useState } from 'react'
import { View, Text,Image, TouchableOpacity } from 'react-native'
// import gstyles from './config/styles'
import gstyles from '../config/styles'
import colors from '../config/colors'
import {WIDTH, HEIGHT} from '../config/utils'


export default ({item, index, separators, onPress}) => {
  
    
   
    return (
        <TouchableOpacity style={{
            borderColor: colors.gray,
            borderWidth: 1,
            borderRadius: HEIGHT(10),
            flex: 1,
            paddingVertical: HEIGHT(10),
            paddingHorizontal: WIDTH(18),
            marginTop: HEIGHT(18),alignItems:"center",justifyContent:"center"
        }}
            // onPress={()=>onPress(item)}
        >
            <Text style={{fontSize: WIDTH(23),  marginBottom: HEIGHT(8)}}>{item.original_title}</Text>
            <View style={{alignItems:"center"}}>
                <Image resizeMode='contain' 
                source={{ uri: "https://static.toiimg.com/thumb/45296934/26143783-1.jpg?width=1200&height=900" }}
                style={{width:300,height:150}}/>
                            <Text style={{fontSize: WIDTH(23), marginBottom: HEIGHT(10)}}>{item.overview}</Text>


            </View>
           
        
        </TouchableOpacity>
    )
}