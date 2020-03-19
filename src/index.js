import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  JobSearch,
  ForgotPasswordMsgScreen,
    HelpScreen,
    ProfileScreen,
    SignUpSuccessScreen,

} from './screens';

const Router = createStackNavigator(
  {
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
    JobSearch,
    ForgotPasswordMsgScreen,
      HelpScreen,
      ProfileScreen,
      SignUpSuccessScreen,
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
