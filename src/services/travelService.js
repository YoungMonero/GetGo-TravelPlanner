import { searchLocation } from './geocodingApi';
import { fetchCountryInfo, fetchCountryByName } from './countryApi';

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

    } catch(error) {
        console.error('Travel service error:', error);
    return null;
    }
}