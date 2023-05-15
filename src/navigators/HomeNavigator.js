import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import NAVIGATIONS from '../constants/navigationConstants';
import AlphabetList from '../screens/AlphabetList';
import NamesList from '../screens/NamesList';
import NameMeaning from '../screens/NameMeaning';

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={NAVIGATIONS.HOME.name} component={Home} />
      <Stack.Screen
        name={NAVIGATIONS.ALPHABET_LIST.name}
        component={AlphabetList}
      />
      <Stack.Screen name={NAVIGATIONS.NAMES_LIST.name} component={NamesList} />
      <Stack.Screen
        name={NAVIGATIONS.NAMES_MEANING.name}
        component={NameMeaning}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
