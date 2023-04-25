import {createDrawerNavigator} from '@react-navigation/drawer';
import NAVIGATIONS from './src/constants/navigationConstants';
import SubscriptionDetails from './src/screens/SubscriptionDetails';
import DirectContact from './src/screens/DirectContact';
import PrivacyPolicy from './src/screens/PrivacyPolicy';
import HomeNavigator from './src/navigators/HomeNavigator';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={NAVIGATIONS.HOME_NAVIGATOR.name}>
        <Drawer.Screen
          name={NAVIGATIONS.HOME_NAVIGATOR.name}
          component={HomeNavigator}
          options={{drawerLabel: 'Home'}}
        />
        <Drawer.Screen
          name={NAVIGATIONS.SUBSCRIPTION_DETIALS.name}
          component={SubscriptionDetails}
          // options={{ drawerLabel: 'Updates' }}
        />
        <Drawer.Screen
          name={NAVIGATIONS.DIRECT_CONTACT.name}
          component={DirectContact}
          // options={{ drawerLabel: 'Profile' }}
        />
        <Drawer.Screen
          name={NAVIGATIONS.PRIVACY_POLICY.name}
          component={PrivacyPolicy}
          // options={{ drawerLabel: 'Profile' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
