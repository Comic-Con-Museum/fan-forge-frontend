import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import {Chip} from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Typography from '@material-ui/core/Typography'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import '../../css/Exhibit.css'

class ExhibitCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHoveredOver: false,
      modal: false
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
    console.log('you clicked')
  }

  render() {
    const { picture, title, summary, tags } = this.props
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
      <div>
        <Card
        className={cardClassType}
        onMouseOut={() => this.setState({isHoveredOver: false})}
        onMouseOver={() => this.setState({isHoveredOver: true})}
        onClick={() => this.toggle()}
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
            <IconButton aria-label='Add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <Button size='small' color='primary'>
                Learn More
            </Button>
            {tagComponents}
          </CardActions>
        </Card>
        <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
        className='exhibit-modal'
        centered
        size='lg'>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <h1> Ya Yeet </h1>
            <p> adfasfads </p>
            <button />
            <h1> Ya Yeet </h1>
            <p> adfasfads </p>
            <button />
            <h1> Ya Yeet </h1>
            <p> adfasfads </p>
            <button />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default ExhibitCard
