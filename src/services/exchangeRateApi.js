export async function fetchExchangeRate(currencyCode) {
    try {
      const response = await fetch(
        `https://api.exchangerate.host/latest?base=USD&symbols=${currencyCode}`
      );
  
      if (!response.ok) {
        throw new Error('Exchange rate request failed');
      }
  
      const data = await response.json();
  
      if (data.rates && data.rates[currencyCode]) {
        return data.rates[currencyCode];
      }
  
      throw new Error('Currency not found in response');
    } catch (error) {
      console.error('Exchange rate API error:', error);
      return 1.0; // optional default if you want a minimal fallback
    }
  }
  