import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import NAVIGATIONS from '../constants/navigationConstants';
import SubscriptionDetails from '../screens/SubscriptionDetails';
import DirectContact from '../screens/DirectContact';
import PrivacyPolicy from '../screens/PrivacyPolicy';

const Drawer = createDrawerNavigator();

function HomeNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName={NAVIGATIONS.HOME.name}
      screenOptions={{
        headerTitle: 'Naam Bazaar',
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#2196F3'},
        headerTitleStyle: {
          fontStyle: 'italic',
        },
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: '#2196F3',
        // swipeEnabled: true,
      }}>
      <Drawer.Screen
        name={NAVIGATIONS.HOME.name}
        component={Home}
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
  );
}

export default HomeNavigator;
