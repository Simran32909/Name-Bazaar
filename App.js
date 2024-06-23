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
import ChangeLangIcon from './src/components/ChangeLangIcon';
import UniqueNamesScreen from './src/screens/UniqueNamesScreen';
import UniqueNamesList from './src/screens/UniqueNamesList';
import ContactNotice from './src/screens/ContactNotice';
import NakstrasScreen from './src/screens/NakstrasScreen';
import DailyUpdates from './src/screens/DailyUpdates';
import RakshiCalculationScreen from './src/screens/RakshiCalculationScreen';
import MottoForEverything from './src/screens/MottoForEverything';
import PetName from './src/screens/PetName';
import MottoScreen from './src/screens/MottoScreen';
import CommonScreen from './src/screens/CommonScreen';
import NickName from './src/screens/NickName';

const Stack = createStackNavigator();

function App() {
  const [lang, setLang] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getVal() {
      const val = await getLanguage();
      if (val != null) setLang(true);
      else setLang(false);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
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
          headerTitle: t('Name Bazaar'),
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#ed7d31'},
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
              options={{headerRight: () => <ChangeLangIcon />}}
            />
            <Stack.Screen
              name={NAVIGATIONS.NAMES_LIST.name}
              component={NamesList}
            />
            <Stack.Screen
              name={NAVIGATIONS.NAMES_MEANING.name}
              component={NameMeaning}
            />
            <Stack.Screen
              name={NAVIGATIONS.UNIQUE_NAMES.name}
              component={UniqueNamesScreen}
              options={{headerRight: () => <ChangeLangIcon />}}
            />
            <Stack.Screen
              name={NAVIGATIONS.UNIQUE_NAMES_LIST.name}
              component={UniqueNamesList}
              options={{headerRight: () => <ChangeLangIcon />}}
            />
            <Stack.Screen
              name={NAVIGATIONS.CONTACT_NOTICE.name}
              component={ContactNotice}
              options={{headerRight: () => <ChangeLangIcon />}}
            />
            <Stack.Screen
              name={NAVIGATIONS.NAKSTRAS_SCREEN.name}
              component={NakstrasScreen}
              options={{headerRight: () => <ChangeLangIcon />}}
            />
            <Stack.Screen
              name={NAVIGATIONS.DAILY_UPDATES.name}
              component={DailyUpdates}
              options={{headerRight: () => <ChangeLangIcon />}}
            />
            <Stack.Screen
              name={NAVIGATIONS.RASHI_CALCULATION.name}
              component={RakshiCalculationScreen}
              options={{headerRight: () => <ChangeLangIcon />}}
            />
            <Stack.Screen
              name={NAVIGATIONS.MOTTO_FOR_EVERYTHING.name}
              component={MottoForEverything}
              options={{headerRight: () => <ChangeLangIcon />}}
            />
            <Stack.Screen
              name={NAVIGATIONS.PET_NAME.name}
              component={PetName}
              options={{headerRight: () => <ChangeLangIcon />}}
            />
            <Stack.Screen
              name={NAVIGATIONS.MOTTO_SCREEN.name}
              component={MottoScreen}
              // options={{headerRight: () => <ChangeLangIcon />}}
            />
            <Stack.Screen
              name={NAVIGATIONS.COMMON_SCREEN.name}
              component={CommonScreen}
              // options={{headerRight: () => <ChangeLangIcon />}}
            />
            <Stack.Screen
              name={NAVIGATIONS.NICK_NAME.name}
              component={NickName}
              options={{headerRight: () => <ChangeLangIcon />}}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
