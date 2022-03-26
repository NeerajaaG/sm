import {View, SafeAreaView, StatusBar, Image, Text, StyleSheet,Alert , TouchableOpacity}  from 'react-native'
import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Toast from 'react-native-toast-message'
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../config/colors'
import gstyles from '../config/styles'
import {HEIGHT, WIDTH} from '../config/utils'
import {Input, CheckBox, Button } from 'react-native-elements'

// import {signIn} from '../redux/actions'
import FullButton from './FullButton'
import {Reg} from '../redux/actions'
import {reg} from '../config/api'

export default ({navigation}) => {
    // console.log("signin screen",useSelector(state => state.userReducer));
    // const [rememberMe, setRememberMe] = useState(false)
    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')
    const [hidePass, setHidePass] = useState(true);
   
    const dispatch = useDispatch()

    const handleReg = async() => {
        // navigation.replace('main')

        if (email == '') {
            Alert.alert(
                "Error",
                "Enter an email",
                [
                  {
                    text: "Cancel",
                    style: "cancel"
                  },
                  { text: "OK",  }
                ]
              );
            
        }

        if( password === ''){
            Alert.alert(
                "Error",
                "Enter password",
                [
                  {
                    text: "Cancel",
                    style: "cancel"
                  },
                  { text: "OK",  }
                ]
              );

        }
        else{
            const response = await reg(email,password)
            console.log("respo. from reg",response);
            if(response.error == "Note: Only defined users succeed registration"){
                Alert.alert(
                    "Error",
                    "Note: Only defined users succeed registration",
                    [
                      {
                        text: "Cancel",
                        // onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                      },
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                  );
            }
            else{
                    Alert.alert(
                        "Success",
                        "You are registered",
                        [
                          {
                            text: "Cancel",
                            // onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                          },
                          { text: "OK", onPress: () => navigation.replace('main') }
                        ]
                      );
                
            }
    
        }
       

    }
    const goLogin = () => {
        navigation.push('signin')
    }
    
    useEffect(()=>{
       
    }, [])
    return (
        <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text style={gstyles.title}>Register</Text>
                <Input placeholder='Email'
                    placeholderTextColor='black'
                    inputContainerStyle={{marginTop: HEIGHT(30), marginHorizontal: WIDTH(40)}}
                    inputStyle={gstyles.input}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    value={email}
                    onChangeText={email=>setEmail(email)}
                />
                <View style={{flexDirection:'row'}}>
                <View style={{width:'99%'}}>
                <Input placeholder='Password'
                    placeholderTextColor='black'
                    secureTextEntry={hidePass ? true : false}
                    inputStyle={gstyles.input}
                    inputContainerStyle={{marginHorizontal: WIDTH(40)}}
                    value={password}
                    onChangeText={password=>setPassword(password)}
                />
                </View>
                <View style={{width:'1%'}}>
                <Icon
              name={hidePass ? 'eye-slash' : 'eye'}
              size={25}
              color="black"
              onPress={() => setHidePass(!hidePass)}
              style={{marginLeft:-50,marginTop:7}}
            />
                </View>
                </View>
                
               
              
                <View style={{marginTop: HEIGHT(60)}}>
                    <FullButton
                        title='Register'
                        onPress={handleReg}
                    />
                </View>
                <TouchableOpacity
                    style={{marginTop: HEIGHT(30), paddingRight: WIDTH(40),flexDirection:"row",flex:1,marginLeft:'auto' }}
                    onPress={goLogin}
                >
                    <Text style={{fontSize: WIDTH(23), lineHeight: HEIGHT(25), color: 'Black'}}>Do you want to SignIn ?</Text>

                </TouchableOpacity>
        </SafeAreaView>
    )
}

