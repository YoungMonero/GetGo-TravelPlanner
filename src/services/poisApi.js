// Generate POIs using location-based placeholders
// In production, this would use OpenTripMap or Foursquare

const categoryImages = {
    landmark: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop',
    ],
    museum: [
      'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&h=400&fit=crop',
    ],
    nature: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop',
    ],
    temple: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&h=400&fit=crop',
    ],
    historic: [
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop',
    ],
    market: [
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&h=400&fit=crop',
    ],
  };
  
  const tourImages = [
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=300&h=200&fit=crop',
  ];
  
  export function generatePOIs(locationName, country) {
    return [
      {
        id: '1',
        name: `${locationName} City Center`,
        description: `Explore the vibrant heart of ${locationName} with its bustling streets, local shops, and authentic atmosphere.`,
        image: categoryImages.landmark[0],
        category: 'District',
        rating: 4.5,
      },
      {
        id: '2',
        name: `${locationName} Historical Museum`,
        description: `Discover the rich history and cultural heritage of ${locationName} through fascinating exhibits and artifacts.`,
        image: categoryImages.museum[0],
        category: 'Museum',
        rating: 4.6,
      },
      {
        id: '3',
        name: `Central Park of ${locationName}`,
        description: `A beautiful green oasis in the heart of the city, perfect for relaxation and outdoor activities.`,
        image: categoryImages.nature[0],
        category: 'Park',
        rating: 4.4,
      },
      {
        id: '4',
        name: `Old Town ${locationName}`,
        description: `Wander through historic streets with traditional architecture dating back centuries.`,
        image: categoryImages.historic[0],
        category: 'Historic Site',
        rating: 4.7,
      },
      {
        id: '5',
        name: `${locationName} Main Square`,
        description: `The social hub of the city, surrounded by cafes, restaurants, and historic buildings.`,
        image: categoryImages.landmark[1],
        category: 'Landmark',
        rating: 4.5,
      },
      {
        id: '6',
        name: `${locationName} Local Market`,
        description: `Experience local culture and cuisine at this vibrant marketplace filled with fresh produce and crafts.`,
        image: categoryImages.market[0],
        category: 'Market',
        rating: 4.3,
      },
    ];
  }
  
  export function generateTours(locationName, currencySymbol) {
    const basePrices = [45, 75, 95, 120];
  
    return [
      {
        id: 't1',
        name: `${locationName} Walking Tour`,
        description: `Discover the highlights of ${locationName} on this guided walking tour through historic streets and landmarks.`,
        image: tourImages[0],
        price: basePrices[0],
        currency: currencySymbol,
        duration: '3 hours',
        rating: 4.7,
      },
      {
        id: 't2',
        name: `${locationName} Food & Culture Tour`,
        description: `Taste the best local cuisine and learn about the culinary traditions that make ${locationName} unique.`,
        image: tourImages[1],
        price: basePrices[1],
        currency: currencySymbol,
        duration: '4 hours',
        rating: 4.8,
      },
      {
        id: 't3',
        name: `Full Day ${locationName} Experience`,
        description: `Comprehensive tour covering all major attractions with an expert local guide.`,
        image: tourImages[2],
        price: basePrices[2],
        currency: currencySymbol,
        duration: '8 hours',
        rating: 4.6,
      },
      {
        id: 't4',
        name: `${locationName} by Night`,
        description: `Experience the magic of ${locationName} after dark with this evening tour of illuminated landmarks.`,
        image: tourImages[3],
        price: basePrices[3],
        currency: currencySymbol,
        duration: '3 hours',
        rating: 4.5,
      },
    ];
  }
  