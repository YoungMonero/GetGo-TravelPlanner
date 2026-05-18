export async function fetchExchangeRate(currencyCode) {
    try {
      const response = await fetch(
        'https://open.er-api.com/v6/latest/USD'
      );
  
      if (!response.ok) {
        throw new Error('Exchange rate request failed');
      }
  
      const data = await response.json();
  
      const rate = data?.rates?.[currencyCode];
  
      if (!rate) {
        console.warn(`Currency not supported: ${currencyCode}`);
        return 1;
      }
  
      return rate;
    } catch (error) {
      console.error('Exchange rate API error:', error);
      return 1;
    }
  }
  