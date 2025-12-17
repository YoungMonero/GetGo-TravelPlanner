

export async function searchLocation(query) {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&addressdetails=1&limit=1`,
        {
          headers: {
            'User-Agent': 'GetGo Travel App'
          }
        }
      );
  
      if (!response.ok) {
        throw new Error('Geocoding request failed');
      }
  
      const data = await response.json();
  
      if (!data || data.length === 0) {
        return null;
      }
  
      const result = data[0];
      const address = result.address || {};
  
      return {
        name:
          address.city ||
          address.town ||
          address.village ||
          address.state ||
          result.name ||
          query,
        displayName: result.display_name,
        lat: parseFloat(result.lat),
        lon: parseFloat(result.lon),
        country: address.country || 'Unknown',
        countryCode: address.country_code
          ? address.country_code.toUpperCase()
          : '',
        type: result.type
      };
    } catch (error) {
      console.error('Geocoding error:', error);
      return null;
    }
  }
  