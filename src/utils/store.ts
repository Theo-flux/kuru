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

export const delFromStore = <T = string>(key: string, fallback?: T) => {
  return db.remove(key, fallback) as T;
};

export const getAllFromStore = () => {
  return db.getAll();
};
