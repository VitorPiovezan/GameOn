import Login from './login';
import Signup from '../Signup/Signup'
import RouterBase from '../Home/routes';
import Chat from '../Chat/chat';
import Feed from '../Home/feed';
import Profile from '../Profile/profile';
import Config from '../Config/config';
import EditProfile from '../EditProfile/editprofile'


import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createStackNavigator(  
  {  
    Login: Login,
    Signup: Signup,
    RouterBase: RouterBase,
    Chat: Chat,
    Feed: Feed,
    Profile: Profile,
    Config: Config,
    EditProfile: EditProfile
  },


RouterBase.navigationOptions = {
  headerShown: false,
  swipeEnabled: true,
  onSwipeStart: 'Profile',
  onSwipeEnd: 'Feed',
})

export default createAppContainer(Routes);  
