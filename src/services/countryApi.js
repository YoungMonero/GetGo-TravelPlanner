export async function fetchCountryInfo(countryCode) {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryCode}?fields=name,capital,population,languages,currencies,flag,cca2`
      );
  
      if (!response.ok) {
        throw new Error('Country API request failed');
      }

      const data = await response.json();
      console.log(data)

      const languageList = data.languages ? Object.values(data.languages) : ['Unknown'];
      const languages = {
        primary: languageList[0] || 'Unknown',
        secondary: languageList.slice(1)
      };

      let currency = {
        code: 'USD',
        name: 'US Dollar',
        symbol: '$',
        exchangeRate: 1.0,
        baseCurrency: 'USD'
      };

      if (data.currencies) {
        const currencyCode = Object.keys(data.currencies)[0];
        const currencyData = data.currencies[currencyCode];
        currency = {
          code: currencyCode,
          name: currencyData.name,
          symbol: currencyData.symbol || currencyCode,
          exchangeRate: 1.0,
          baseCurrency: 'USD'
        };
      }
  
      return {
        name: data.name.common,
        capital: data.capital?.[0] || 'Unknown',
        population: data.population,
        languages,
        currency,
        flag: data.flag
      };

    } catch (error) {
        console.error('Country API error:', error);
        return null;
    }
}

export async function fetchCountryByName(countryName) {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}?fields=name,capital,population,languages,currencies,flag,cca2`
      );
  
      if (!response.ok) {
        return null;
      }
  
      const data = await response.json();
  
      if (!data || data.length === 0) {
        return null;
      }
  
      const country = data[0];
  
      const languageList = country.languages ? Object.values(country.languages) : ['Unknown'];
      const languages = {
        primary: languageList[0] || 'Unknown',
        secondary: languageList.slice(1)
      };
  
      let currency = {
        code: 'USD',
        name: 'US Dollar',
        symbol: '$',
        exchangeRate: 1.0,
        baseCurrency: 'USD'
      };
  
      if (country.currencies) {
        const currencyCode = Object.keys(country.currencies)[0];
        const currencyData = country.currencies[currencyCode];
        currency = {
          code: currencyCode,
          name: currencyData.name,
          symbol: currencyData.symbol || currencyCode,
          exchangeRate: 1.0,
          baseCurrency: 'USD'
        };
      }
  
      return {
        name: country.name.common,
        capital: country.capital?.[0] || 'Unknown',
        population: country.population,
        languages,
        currency,
        flag: country.flag
      };
    } catch (error) {
      console.error('Country by name API error:', error);
      return null;
    }
  }
  
