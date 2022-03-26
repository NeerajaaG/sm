import React, { useState, useEffect} from 'react'
import { View, RefreshControl, StatusBar, TouchableOpacity, Image, Text, FlatList } from 'react-native'
import colors from '../config/colors'
import gstyles from '../config/styles'

import { WIDTH, HEIGHT } from '../config/utils'

import {getAllMovies} from '../config/api'

import ProfCell from './ProfCell'
import {getAllProfile} from '../config/api'


export default ({navigation}) => {
    const [activities, setActivities] = useState({activities:[], refreshing: false})
   

    useEffect(() => {
        loadActivities()
    }, [])
    
    const loadActivities = async () => {
        setActivities({
            activities: [],
            refreshing: true
        })
         const response = await getAllProfile()
        console.log("response in getall prof screen",response.activity);

       
            setActivities({
                activities: response.activity,
                refreshing: false
            })
       

    }
    const handleRefresh = () => {
       
            loadActivities()
        
    }
    return (
        <View style={{flex: 1,
            backgroundColor: "white"}}>
           
            <FlatList
                style={{flex: 1, backgroundColor: 'white', margin: HEIGHT(10), paddingHorizontal: WIDTH(20), borderRadius: HEIGHT(10)}}
                data={activities.activities}
                
                refreshControl={<RefreshControl refreshing={activities.refreshing} colors={[colors.primary]} onRefresh={handleRefresh}/>}
                refreshing={activities.refreshing}
                contentContainerStyle={{paddingBottom: HEIGHT(30)}}
                keyExtractor={(item, index) => ''+index}
                // numColumns={2}
                renderItem={props=><ProfCell {...props} />}
            />
             
          
        </View>
    )
}