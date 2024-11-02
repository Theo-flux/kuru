import { describe, it, expect, afterEach, vi } from 'vitest';
import { persistInStore, getFromStore, getAllFromStore, delFromStore, getLongLinkFromId } from '@/utils/store';
import store from 'store2';

// Mock store2
vi.mock(import('store2'), async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
  };
});

describe('Store Functions', () => {
  afterEach(() => {
    // Clear mocks after each test
    vi.clearAllMocks();
  });

  it('should persist a value in the store', () => {
    const key = 'testKey';
    const value = 'testValue';

    const result = persistInStore(key, value);

    expect(result).toBe(value);
    expect(store.local.set).toHaveBeenCalledWith(key, value);
  });

  it('should retrieve a value from the store', () => {
    const key = 'testKey';
    const value = 'testValue';
    store.local.set(key, value); // Set value in the mock store

    const result = getFromStore(key, 'fallbackValue');

    expect(result).toBe(value);
    expect(store.local.get).toHaveBeenCalledWith(key, 'fallbackValue');
  });

  it('should return the fallback value if key does not exist', () => {
    const key = 'nonExistentKey';

    const result = getFromStore(key, 'fallbackValue');

    expect(result).toBe('fallbackValue');
    expect(store.local.get).toHaveBeenCalledWith(key, 'fallbackValue');
  });

  it('should retrieve all values from the store', () => {
    store.local.set('key1', 'value1');
    store.local.set('key2', 'value2');

    const result = getAllFromStore();

    expect(result).toEqual([
      { key: 'key1', value: 'value1' },
      { key: 'key2', value: 'value2' },
    ]);
  });

  it('should delete a key from the store', () => {
    const key = 'testKey';
    const value = 'testValue';
    store.local.set(key, value); // Set value in the mock store

    const result = delFromStore(key);

    expect(result).toEqual([]); // Since it's the only item, the result should be empty now
    expect(store.local.remove).toHaveBeenCalledWith(key);
  });

  it('should retrieve a long link from its ID', () => {
    const id = 'testId';
    const key = 'testKey';
    store.local.set(key, id); // Set value in the mock store

    const result = getLongLinkFromId(id);

    expect(result).toBe(key);
  });

  it('should return an empty string if the ID does not exist', () => {
    const id = 'nonExistentId';

    const result = getLongLinkFromId(id);

    expect(result).toBe('');
  });
});
