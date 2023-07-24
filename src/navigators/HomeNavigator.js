import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import NAVIGATIONS from '../constants/navigationConstants';
import SubscriptionDetails from '../screens/SubscriptionDetails';
import DirectContact from '../screens/DirectContact';
import {useTranslation} from 'react-i18next';
import ChangeLangIcon from '../components/ChangeLangIcon';
import CustomDrawerContent from '../components/CustomDrawerContent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();

function HomeNavigator() {
  const {t, i18n} = useTranslation();

  return (
    <Drawer.Navigator
      initialRouteName={NAVIGATIONS.HOME.name}
      drawerContent={CustomDrawerContent}
      screenOptions={{
        headerTitle: t('Name Bazaar'),
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#2196F3'},
        headerTitleStyle: {
          fontStyle: 'italic',
        },
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: '#2196F3',
        drawerStyle: {paddingTop: 20},
        headerRight: () => <ChangeLangIcon />,

        // swipeEnabled: true,
      }}>
      <Drawer.Screen
        name={NAVIGATIONS.HOME.name}
        component={Home}
        options={{
          drawerLabel: t('Home'),
          drawerIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={NAVIGATIONS.SUBSCRIPTION_DETIALS.name}
        component={SubscriptionDetails}
        options={{
          drawerLabel: t('Information'),
          drawerIcon: ({color, size}) => (
            <Ionicons
              name="information-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={NAVIGATIONS.DIRECT_CONTACT.name}
        component={DirectContact}
        options={{
          drawerLabel: t('Direct Contact'),
          drawerIcon: ({color, size}) => (
            <SimpleLineIcons name="phone" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default HomeNavigator;
