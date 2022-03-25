import {View, SafeAreaView, StatusBar, Image, Text, StyleSheet, TouchableOpacity}  from 'react-native'
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

export default ({navigation}) => {
    // console.log("signin screen",useSelector(state => state.userReducer));
    // const [rememberMe, setRememberMe] = useState(false)
    const [email, setEmail] = useState(useSelector(state => state.userReducer.email))
    const [rememberMe, setRememberMe] = useState(useSelector(state => state.userReducer.rememberMe))

    const [password, setPassword] = useState(useSelector(state => state.userReducer.password))
    const [hidePass, setHidePass] = useState(true);
    const loading = useSelector(state => state.loginReducer.loading)
    const message = useSelector(state => state.loginReducer.message)
    const userInfo = useSelector(state=>state.userReducer.userInfo)
    const dispatch = useDispatch()
    const handleLogin = () => {
        console.log("login",rememberMe);
        // navigation.replace('main')
        // dispatch(signIn({email, password, rememberMe}))
    }
    const goForgotPassScreen = () => {
        navigation.push('signin')
    }
    useEffect(()=>{
        if (message) {
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'login error',
                text2: message
            })
        }
    }, [message])
    useEffect(()=>{
        if (userInfo) {
            navigation.replace('main')
        }
    }, [userInfo])
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
                        loading={loading}
                        onPress={handleLogin}
                    />
                </View>
                <TouchableOpacity
                    style={{marginTop: HEIGHT(30), paddingRight: WIDTH(40),flexDirection:"row",flex:1,marginLeft:'auto' }}
                    onPress={goForgotPassScreen}
                >
                    <Text style={{fontSize: WIDTH(23), lineHeight: HEIGHT(25), color: 'Black'}}>Do you want to SignIn ?</Text>

                </TouchableOpacity>
        </SafeAreaView>
    )
}

