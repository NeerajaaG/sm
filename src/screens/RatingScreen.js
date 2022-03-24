import React, { useState, useEffect} from 'react'
import { View, RefreshControl, StatusBar, TouchableOpacity, Image, Text, FlatList } from 'react-native'
import colors from '../config/colors'
import gstyles from '../config/styles'

import { WIDTH, HEIGHT } from '../config/utils'

import {getAllRating} from '../config/api'

import RateCell from './RateCell'

export default ({navigation}) => {
    const [list, setList] = useState({list:[], refreshing: false})
   

   
   
    const handleActivity = async(item) => {
      

                navigation.push('CheckDeck', {item})
            

        
        
    }
    useEffect(() => {
        loadActivities()
    }, [])
    
    const loadActivities = async () => {
        setList({
            list: [],
            refreshing: true
        })
         const response = await getAllRating()
        // console.log("response in deck screen",response.list.results);

       
            setList({
                list: response.list.results,
                refreshing: false
            })
       

    }
    const handleRefresh = () => {
        
            loadActivities()
        
    }
    return (
        <View style={{flex: 1,
            backgroundColor: "#C4C4C4"}}>
            <StatusBar backgroundColor={colors.primary}/>
           
            <FlatList
                style={{flex: 1, backgroundColor: 'white', margin: HEIGHT(10), paddingHorizontal: WIDTH(20), borderRadius: HEIGHT(10)}}
                data={list.list}
                
                refreshControl={<RefreshControl refreshing={list.refreshing} colors={[colors.primary]} onRefresh={handleRefresh}/>}
                refreshing={list.refreshing}
                contentContainerStyle={{paddingBottom: HEIGHT(30)}}
                keyExtractor={(item, index) => ''+index}
                renderItem={props=><RateCell {...props} onPress={handleActivity}/>}
            />
             
          
        </View>
    )
}