import { database } from './appConfig';
import { useEffect, useState } from 'react';
import { ref, update, onValue, off } from 'firebase/database';

export const useDatabase = (path) => {
  const dbRef = path != null ? ref(database, path) : null;
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(null);

  const updateValue = (val) => {
    if (path != null) {
      const oldValue = value;
      setValue(val);

      return update(dbRef, val).catch((error) => {
        setValue(oldValue);
        console.error(error);
      });
    } else {
      return Promise.resolve();
    }
  };

  useEffect(() => {
    if (path != null) {
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        setValue(data);
        setLoading(false);
      });
    }
    return () => {
      if (path != null) {
        off(dbRef);
      }
    };
  }, [path, dbRef]);

  return [loading, value, updateValue];
};
