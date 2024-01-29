import React, {useState, useEffect} from 'react';
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../firebase/firebase';
import {SELECTIONS} from '../constants/consts';
import {LANGUAGES} from '../constants/consts';
import {useTranslation} from 'react-i18next';
import {useNetInfo} from '@react-native-community/netinfo';

const useFirebaseData = (collection, document) => {
  const netState = useNetInfo();
  const {t, i18n} = useTranslation();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const curLanguage = i18n.language;
  let language =
    curLanguage == LANGUAGES.ENGLISH.key
      ? LANGUAGES.ENGLISH.label
      : LANGUAGES.HINDI.label;

  const fetchData = async (collection, document) => {
    try {
      const docRef = doc(db, collection, document);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) setData(docSnap.data());
      else console.log('No such document!');

      setLoading(false);
    } catch (error) {
      // console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);

    if (netState.isConnected) {
      // console.log('line 67:', netState.isConnected);
      // if (isStaticData) {
      //   fetchStaticData(selection);
      // } else if (!isUnique) {
      //   if (selection == SELECTIONS.BOY) fetchData('boys');
      //   else if (selection == SELECTIONS.GIRL) fetchData('girls');
      // } else {
      //   if (selection == SELECTIONS.BOY) fetchUniqueData('boys');
      //   else if (selection == SELECTIONS.GIRL) fetchUniqueData('girls');
      // }
      fetchData(collection, document);
    }
  }, [netState.isConnected, collection, document]);

  // const fetchData = async collection => {
  //   try {
  //     const docRef = doc(db, collection, language);
  //     const docSnap = await getDoc(docRef);

  //     if (docSnap.exists()) setData(docSnap.data());
  //     else console.log('No such document!');

  //     setLoading(false);
  //   } catch (error) {
  //     // console.log(error);
  //     setError(error);
  //     setLoading(false);
  //   }
  // };

  // const fetchUniqueData = async document => {
  //   try {
  //     const docRef = doc(db, 'unique names', document);
  //     const docSnap = await getDoc(docRef);

  //     if (docSnap.exists()) setData(docSnap.data()[language]);
  //     else console.log('No such document!');

  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setError(error);
  //     setLoading(false);
  //   }
  // };

  // const fetchStaticData = async document => {
  //   try {
  //     const docRef = doc(db, 'data', document);
  //     const docSnap = await getDoc(docRef);

  //     if (docSnap.exists()) setData(docSnap.data());
  //     else console.log('No such document!');

  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setError(error);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  // useEffect(() => {
  //   setLoading(true);

  //   if (netState.isConnected) {
  //     // console.log('line 67:', netState.isConnected);
  //     if (isStaticData) {
  //       fetchStaticData(selection);
  //     } else if (!isUnique) {
  //       if (selection == SELECTIONS.BOY) fetchData('boys');
  //       else if (selection == SELECTIONS.GIRL) fetchData('girls');
  //     } else {
  //       if (selection == SELECTIONS.BOY) fetchUniqueData('boys');
  //       else if (selection == SELECTIONS.GIRL) fetchUniqueData('girls');
  //     }
  //   }
  // }, [selection, language, netState.isConnected]);

  return {data, loading, error, netState};
};

export default useFirebaseData;
