import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import Rating from '@mui/material/Rating'

import useStyle from './styles'

const Map = () => {
  const classes = useStyle()
  const isMobile = useMediaQuery('(min-width:600px)')

  const coordinate = { lat: 0, lng: 0 }

  const onChange = () => {
  }
  const onChildClick = () => {
  }

  return (
      <div className={classes.mapContainer}>
        <GoogleMapReact
            // bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY }}
            defaultCenter={coordinate}
            center={coordinate}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={''}
            onChange={onChange}
            onChildClick={onChildClick}
            yesIWantToUseGoogleMapApiInternals={true}
        >

        </GoogleMapReact>
      </div>
  )
}

export default Map
