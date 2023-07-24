import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useTranslation} from 'react-i18next';
import {Linking, Share} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomDrawerContent(props) {
  const {t} = useTranslation();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label={t('Privacy Policy')}
        icon={({size, color}) => (
          <MaterialCommunityIcons
            name="account-lock-outline"
            color={color}
            size={size}
          />
        )}
        onPress={() =>
          Linking.openURL(
            'https://www.freeprivacypolicy.com/live/57fa6d16-cbb9-45fd-998d-8ae4ba3a392a',
          )
        }
      />
      <DrawerItem
        label={t('Rate Our App')}
        icon={({size, color}) => (
          <SimpleLineIcons name="star" color={color} size={size} />
        )}
        onPress={() => Linking.openURL('market://details?id=com.name_bazaar')}
      />
      <DrawerItem
        label={t('Share App')}
        icon={({size, color}) => (
          <SimpleLineIcons name="share" color={color} size={size} />
        )}
        onPress={() =>
          Share.share({
            message: `${t(
              'share msg',
            )}\n ${'https://play.google.com/store/apps/details?id=com.name_bazaar'}`,
          })
        }
      />
    </DrawerContentScrollView>
  );
}
