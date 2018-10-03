import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Chip } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FavoriteIcon from '@material-ui/icons/Favorite'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import {
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap'
import { clean } from '../helpers';
import '../css/Exhibit.css'

class ExhibitCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      timeout: 0,
      eid: this.props.eid,
      upvoteCount: this.props.upvotes
    };
    this.toggle = this.toggle.bind(this);
    this.submitSurvey = this.submitSurvey.bind(this);
  }

  handleTimeChange = event => {
    this.setState({ time: event.target.value })
  };

  handleLikelinessChange = event => {
    this.setState({ likeliness: event.target.value })
  };

  handleAmountChange = event => {
    this.setState({ amount: event.target.value })
  };

  toggle() {
    this.setState(state => ({ modal: !state.modal }));
  }

  submitSurvey(e) {
    e.preventDefault();
    const stateCopy = Object.assign({}, this.state);
    // TODO fix this code so we don't use delete, or need a clean helper function
    delete stateCopy.modal;
    delete stateCopy.timeout;
    clean(stateCopy);
    this.props.postSurvey(stateCopy);
    this.setState(state => ({ upvoteCount: state.upvoteCount + 1 }));
    this.toggle()
  }

  render() {
    const {
      picture, title, summary, tags, eid, author
    } = this.props;
    let tagComponents = null;

    if (tags) {
      tagComponents = tags.map(tag => (
        <Chip
          label={tag}
          component='a'
          href={`/feed/tagged-${tag}`}
          clickable
        />
      ))
    }

    return (
      <div className='exhibit-center'>
        <Card
          className='exhibit-card-dark'
          raised
        >
          <Link activeClassName='active' to={`/detail/${eid}`}>
            <CardMedia className='exhibit-card' image={picture} />
            <CardContent>
              <Typography gutterBottom variant='headline' component='h2'>
                {title}
              </Typography>
              <Typography component='p'>
                {summary}
              </Typography>
            </CardContent>
          </Link>
          <CardActions>
            <p>{`${this.state.upvoteCount} supporters`}</p>
            <IconButton onClick={() => this.toggle()} aria-label='Add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <Link to={`/detail/${eid}`}>
              <Button size='small' color='primary'>
                  Learn More
              </Button>
            </Link>
            <Button size='small' color='primary'>
              {`by: ${author}`}
            </Button>
            {tagComponents}
          </CardActions>
        </Card>
        <Modal
          backdrop='static'
          isOpen={this.state.modal}
          toggle={this.toggle}
          className='exhibit-modal'
          centered
          size='lg'
        >
          <ModalHeader>Support Survey</ModalHeader>
          <ModalBody>
            <h5>What part of day do you see yourself coming to the exhibit?</h5>
            <FormControl fullWidth={1}>
              <InputLabel>Time</InputLabel>
              <Select
                value={this.state.time}
                onChange={this.handleTimeChange}
                input={<Input name='Time' />}
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value='Morning'>Morning</MenuItem>
                <MenuItem value='Noon'>Noon</MenuItem>
                <MenuItem value='Evening'>Evening</MenuItem>
                <MenuItem value='Night'>Night</MenuItem>
                <MenuItem value='Late Night'>Late Night</MenuItem>
              </Select>
            </FormControl>
            <h5 style={{ marginTop: 30 }}>If this exhibit gets built, how likely are you to visit?</h5>
            <FormControl fullWidth={1}>
              <InputLabel>Likeliness</InputLabel>
              <Select
                value={this.state.likeliness}
                onChange={this.handleLikelinessChange}
                input={<Input name='' />}
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value='I will not'>I will not</MenuItem>
                <MenuItem value='Not Very'>Not very likely</MenuItem>
                <MenuItem value='Maybe'>Maybe</MenuItem>
                <MenuItem value='Most Likely'>Most Likely</MenuItem>
                <MenuItem value='Definitely'>Definitely</MenuItem>

              </Select>
            </FormControl>
            <h5 style={{ marginTop: 30 }}>How much would you spend to see this exhibit?</h5>
            <FormControl fullWidth={1}>
              <InputLabel>Amount</InputLabel>
              <Select
                value={this.state.amount}
                onChange={this.handleAmountChange}
                input={<Input name='Amount' />}
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value='10'>$5 to $10</MenuItem>
                <MenuItem value='25'>$10 to $25</MenuItem>
                <MenuItem value='50'>$25 to $50</MenuItem>
                <MenuItem value='75'>$50 to $75</MenuItem>
                <MenuItem value='More'>$75+</MenuItem>

              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.submitSurvey}>Support this idea!</Button>
            {' '}
            <Button color='secondary' onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default ExhibitCard
