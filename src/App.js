import { CssBaseline, Grid } from '@mui/material'

import Header from './components/Headers/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

import { getPlacesData, getPlacesDataSim, getWeatherData, getWeatherDataSim } from './api'
import { useEffect, useState } from "react";


const App = () => {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState("0")
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: Number(latitude), lng: Number(longitude) })
    })
  }, [])

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating)

    setFilteredPlaces(filteredPlaces)
  }, [rating])

  useEffect(() => {
    if (bounds.ne && bounds.sw) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        if (process.env.REACT_APP_PRODUCTION_MODE === 'prod') {
          getWeatherData(coordinates.lat, coordinates.lng)
              .then((data) => setWeatherData(data))
          getPlacesData(type, bounds.ne, bounds.sw)
              .then((data) => {
                setPlaces(data?.filter((place) => place.name && place.num_reviews > 0))
                setFilteredPlaces([])
                setIsLoading(false)
              })
        } else {
          setWeatherData(getWeatherDataSim(coordinates.lat, coordinates.lng))
          setPlaces(getPlacesDataSim(type))
          setIsLoading(false)
        }
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [bounds, type])

  return (
      <>
        <CssBaseline/>
        <Header setCoordinates={setCoordinates}/>
        <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
            <List
                places={filteredPlaces.length ? filteredPlaces : places}
                childClicked={childClicked}
                isLoading={isLoading}
                type={type}
                setType={setType}
                rating={rating}
                setRating={setRating}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
                setCoordinates={setCoordinates}
                setBounds={setBounds}
                coordinates={coordinates}
                places={filteredPlaces.length ? filteredPlaces : places}
                childClicked={childClicked}
                setChildClicked={setChildClicked}
                weatherData={weatherData}
            />
          </Grid>
        </Grid>
      </>
  )
}

export default App
