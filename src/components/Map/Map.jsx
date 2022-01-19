import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import Rating from '@mui/material/Rating'

import useStyle from './styles'

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyle()
  const isMobile = useMediaQuery('(min-width:600px)')

  const onChange = () => {
  }
  const onChildClick = () => {
  }

  return (
      <div className={classes.mapContainer}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
            defaultCenter={{ lat: 53.67289621828124, lng: 23.82229253691716 }}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={''}
            onChange={(e) => {
              setCoordinates({ lat: e.center.lat, lng: e.center.lng })
              setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
            }}
            onChildClick={onChildClick}
            yesIWantToUseGoogleMapApiInternals={true}
        >

        </GoogleMapReact>
      </div>
  )
}

export default Map
