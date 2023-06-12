import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import NAVIGATIONS from '../constants/navigationConstants';
import SubscriptionDetails from '../screens/SubscriptionDetails';
import DirectContact from '../screens/DirectContact';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import {useTranslation} from 'react-i18next';
import ChangeLangIcon from '../components/ChangeLangIcon';

const Drawer = createDrawerNavigator();

function HomeNavigator() {
  const {t, i18n} = useTranslation();

  return (
    <Drawer.Navigator
      initialRouteName={NAVIGATIONS.HOME.name}
      screenOptions={{
        headerTitle: t('Naam Bazaar'),
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#2196F3'},
        headerTitleStyle: {
          fontStyle: 'italic',
        },
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: '#2196F3',
        headerRight: () => <ChangeLangIcon />,
        // swipeEnabled: true,
      }}>
      <Drawer.Screen
        name={NAVIGATIONS.HOME.name}
        component={Home}
        options={{drawerLabel: t('Home')}}
      />
      <Drawer.Screen
        name={NAVIGATIONS.SUBSCRIPTION_DETIALS.name}
        component={SubscriptionDetails}
        options={{drawerLabel: t('Subscription Details')}}
      />
      <Drawer.Screen
        name={NAVIGATIONS.DIRECT_CONTACT.name}
        component={DirectContact}
        options={{drawerLabel: t('Direct Contact')}}
      />
      <Drawer.Screen
        name={NAVIGATIONS.PRIVACY_POLICY.name}
        component={PrivacyPolicy}
        options={{drawerLabel: t('Privacy Policy')}}
      />
    </Drawer.Navigator>
  );
}

export default HomeNavigator;
