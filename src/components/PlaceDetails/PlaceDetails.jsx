import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import Rating from '@mui/material/Rating'

import useStyle from './styles'

const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyle()

  if (selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" })

  return (
      <Card elevation={6}>
        <CardMedia
            style={{ height: 350 }}
            image={place.photo ? place.photo.images.medium.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
            title={place.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">{place.name}</Typography>
          <Box display="flex" justifyContent="space-between">
            <Rating value={Number(place.rating)} readOnly/>
            <Typography gutterBottom variant="suvtitle1">out of {place.num_reviews} reviews</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Price</Typography>
            <Typography gutterBottom variant="suvtitle1">{place.price_level}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Ranking</Typography>
            <Typography gutterBottom variant="suvtitle1">{place.ranking}</Typography>
          </Box>
          {place?.awards?.map((award, key) =>
              <Box key={key} my={1} display="flex" justifyContent="space-between" alignItems="center">
                <img src={award.images.small} alt={award.display_name}/>
                <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
              </Box>
          )}
          {place?.cuisine?.map(({ name, key }) =>
              <Chip key={key} size="small" label={name} className={classes.chip}/>
          )}
          {place?.address &&
              <Typography gutterBottom variant="subtitles2" color="textSecondary" className={classes.subtitle}>
                <LocationOnIcon/>{place.address}
              </Typography>}
          {place?.phone &&
              <Typography gutterBottom variant="subtitles2" color="textSecondary" className={classes.spacing}>
                <PhoneIcon/>{place.phone}
              </Typography>}
          <CardActions>
            <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
              Trip Adviser
            </Button>
            <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
              Website
            </Button>
          </CardActions>
        </CardContent>
      </Card>
  )
}

export default PlaceDetails
