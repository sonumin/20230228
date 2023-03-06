import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View,Text,Button } from 'react-native';
import DetailScreen from './DetailScreen';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import EditUserScreen from './EditUserScreen';
import LoginScreen from './LoginScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SignInScreen from './SignInScreen';
import FirstsetScreen from './FirstsetScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
Ionicons.loadFont()

const TabStack = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const SettingStack = createStackNavigator();
const AppStack = createStackNavigator();
const LoginStack = createStackNavigator();
const HomeName="메인화면"
const DetailName="사진"
const SettingName="내정보"
const LoginName="로그인"
// const [islogin,setIslogin] = useState(false);
const HomeStackScreen=()=>{
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={HomeScreen} options={{headerShown:true}}/>
        </HomeStack.Navigator>
    )
}

const DetailStackScreen=()=>{
    return(
        <DetailStack.Navigator>
            <DetailStack.Screen name='Detail' component={DetailScreen} options={{headerShown:true,
             headerRight: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="#fff"
                />
              ),
            }}/>
        </DetailStack.Navigator>
    )
}
const SettingStackScreen=()=>{
    return(
        <SettingStack.Navigator>
            <SettingStack.Screen name='Setting' component={SettingScreen} options={{headerShown:true}}/>
            <SettingStack.Screen name='Send' component={EditUserScreen} options={{headerShown:true}}/>
        </SettingStack.Navigator>
    )
}
const LoginStackScreen=()=>{
    return(
        <LoginStack.Navigator>
            <LoginStack.Screen name='Login' component={LoginScreen} options={{headerShown:true}}/>
            <LoginStack.Screen name='SignIn' component={SignInScreen} options={{headerShown:true}}/>
            <LoginStack.Screen name='Firstset' component={FirstsetScreen} options={{headerShown:true}}/>
        </LoginStack.Navigator>
    )
}

const TabStackScreen = () =>{
    return(
        <TabStack.Navigator
            inintailRouteName={HomeName}
            screenOptions={({route})=>({
                tabBarIcon: ({focused,color,size})=>{
                    let iconName;
                    let rn = route.name;

                    if(rn==HomeName){
                        iconName = focused ? 'home' : 'home-outline';
                    }else if(rn ==DetailName){
                        iconName = focused ? 'camera' : 'camera-outline';
                    }else if(rn ==SettingName){
                        iconName = focused ? 'happy' : 'happy-outline';
                    }

        return <Ionicons name ={iconName} size = {size} color= {color}/>
                },
            })}
            tabBarOptions={{
                activeTintColor:'black',
                inactiveTintColor:'grey',
            }}
        >
            <TabStack.Screen name={HomeName} component = {HomeStackScreen} />
            <TabStack.Screen name ={DetailName} component = {DetailStackScreen} />
            <TabStack.Screen name ={SettingName} component = {SettingStackScreen}/> 
        </TabStack.Navigator>
    
    
    
    );
}
    const AppStackScreen = () => {
        const [isSignin,setIssignin] = useState(false);
        // AsyncStorage.getItem('login', (err, result) => {
        //     console.log(JSON.parse(result)); // User1 출력
        //     setIssignin(JSON.parse(result))
        //   });
        return(
            <AppStack.Navigator>
                <AppStack.Screen name={'Log'} component={LoginStackScreen} options={{headerShown:false}}/>
                <AppStack.Screen name={'Main'} component={TabStackScreen} options={{headerShown:false}}/>
            </AppStack.Navigator>
        );
    }

export default AppStackScreen;