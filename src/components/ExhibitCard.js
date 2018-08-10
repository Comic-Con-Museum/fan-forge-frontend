import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import {Chip} from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import Link from 'redux-first-router-link'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Typography from '@material-ui/core/Typography'
import '../css/Exhibit.css'

class ExhibitCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHoveredOver: false,
    }
  }

  render() {
    const { picture, title, summary, tags, upvotes, eid } = this.props
    let tagComponents = null

    if(tags){
      tagComponents = tags.map(tag =>
        <Chip
          label={tag}
          component="a"
          href={`/feed/search/${tag}`}
          clickable
        />
      )
    }
    const cardClassType = this.state.isHoveredOver ? 'exhibit-card-dark' : ''

    return (
      <div className='exhibit-center'>
        <Card
        className={cardClassType}
        onMouseOut={() => this.setState({isHoveredOver: false})}
        onMouseOver={() => this.setState({isHoveredOver: true})}
        raised>
          <CardMedia className='exhibit-card' image={picture} />
          <CardContent>
            <Typography gutterBottom variant='headline' component='h2'>
              {title}
            </Typography>
            <Typography component='p'>
              {summary}
            </Typography>
          </CardContent>
          <CardActions>
            <p>{`${Object.keys(upvotes).length} supporters`}</p>
            <IconButton aria-label='Add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <Link to={`/detail/` + eid}>
              <Button size='small' color='primary'>
                  Learn More
              </Button>
            </Link>
            {tagComponents}
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default ExhibitCard