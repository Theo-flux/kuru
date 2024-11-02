import { shortenUrl, decodeUrl, base62Encode } from '@/utils';
import * as store from '@/utils/store';

vi.mock('@/utils/store', () => ({
  getFromStore: vi.fn(),
  persistInStore: vi.fn(),
}));

describe('URL Shortener', () => {
  const url = 'https://google.com';
  const base = 'https://ku/link/';

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('shortenUrl', () => {
    it('should call getFromStore with the given URL', () => {
      const mockedShortUrlKey = 'kekere123';

      // Spy on getFromStore
      const getFromStoreSpy = vi.spyOn(store, 'getFromStore');
      getFromStoreSpy.mockReturnValueOnce(null);

      // Spy on persistInStoreSpy
      const persistInStoreSpy = vi.spyOn(store, 'persistInStore');
      persistInStoreSpy.mockImplementation(() => {});

      // Spy on base62EncodeSpy
      const base62EncodeSpy = vi.spyOn({ base62Encode }, 'base62Encode');
      base62EncodeSpy.mockReturnValue(mockedShortUrlKey);

      const result = shortenUrl(url);

      expect(getFromStoreSpy).toHaveBeenCalledOnce();
      expect(getFromStoreSpy).toHaveBeenCalledWith(url);
      expect(result).toBeTypeOf('string');
      expect(persistInStoreSpy).toHaveBeenCalledOnce();
    });

    it('should generate a unique shortened URL if the URL is not in storage', () => {
      const shortUrlKey = shortenUrl(url);

      expect(shortUrlKey).toBeDefined();
      expect(typeof shortUrlKey).toBe('string');
      expect(store.getFromStore).toHaveBeenCalledWith(url);
      expect(store.persistInStore).toHaveBeenCalledWith(url, shortUrlKey);
    });

    it('should return the existing shortened URL if the URL is already in storage', () => {
      const existingShortUrl = 'abc123';

      // Spy on getFromStore
      const getFromStoreSpy = vi.spyOn(store, 'getFromStore');
      getFromStoreSpy.mockReturnValueOnce(existingShortUrl);

      const shortUrlKey = shortenUrl(url);

      expect(shortUrlKey).toBe(existingShortUrl);
      expect(store.getFromStore).toHaveBeenCalledWith(url);
      expect(store.persistInStore).not.toHaveBeenCalled();
    });
  });

  describe('decodeUrl', () => {
    it('should return the decoded URL key from a shortened URL', () => {
      const shortUrl = `${base}abc123`;
      const decodedKey = decodeUrl(shortUrl);

      expect(decodedKey).toBe('abc123');
    });

    it('should return null if the short URL does not contain a key', () => {
      const decodedKey = decodeUrl(base);

      expect(decodedKey).toBeNull();
    });
  });
});
