import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/components/Login/login';
import Signup from './src/components//Signup/Signup'
import HomeRoute from './src/components/Home/routes'
import Chat from './src/components/Chat/chat';
import Feed from './src/components/Home/feed';
import Profile from './src/components/Profile/profile';
import Config from './src/components/Config/config';
import EditProfile from './src/components/EditProfile/editprofile'



/* const RootStack = createStackNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup },
  RouterBase: { screen : RouterBase },
  Chat: { screen : Chat },
  Feed: { screen : Feed },
  Profile: { screen : Profile },
  Config: { screen : Config },
  EditProfile: { screen : EditProfile }
},
RouterBase.navigationOptions = {
  headerShown: false,
  swipeEnabled: true,
  onSwipeStart: 'Profile',
  onSwipeEnd: 'Feed',
}); */


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="HomeRoute" component={HomeRoute} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Config} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

   

/* export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}
 */
