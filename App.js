
 import React from 'react'
 import {
     Platform,
     SafeAreaView,
     StyleSheet,
     ScrollView,
     View,
     Text,
     StatusBar,
     Image,
     ImageBackground,
     Dimensions
 } from 'react-native';
 
 import { NavigationContainer } from '@react-navigation/native'
 import { createStackNavigator } from '@react-navigation/stack';
 import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'
 
 import gstyles from './src/config/styles'
 import { WIDTH, HEIGHT } from './src/config/utils'
 import 'react-native-gesture-handler';

 
 
 import RatingScreen from './src/screens/RatingScreen'

 
 import PlayScreen from './src/screens/PlayScreen'
 import CheckPlayScreen from './src/screens/CheckPlayScreen'

 
 const Stack = createStackNavigator()
 const Tab = createBottomTabNavigator()
 
 
 
 
 const PlayStack = ()=>{
     return (
         <>
                 <Stack.Navigator
                     screenOptions={{
                         headerShown: false
                     }}
                 >
                     <Stack.Screen name='Play' component={PlayScreen} />
                     <Stack.Screen name='CheckPlay' component={CheckPlayScreen} />
                     {/* <Stack.Screen name="QuizReview" component={QuizReviewScreen} /> */}
                 </Stack.Navigator>
         </>
     )
 }
 const Main = () => {
     return (
         <Tab.Navigator
             screenOptions={({ route }) => ({
                 tabBarIcon: ({ focused, color, size }) => {
                     switch (route.name) {
                        
                         case 'TopRating':
                             return (
                                 <Image resizeMode='contain' source={require('./src/assets/Courses.png')} style={gstyles.tabBarIcon}/>
                             )
                         case 'Playing':
                             return (
                                 <Image resizeMode='contain' source={require('./src/assets/stackwhite_new.png')} style={gstyles.tabBarIcon}/>
                             )
                     }
                 },
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
           
             <Tab.Screen name="TopRating" component={RatingScreen} />
             <Tab.Screen name="Playing" component={PlayStack} />
         </Tab.Navigator>
     )
 }
 
 const App = () => {
     return (
        
                 <NavigationContainer>
                     <Stack.Navigator
                         screenOptions={{
                             headerShown: false
                         }}
                     >
                         
                         <Stack.Screen name='main' component={Main} />
                     </Stack.Navigator>
                 </NavigationContainer>
                
     );
 };
 
 export default App;
 