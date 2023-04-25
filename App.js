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
      <Drawer.Navigator
        initialRouteName={NAVIGATIONS.HOME_NAVIGATOR.name}
        screenOptions={{
          headerTitle: 'Naam Bazaar',
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#2196F3'},
          headerTitleStyle: {
            // color: 'white',
            // backgroundColor: '#2196F3',
            // paddingHorizontal: 15,
            // paddingVertical: 10,
            // borderRadius: 8,
            fontStyle: 'italic',
          },
          drawerActiveTintColor: 'white',
          drawerActiveBackgroundColor: '#2196F3',
          // swipeEnabled: true,
        }}>
        <Drawer.Screen
          name={NAVIGATIONS.HOME_NAVIGATOR.name}
          component={HomeNavigator}
          options={{drawerLabel: 'Home'}}
        />
        <Drawer.Screen
          name={NAVIGATIONS.SUBSCRIPTION_DETIALS.name}
          component={SubscriptionDetails}
          options={{drawerLabel: 'Subscription Details'}}
        />
        <Drawer.Screen
          name={NAVIGATIONS.DIRECT_CONTACT.name}
          component={DirectContact}
          options={{drawerLabel: 'Direct Contact'}}
        />
        <Drawer.Screen
          name={NAVIGATIONS.PRIVACY_POLICY.name}
          component={PrivacyPolicy}
          options={{drawerLabel: 'Privacy Policy'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
