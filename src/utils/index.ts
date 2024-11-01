import { getFromStore, persistInStore } from './store';

const BASE62_CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const BASE62_LENGTH = BASE62_CHARS.length;

// convert an integer to a Base62 encoded string
function base62Encode(num: number): string {
  let encoded = '';
  while (num > 0) {
    encoded = BASE62_CHARS[num % BASE62_LENGTH] + encoded;
    num = Math.floor(num / BASE62_LENGTH);
  }
  return encoded || '0';
}

function sumAsciiValues(url: string): number {
  let sum = 0;

  for (let i = 0; i < url.length; i++) {
    sum += url.charCodeAt(i);
  }

  return sum;
}

// generate a unique ID using the current timestamp
function generateUniqueId(sum: number): number {
  const timestamp = Date.now();
  const randomFactor = Math.floor(Math.random() * (1000 + sum));
  return timestamp + randomFactor;
}

// shorten a URL
export function shortenUrl(url: string): string {
  // check if url already exists in the local storage before hashing.
  let shortUrlKey = getFromStore(url);

  if (!shortUrlKey) {
    const uniqId = generateUniqueId(sumAsciiValues(url));
    shortUrlKey = base62Encode(uniqId);

    persistInStore(url, shortUrlKey);
  }

  return shortUrlKey;
}

// decode a shortened URL back to the original URL
export function decodeUrl(shortUrl: string): string | null {
  const shortUrlKey = shortUrl.split('/').pop();

  if (!shortUrlKey) {
    return null;
  }

  return shortUrlKey;
}
