import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import NAVIGATIONS from '../constants/navigationConstants';
import DirectContact from '../screens/DirectContact';
import {useTranslation} from 'react-i18next';
import ChangeLangIcon from '../components/ChangeLangIcon';
import CustomDrawerContent from '../components/CustomDrawerContent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Information from '../screens/Information';

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
        headerStyle: {backgroundColor: '#ed7d31', height: 60},
        headerTitleStyle: {
          fontStyle: 'italic',
          fontWeight: 'bold',
          fontFamily:'cursive',
          fontSize: 32,
        },
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: '#ed7d31',
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
        name={NAVIGATIONS.INFORMATION.name}
        component={Information}
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
