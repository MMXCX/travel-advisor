import { CssBaseline, Grid } from '@mui/material'

import Header from './components/Headers/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

import { getPlacesDataSim } from './api'
import { useEffect, useState } from "react";

const App = () => {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: Number(latitude), lng: Number(longitude) })
    })
  }, [])

  // useEffect(() => {
  //   setIsLoading(true)
  //   const timer = setTimeout(() => {
  //     getPlacesData(bounds.ne, bounds.sw)
  //         .then((data) => {
  //           setPlaces(data)
  //           console.log(data)
  //           setIsLoading(false)
  //         })
  //   }, 1000)
  //   return () => clearTimeout(timer)
  // }, [coordinates, bounds])

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setPlaces(getPlacesDataSim)
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [coordinates, bounds])

  return (
      <>
        <CssBaseline/>
        <Header/>
        <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
            <List
                places={places}
                childClicked={childClicked}
                isLoading={isLoading}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
                setCoordinates={setCoordinates}
                setBounds={setBounds}
                coordinates={coordinates}
                places={places}
                childClicked={childClicked}
                setChildClicked={setChildClicked}
            />
          </Grid>
        </Grid>
      </>
  )
}

export default App
