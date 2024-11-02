import { decodeUrl } from '@/utils';
// import { getFromStore, persistInStore } from '@/utils/store';

vi.mock(import('@/utils/store'), async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
  };
});

describe('URL Shortener', () => {
  const url = 'https://example.com';
  const base = 'https://ku/link/';

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe.only('shortenUrl', () => {
    // it('should generate a unique shortened URL if the URL is not in storage', () => {
    //   // Mock getFromStore to return null to simulate a new URL
    //   (getFromStore as vi.Mock).mockReturnValue(null);
    //   const shortUrlKey = shortenUrl(url);
    //   expect(shortUrlKey).toBeDefined();
    //   expect(shortUrlKey).toBeTypeOf('string');
    //   expect(getFromStore).toHaveBeenCalledWith(url);
    //   expect(persistInStore).toHaveBeenCalledWith(url, shortUrlKey);
    // });
    // it('should return the existing shortened URL if the URL is already in storage', () => {
    //   const existingShortUrl = 'abc123';
    //   // Mock getFromStore to return an existing shortened URL
    //   (getFromStore as vi.Mock).mockReturnValue(existingShortUrl);
    //   const shortUrlKey = shortenUrl(url);
    //   expect(shortUrlKey).toBe(existingShortUrl);
    //   expect(getFromStore).toHaveBeenCalledWith(url);
    //   expect(persistInStore).not.toHaveBeenCalled();
    // });
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
