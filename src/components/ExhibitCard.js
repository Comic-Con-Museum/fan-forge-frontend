import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Typography from '@material-ui/core/Typography'
import '../css/ExhibitCard.css'

const bull = <span>•</span>

class ExhibitCard extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Card>
            <CardMedia className="exhibit-card" image={this.props.picture} />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {this.props.title}
              </Typography>
              <Typography component="p">{this.props.summary}</Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon />
              </IconButton>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    )
  }
}

export default ExhibitCard
