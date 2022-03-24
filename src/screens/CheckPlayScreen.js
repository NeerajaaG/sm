import React,{useState, useEffect, useRef} from 'react'
import { View, StatusBar,TextInput, TouchableOpacity, Image, Text, FlatList, ScrollView,AsyncStorage,Modal } from 'react-native'
import { WIDTH, HEIGHT } from '../config/utils'
import gstyles from '../config/styles'
import colors from '../config/colors'




export default ({route, navigation}) => {
   
    const [loading, setLoading] = useState(true)
   
    const deckData = route.params.item

    
  // const [rotate, setRotate] = React.useState('')

    

      
    
   
     

     
     
        
       
    return (
        <View style={{ flex: 1,}}>
          
          <TouchableOpacity onPress={()=>navigation.pop()}>
              <Image resizeMode='contain' 
              source={{ uri: "https://w7.pngwing.com/pngs/63/444/png-transparent-button-back-return-step-back-arrow-the-direction-of-the.png" }}
              style={{width:40,height:40}}
              />
          </TouchableOpacity>
          
            
          
          

          <View style={{
              borderColor: colors.gray,
              borderWidth: 1,
              borderRadius: HEIGHT(10),
              flex: 1,
              paddingVertical: HEIGHT(10),
              paddingHorizontal: WIDTH(18),
              marginTop: HEIGHT(18),alignItems:"center",justifyContent:"center"
          }}
          >
            <Text style={{fontSize: WIDTH(23),  marginBottom: HEIGHT(8)}}>{deckData.original_title}</Text>
            <View style={{alignItems:"center"}}>
                
                            <Text style={{fontSize: WIDTH(23), marginBottom: HEIGHT(10)}}>{deckData.overview}</Text>


            </View>
           
        
        </View>
        </View>
    )
}


