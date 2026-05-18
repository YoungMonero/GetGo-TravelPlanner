// Open-Meteo API - Free, no API key required

const weatherCodeToCondition = {
    0: { condition: 'Clear', icon: 'sun' },
    1: { condition: 'Mainly Clear', icon: 'sun' },
    2: { condition: 'Partly Cloudy', icon: 'cloud-sun' },
    3: { condition: 'Overcast', icon: 'cloud' },
    45: { condition: 'Foggy', icon: 'cloud' },
    48: { condition: 'Foggy', icon: 'cloud' },
    51: { condition: 'Light Drizzle', icon: 'cloud-rain' },
    53: { condition: 'Drizzle', icon: 'cloud-rain' },
    55: { condition: 'Dense Drizzle', icon: 'cloud-rain' },
    61: { condition: 'Light Rain', icon: 'cloud-rain' },
    63: { condition: 'Rain', icon: 'cloud-rain' },
    65: { condition: 'Heavy Rain', icon: 'cloud-rain' },
    71: { condition: 'Light Snow', icon: 'cloud-snow' },
    73: { condition: 'Snow', icon: 'cloud-snow' },
    75: { condition: 'Heavy Snow', icon: 'cloud-snow' },
    80: { condition: 'Rain Showers', icon: 'cloud-rain' },
    81: { condition: 'Rain Showers', icon: 'cloud-rain' },
    82: { condition: 'Heavy Showers', icon: 'cloud-rain' },
    95: { condition: 'Thunderstorm', icon: 'cloud-lightning' },
    96: { condition: 'Thunderstorm', icon: 'cloud-lightning' },
    99: { condition: 'Thunderstorm', icon: 'cloud-lightning' },
  };
  
  function getWeatherInfo(code) {
    return weatherCodeToCondition[code] || {
      condition: 'Unknown',
      icon: 'cloud'
    };
  }
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  export async function fetchWeather(lat, lon, useFahrenheit = false) {
    try {
      const tempUnit = useFahrenheit ? 'fahrenheit' : 'celsius';
  
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=${tempUnit}&wind_speed_unit=kmh&timezone=auto&forecast_days=5`
      );
  
      if (!response.ok) {
        throw new Error('Weather request failed');
      }
  
      const data = await response.json();
  
      const currentInfo = getWeatherInfo(data.current.weather_code);
  
      const forecast = data.daily.time.map((date, index) => {
        const dayDate = new Date(date);
        const info = getWeatherInfo(data.daily.weather_code[index]);
  
        return {
          day: dayNames[dayDate.getDay()],
          high: Math.round(data.daily.temperature_2m_max[index]),
          low: Math.round(data.daily.temperature_2m_min[index]),
          condition: info.condition,
          icon: info.icon
        };
      });
  
      return {
        current: {
          temp: Math.round(data.current.temperature_2m),
          condition: currentInfo.condition,
          icon: currentInfo.icon,
          humidity: data.current.relative_humidity_2m,
          windSpeed: Math.round(data.current.wind_speed_10m)
        },
        forecast
      };
    } catch (error) {
      console.error('Weather API error:', error);
      throw error;
    }
  }
  