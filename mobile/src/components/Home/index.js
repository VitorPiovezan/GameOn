import Home from './home';
import Profile from './profile';
import Feed from './feed';

import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';


const Routes1 = createAppContainer(
  createMaterialTopTabNavigator(
    {
    Profile: Profile,
    Home: Home,
    Feed: Feed
  },
  
    {
      keyboardDismissMode: 'auto',
      swipeEnabled: true,
      onSwipeStart: 'Profile',
      onSwipeEnd: 'Feed',
      tabBarOptions:{
      activeTintColor: 'yellow',
      inactiveTintColor: 'grey',
      style:{
        backgroundColor:'#303030',
      }
    }
  },
/*   {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const {routeName} = navigation.state;
      let IconComponent = FontAwesome5;
      let IconName;
  
      if(routeName === "Home")
        IconName = 'home';
      else if (routeName === "Profile")
        IconName = 'user-alt';
      else if (routeName === "Chat")
        IconName = 'cog';
  
      return <IconComponent name={IconName}
                            size={24}
                            color={tintColor}
      />
    }
  })
    } */
  ));

Routes1.navigationOptions = {
  header: null,
}

export default Routes1;