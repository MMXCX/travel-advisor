import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import Rating from '@mui/material/Rating'

import useStyle from './styles'
import mapStyles from './mapStyles'

const Map = ({ setCoordinates, setBounds, coordinates, places, childClicked, setChildClicked, weatherData }) => {
  const classes = useStyle()
  const isDesktop = useMediaQuery('(min-width:600px)')

  return (
      <div className={classes.mapContainer}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
            defaultCenter={{ lat: 53.67289621828124, lng: 23.82229253691716 }}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={{ disableDefaultUI: true, zoomControl: true }}
            onChange={(e) => {
              setCoordinates({ lat: Number(e.center.lat), lng: Number(e.center.lng) })
              setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
            }}
            onChildClick={(child) => setChildClicked(child)}
        >
          {places.length && places?.map((place, id) =>
              <div
                  className={classes.markerContainer}
                  lat={Number(place?.latitude ? place.latitude : 0)}
                  lng={Number(place?.longitude ? place.longitude : 0)}
                  key={id}
              >
                {!isDesktop ?
                    <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                    :
                    <Paper elevation={3} className={classes.paper}>
                      <Typography className={classes.typography} variant="subtitles2" gutterBottom>
                        {place.name}
                      </Typography>
                      <img
                          className={classes.pointer}
                          src={place?.photo ? place.photo.images.small.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                          alt={place?.name}
                      />
                      <Rating size="small" value={Number(place?.rating ? place.rating : 0)} readOnly/>
                    </Paper>
                }
              </div>
          )}
          {weatherData?.list?.map((data, id) =>
              <div key={id} lat={data.coord.lat} lng={data.coord.lon}>
                <img height={100} src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt=""/>
                <Typography gutterBottom variant="suvtitle1">{data.name}</Typography>
              </div>
          )}
        </GoogleMapReact>
      </div>
  )
}

export default Map
