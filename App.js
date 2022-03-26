
 import React from 'react'
 import {
     Platform,
     SafeAreaView,
     StyleSheet,
     ScrollView,
     View,
     Text,
     
     Image,
     Dimensions
 } from 'react-native';
 
 import { NavigationContainer } from '@react-navigation/native'
 import { createStackNavigator } from '@react-navigation/stack';
 import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'
 
 import gstyles from './src/config/styles'
 import { WIDTH, HEIGHT } from './src/config/utils'
 import 'react-native-gesture-handler';

 import SigninScreen from './src/screens/SigninScreen'

 import Register from './src/screens/Register'

 import ProfileScreen from './src/screens/ProfileScreen'

 
 import AllProfileScreen from './src/screens/AllProfileScreen'

 import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import store, {sagaMiddleware} from './src/redux/store'
import rootSaga from './src/redux/saga'

 
 const Stack = createStackNavigator()
 const Tab = createBottomTabNavigator()
 
 
 
 
 const Main = () => {
     return (
         <Tab.Navigator
             screenOptions={({ route }) => ({
                 
                 tabBarLabel: ({ focused, color }) => {
                     return <Text style={[gstyles.tablabel, {color: focused?'red':'black'}]}>{route.name}</Text>
                 },
             })}
             tabBarOptions={{
                 style: {
                     height: Platform.OS == 'ios'?HEIGHT(120):HEIGHT(90),
                    //  backgroundColor: colors.tabbar,
                 },
                 tabStyle: {
                     borderRightWidth: 1,
                     borderColor: 'gray'
                 },
                 activeTintColor: 'red'
             }}
            
         >
             {/* <Tab.Screen name="Quizzes" component={DashboardStack} /> */}
           
             <Tab.Screen name="Profile" component={ProfileScreen} />
             <Tab.Screen name="AllProfile" component={AllProfileScreen} />
         </Tab.Navigator>
     )
 }
 
 const SigninStack = ()=>{
    return (
        <>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name='signin' component={SigninScreen} />
                    <Stack.Screen name='reg' component={Register} />

                </Stack.Navigator>
        </>
    )
}

 const App = () => {
     return (
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
                 <NavigationContainer>
                     <Stack.Navigator
                         screenOptions={{
                             headerShown: false
                         }}
                     >
                        <Stack.Screen name='signin' component={SigninStack} />

                         <Stack.Screen name='main' component={Main} />
                     </Stack.Navigator>
                 </NavigationContainer>
                 </PersistGate>
        </Provider>
                
     );
 };
 
 export default App;
 