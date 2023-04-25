import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import NAVIGATIONS from '../constants/navigationConstants';
import Test from '../screens/Test';

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={NAVIGATIONS.HOME.name} component={Home} />
      <Stack.Screen name="test" component={Test} />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

export default HomeNavigator;
