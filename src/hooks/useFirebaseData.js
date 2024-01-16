import React, {useState, useEffect} from 'react';
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../firebase/firebase';
import {SELECTIONS} from '../constants/consts';
import {LANGUAGES} from '../constants/consts';
import {useTranslation} from 'react-i18next';

const useFirebaseData = selection => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {t, i18n} = useTranslation();

  const curLanguage = i18n.language;
  let language =
    curLanguage == LANGUAGES.ENGLISH.key
      ? LANGUAGES.ENGLISH.label
      : LANGUAGES.HINDI.label;

  const fetchData = async collection => {
    try {
      const docRef = doc(db, collection, language);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) setData(docSnap.data());
      else console.log('No such document!');

      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    if (selection == SELECTIONS.BOY) fetchData('boys');
    else if (selection == SELECTIONS.GIRL) fetchData('girls');
    else if (selection == SELECTIONS.UNIQUE) {
      //TODO:
      console.log('selected unique names');
    }
  }, [selection, language]);

  return {data, loading, error};
};

export default useFirebaseData;
