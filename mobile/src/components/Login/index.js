import Login from './login';
import Regis from './regis';
import Routes1 from '../Home/index';
import Chat from '../Chat/chat';
import Feed from '../Home/feed';
import Profile from '../Home/profile';
import Config from '../Config/config';
import EditProfile from '../EditProfile/editprofile'

import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

const Routes = createAppContainer(
  createStackNavigator({
    Login: Login,
    Regis: Regis,
    Routes1: Routes1,
    Chat: Chat,
    Feed: Feed,
    Profile: Profile,
    Config: Config,
    EditProfile: EditProfile
  }),
);

export default Routes;