import {useState, useEffect} from 'react';
import {collection, doc, getDoc, getDocs} from 'firebase/firestore';
import {db} from '../firebase/firebase';
import {useNetInfo} from '@react-native-community/netinfo';

const useFirebaseData = (collectionName, document = '') => {
  const netState = useNetInfo();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (collectionName, document) => {
    try {
      const docRef = doc(db, collectionName, document);
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

  const fetchAllDocuments = async collectionName => {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      let obj = {};
      querySnapshot.forEach((doc, index) => {
        obj = {...obj, [doc.id]: doc.data()};
      });
      // console.log(querySnapshot);
      setData(obj);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);

    if (netState.isConnected) {
      if (document) fetchData(collectionName, document);
      else fetchAllDocuments(collectionName);
    }
  }, [netState.isConnected, collectionName, document]);

  return {data, loading, error, netState};
};

export default useFirebaseData;
