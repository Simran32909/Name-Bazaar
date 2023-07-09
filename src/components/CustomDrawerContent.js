import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useTranslation} from 'react-i18next';

export default function CustomDrawerContent(props) {
  const {t} = useTranslation();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label={t('Rate Our App')}
        // onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
      <DrawerItem label={t('Share App')} />
    </DrawerContentScrollView>
  );
}
