import { searchLocation } from './geocodingApi';
import { fetchCountryInfo, fetchCountryByName } from './countryApi';
import { fetchWeather } from './weatherApi';
import { fetchExchangeRate } from './exchangeRateApi';
import { generatePOIs, generateTours } from './poisApi';

export async function fetchTravelData(query) {
    try {
        const location = await searchLocation(query);

        if (!location) {
          return null;
        }

        const isUSLocation = location.countryCode === 'US';

        const [countryInfo, weather] = await Promise.all([
          location.countryCode
            ? fetchCountryInfo(location.countryCode)
            : fetchCountryByName(location.country),
          fetchWeather(location.lat, location.lon, isUSLocation)
        ]);

        let exchangeRate = 1.0;
        if (countryInfo && countryInfo.currency) {
          exchangeRate = await fetchExchangeRate(countryInfo.currency.code);
        }

        const currencySymbol = countryInfo?.currency?.symbol || '$';
        const pois = generatePOIs(location.name, location.country);
        const tours = generateTours(location.name, currencySymbol);


        const travelData = {
            destination: {
              name: location.name,
              country: location.country,
              coordinates: {
                lat: location.lat,
                lng: location.lon
              }
            },
            weather,
            pointsOfInterest: pois,
            tours,
            country: countryInfo || {
              name: location.country,
              capital: 'Unknown',
              population: 0,
              languages: {
                primary: 'Unknown'
              },
              currency: {
                code: 'USD',
                name: 'US Dollar',
                symbol: '$',
                exchangeRate: 1.0,
                baseCurrency: 'USD'
              },
              flag: '🏳️'
            },
            // airport
          };
      
 
          if (travelData.country.currency) {
            travelData.country.currency.exchangeRate = exchangeRate;
          }
      
          return travelData;

    } catch(error) {
        console.error('Travel service error:', error);
    return null;
    }
}