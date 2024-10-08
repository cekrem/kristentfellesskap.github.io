import { database } from './appConfig';
import { useEffect, useState, useCallback } from 'react';
import { ref, update, onValue, off } from 'firebase/database';

export const useDatabase = (path) => {
  const dbRef = path != null ? ref(database, path) : null;
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(null);

  const updateValue = useCallback(
    (newVal) => {
      if (path != null && JSON.stringify(newVal) !== JSON.stringify(value)) {
        return update(dbRef, newVal).catch((error) => {
          console.error(error);
        });
      } else {
        return Promise.resolve();
      }
    },
    [dbRef, path, value],
  );

  useEffect(() => {
    if (path != null) {
      const onValueChange = (snapshot) => {
        const data = snapshot.val();
        if (JSON.stringify(data) !== JSON.stringify(value)) {
          setValue(data);
          setLoading(false);
        }
      };

      onValue(dbRef, onValueChange);

      return () => {
        off(dbRef, 'value', onValueChange);
      };
    }
  }, [path, dbRef, value]);

  return [loading, value, updateValue];
};
