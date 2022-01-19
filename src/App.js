import { CssBaseline, Grid } from '@mui/material'

import Header from './components/Headers/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'

import { getPlacesData, getPlacesDataSim } from './api'
import { useEffect, useState } from "react";

const App = () => {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({ ne: { lat: 0, lng: 0 }, sw: { lat: 1, lng: 1 } })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, [])

  // useEffect(() => {
  //   getPlacesData(bounds.ne, bounds.sw)
  //       .then((data) => {
  //         setPlaces(data)
  //         console.log(data)
  //       })
  // }, [coordinates, bounds])

  useEffect(() => {
    const { data } = getPlacesDataSim
    setPlaces(data)
    console.log(data)
  }, [coordinates, bounds])

  return (
      <>
        <CssBaseline/>
        <Header/>
        <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
            <List places={places}/>
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
                setCoordinates={setCoordinates}
                setBounds={setBounds}
                coordinates={coordinates}
            />
          </Grid>
        </Grid>
      </>
  )
}

export default App
