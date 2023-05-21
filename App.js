import {createStackNavigator} from '@react-navigation/stack';
import NAVIGATIONS from './src/constants/navigationConstants';
import HomeNavigator from './src/navigators/HomeNavigator';
import {NavigationContainer} from '@react-navigation/native';
import AlphabetList from './src/screens/AlphabetList';
import NamesList from './src/screens/NamesList';
import NameMeaning from './src/screens/NameMeaning';
import SelectLanguage from './src/screens/SelectLanguage';

const Stack = createStackNavigator();

function App() {
  const selectedLanguage = false;
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={NAVIGATIONS.HOME_NAVIGATOR.name}
        screenOptions={{
          headerTitle: 'Naam Bazaar',
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#2196F3'},
          headerTitleStyle: {
            fontStyle: 'italic',
          },
        }}>
        {!selectedLanguage ? (
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen
              name={NAVIGATIONS.LANGUAGE_SELECT.name}
              component={SelectLanguage}
              options={{headerShown: false}}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              name={NAVIGATIONS.HOME_NAVIGATOR.name}
              component={HomeNavigator}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={NAVIGATIONS.ALPHABET_LIST.name}
              component={AlphabetList}
            />
            <Stack.Screen
              name={NAVIGATIONS.NAMES_LIST.name}
              component={NamesList}
            />
            <Stack.Screen
              name={NAVIGATIONS.NAMES_MEANING.name}
              component={NameMeaning}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
