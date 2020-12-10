

import CityForm from './components/CityForm';
import Temperature from './components/Temperature';
import Weather from './components/Weather';

import { convertKToC, generateImageLink } from './helpers/weatherHelpers'
import useWeatherAPI from './hooks/useWeatherAPI'
import useAxiosGET from './hooks/useAxiosGET'
import useEventListener from './hooks/useEventListener'

import './App.css';
import { useEffect } from 'react';

function App() {
  const { currentWeather, currentCity, updateCity } = useWeatherAPI("Montréal")
  return (
    <div className="App">
      {currentWeather &&
        <>
          <Weather
            city={currentCity}
            description={currentWeather.weather[0].description}
            icon={generateImageLink(currentWeather.weather[0].icon)}
          />
          <Temperature
            temperature={convertKToC(currentWeather.main.temp)}
          />
        </>
      }
      {/* <CityForm updateCity={updateCity} /> */}
      <CityForm {...{ updateCity }} />
    </div>
  );
}

export default App;
