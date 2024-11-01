import { Mangle } from '@/constants/mangle';
import store from 'store2';

const db = store.namespace(Mangle.DB_SPACE).local;

export const persistInStore = <T = string>(key: string, value: T) => {
  db.set(key, value);
  return value;
};

export const getFromStore = <T = string>(key: string, fallback?: T) => {
  return db.get(key, fallback) as T;
};

export const getAllFromStore = () => {
  const urls: TKukuruUrls = [];
  db.each(function (key, value) {
    urls.push({ key, value });

    if (key === 'stopLoop') {
      return false;
    }
  });

  return urls;
};

export const delFromStore = <T = string>(key: string, fallback?: T) => {
  db.remove(key, fallback) as T;

  return getAllFromStore().filter((e) => e.key !== key);
};
