import React, { useState, useEffect} from 'react'
import { View, RefreshControl, StatusBar, TouchableOpacity, Image, Text, FlatList } from 'react-native'
import colors from '../config/colors'
import gstyles from '../config/styles'

import { WIDTH, HEIGHT } from '../config/utils'

import {getMyProfile} from '../config/api'

import RateCell from './RateCell'
import FullButton from './FullButton'

import AsyncStorage from '@react-native-async-storage/async-storage'

export default ({navigation}) => {
    const [list, setList] = useState({list:'', refreshing: false})
   

   
   
    const handleActivity = async(item) => {
      

                navigation.push('CheckDeck', {item})
            

        
        
    }
    const handleLogin = async() => {
        console.log("logout");
        const value = await AsyncStorage.getItem('@Token');

        console.log("&&&&&&",value);
        if(value){
            await AsyncStorage.removeItem('@Token');

        }
           
        
        navigation.push('signin')

    }

    useEffect(() => {
        loadActivities()
    }, [])
    
    const loadActivities = async () => {
        setList({
            list: '',
            refreshing: true
        })
         const response = await getMyProfile()
        console.log("response in deck screen",response.activity);

       
            setList({
                list: response.activity,
                refreshing: false
            })
       

    }
    const handleRefresh = () => {
        
            loadActivities()
        
    }
    console.log("list",list.list);
    return (
        <View style={{flex: 1,
            backgroundColor: "white"}}>
            <StatusBar backgroundColor={colors.primary}/>
            <View style={{marginLeft:'auto'}}>
                    <FullButton
                        title='Logout'
                        // loading={loading}
                        onPress={handleLogin}
                    />
                </View>
           
            <View style={{margin:WIDTH(10)}}>
                <Text style={{fontSize:WIDTH(28,)}}>Email: {list.list.email}</Text>
                <Text style={{fontSize:WIDTH(28,)}}>First Name: {list.list.first_name}</Text>
                <Text style={{fontSize:WIDTH(28,)}}>Last Name: {list.list.last_name}</Text>
                <Text style={{fontSize:WIDTH(28,)}}>Id: {list.list.id}</Text>
                <Image source={{uri: list.list.avatar}} style={{width:WIDTH(200),height:WIDTH(200)}}></Image>



            </View>
          
        </View>
    )
}