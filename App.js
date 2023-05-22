import {createStackNavigator} from '@react-navigation/stack';
import NAVIGATIONS from './src/constants/navigationConstants';
import HomeNavigator from './src/navigators/HomeNavigator';
import {NavigationContainer} from '@react-navigation/native';
import AlphabetList from './src/screens/AlphabetList';
import NamesList from './src/screens/NamesList';
import NameMeaning from './src/screens/NameMeaning';
import SelectLanguage from './src/screens/SelectLanguage';
import {useTranslation} from 'react-i18next';

const Stack = createStackNavigator();

function App() {
  // TODO: use i8next with async storage
  // OR
  // define a state in app.js and send the setter fxn to SelectLanguage screen
  // mke sure to update the state to lang stored in async storage because state
  // loses it value after every render
  // FIXME: how will the language change when I select the language
  // check if i8next has a function to
  // 1) see current language
  // 2) change current language
  // const getLang = async () => {
  //   const data = await getLanguage();
  //   console.log('data:', data);
  //   return data;
  // };
  const {t} = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={NAVIGATIONS.HOME_NAVIGATOR.name}
        screenOptions={{
          headerTitle: t('Naam Bazaar'),
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#2196F3'},
          headerTitleStyle: {
            fontStyle: 'italic',
          },
        }}>
        {!true ? (
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen
              name={NAVIGATIONS.LANGUAGE_SELECT.name}
              component={SelectLanguage}
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
