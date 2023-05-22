import {createStackNavigator} from '@react-navigation/stack';
import NAVIGATIONS from './src/constants/navigationConstants';
import HomeNavigator from './src/navigators/HomeNavigator';
import {NavigationContainer} from '@react-navigation/native';
import AlphabetList from './src/screens/AlphabetList';
import NamesList from './src/screens/NamesList';
import NameMeaning from './src/screens/NameMeaning';
import SelectLanguage from './src/screens/SelectLanguage';
import {useTranslation} from 'react-i18next';
import {useEffect, useState} from 'react';
import {getLanguage} from './src/utils/languageUtils';
import LoadingScreen from './src/screens/LoadingScreen';

const Stack = createStackNavigator();

function App() {
  const [lang, setLang] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getVal() {
      const val = await getLanguage();
      if (val != null) setLang(true);
      else setLang(false);
      setLoading(false);
    }
    getVal();
  }, []);

  // useEffect(() => setLoading(false), [lang]);
  // useEffect(() => console.log(loading), [loading]);

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
        {loading ? (
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen
              name={NAVIGATIONS.LOADING_SCREEN.name}
              component={LoadingScreen}
            />
          </Stack.Group>
        ) : !lang ? (
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen
              name={NAVIGATIONS.LANGUAGE_SELECT.name}
              component={SelectLanguage}
              initialParams={{setLang: setLang, setLoading: setLoading}}
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
