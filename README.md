# GetGo TravelGuild

GetGo TravelGuild is a simple travel information web application that helps users explore destinations, points of interest, tours, and activities. The app focuses on clean UI, simplicity, and practical use of APIs without over-engineering.

This project was built as a learning-focused application, prioritizing readability, maintainability, and straightforward React patterns.

---

## Features

- Browse destinations and travel-related content
- View points of interest with images, categories, and ratings
- Explore tours and activities with duration, pricing, and ratings
- Currency handling with fallback values to prevent app crashes
- Responsive layout for desktop and mobile screens
- Clean and simple UI using reusable card components

---

## Tech Stack

- React (JavaScript / JSX)
- React Router
- Tailwind CSS
- Lucide React Icons
- Fetch API for external data
- Simple component-based architecture

---

## Project Structure

GetGo-TravelGuild/
├── public/
├── src/
│   ├── assets/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   └── Card.jsx
│   │   │
│   │   ├── CurrencyCard.jsx
│   │   ├── DestinationHeader.jsx
│   │   ├── HeroSection.jsx
│   │   ├── LanguageCard.jsx
│   │   ├── LoadingState.jsx
│   │   ├── PointsOfInterest.jsx
│   │   ├── ToursSection.jsx
│   │   └── WeatherCard.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   │
│   ├── services/
│   │   ├── countryApi.js
│   │   ├── exchangeRateApi.js
│   │   ├── geocodingApi.js
│   │   ├── poisApi.js
│   │   ├── travelService.js
│   │   └── weatherApi.js
│   │
│   ├── styles/
│   │   └── index.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md



---

## API Usage

The app consumes multiple external APIs, each handled in its own service file:

- Weather data
- Country and language information
- Geocoding (location lookup)
- Points of interest
- Tours and activities
- Currency exchange rates

All API logic is centralized inside the `services` folder to keep components clean and focused on UI rendering.

---

## Currency Exchange Handling

Currency exchange rates are fetched using a public API.

If:
- the API request fails
- a currency code is missing
- or the response is invalid

the app safely falls back to a default value to prevent UI crashes and broken calculations.

---

## Routing

- `/` → Main travel page
- `*` → Custom 404 Not Found page

React Router is used to handle navigation.

---

## Installation and Setup

1. Clone the repository
```bash

git clone <your-repository-url>

cd GetGo-TravelGuild

npm install

npm run dev

http://localhost:5173
