import React, { useState, useEffect} from 'react'
import { View, RefreshControl, StatusBar, TouchableOpacity, Image, Text, FlatList } from 'react-native'
import colors from '../config/colors'
import gstyles from '../config/styles'

import { WIDTH, HEIGHT } from '../config/utils'

import {getAllMovies} from '../config/api'

import DeckCell from './DeckCell'

export default ({navigation}) => {
    const [activities, setActivities] = useState({activities:[], refreshing: false})
   

   
   
    const handleActivity = async(item) => {
      
            // const quizResult = await practiseDeck(userInfo.id,item.id,item.shared)
            // console.log("response Deck api",quizResult);


           
            
                console.log("item Deck api in no ",item);

                navigation.push('CheckPlay', {item})
            

        
        
    }
    useEffect(() => {
        loadActivities()
    }, [])
    
    const loadActivities = async () => {
        setActivities({
            activities: [],
            refreshing: true
        })
         const response = await getAllMovies()
        // console.log("response in deck screen",response.activity.results);

       
            setActivities({
                activities: response.activity.results,
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
                data={activities.activities}
                
                refreshControl={<RefreshControl refreshing={activities.refreshing} colors={[colors.primary]} onRefresh={handleRefresh}/>}
                refreshing={activities.refreshing}
                contentContainerStyle={{paddingBottom: HEIGHT(30)}}
                keyExtractor={(item, index) => ''+index}
                renderItem={props=><DeckCell {...props} onPress={handleActivity}/>}
            />
             
          
        </View>
    )
}