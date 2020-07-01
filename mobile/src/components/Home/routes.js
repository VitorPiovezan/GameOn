import React from 'react';
import Home from './home';
import Profile from '../Profile/profile';
import Feed from './feed';

import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function HomeRoute() {
    return (
      <Tab.Navigator
            keyboardDismissMode="auto"
            swipeEnabled={true}
            initialRouteName='Home'
            onSwipeStart='Profile'
            onSwipeEnd='Feed'
            tabBarOptions={{
              activeTintColor: 'white',
              showIcon: false,  
              showLabel:true, 
              style: {  
                backgroundColor:'#303030'  
              },
              container: {
                flex: 1,
                backgroundColor: '#454545',
                alignItems: 'center',
                justifyContent: 'center',
              },
              body: {
                backgroundColor: '#454545'
              }
            }}
          >
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Feed" component={Feed} />
          </Tab.Navigator>
  
    )
  } 

export default HomeRoute;
