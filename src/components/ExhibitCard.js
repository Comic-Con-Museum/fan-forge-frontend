import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import {Chip} from '@material-ui/core'
import Card from '@material-ui/core/Card'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { postSurvey } from '../actions/';
import Select from '@material-ui/core/Select';
import Link from 'redux-first-router-link'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { NavLink } from 'redux-first-router-link'
import Typography from '@material-ui/core/Typography'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { clean, getBase64 } from '../helpers';
import '../css/Exhibit.css'

class ExhibitCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      timeout: 0
    }
    this.toggle = this.toggle.bind(this)
    this.submitSurvey = this.submitSurvey.bind(this)
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
    this.setState({
      modal: !this.state.modal
    })
  }

  submitSurvey(e) {
    e.preventDefault()
    const stateCopy = Object.assign({}, this.state);
    delete stateCopy['modal']
    delete stateCopy['timeout']
    clean(stateCopy)
    console.log(this.props)
    this.props.postSurvey(stateCopy);
    this.toggle()
  }

  render() {
    const { picture, title, summary, tags, upvotes, eid, author } = this.props
    let tagComponents = null

    if(tags){
      tagComponents = tags.map(tag =>
        <Chip
          label={tag}
          component="a"
          href={`/feed/tagged-${tag}`}
          clickable
        />
      )
    }
    console.log(this.state)

    return (
      <div className='exhibit-center'>
        <Card
        className='exhibit-card-dark'
        raised>
          <NavLink activeClassName='active' to='/entry'>
            <CardMedia className='exhibit-card' image={picture} />
            <CardContent>
              <Typography gutterBottom variant='headline' component='h2'>
                {title}
              </Typography>
              <Typography component='p'>
                {summary}
              </Typography>
            </CardContent>
          </NavLink>
          <CardActions>
            <p>{`${Object.keys(upvotes).length} supporters`}</p>
            <IconButton onClick={() => this.toggle()} aria-label='Add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <Link to={`/detail/` + eid}>
              <Button size='small' color='primary'>
                  Learn More
              </Button>
            </Link>
            <Link to={`/user/` + author}>
              <Button size='small' color='primary'>
                {'by: ' + author}
              </Button>
            </Link>
            {tagComponents}
          </CardActions>
        </Card>
        <Modal
        backdrop='static'
        isOpen={this.state.modal}
        toggle={this.toggle}
        className='exhibit-modal'
        centered
        size='lg'>
          <ModalHeader>Support Survey</ModalHeader>
          <ModalBody>
            <h5>What part of day do you see yourself coming to the exhibit?</h5>
            <FormControl>
              <InputLabel>Time</InputLabel>
              <Select
                value={this.state.time}
                onChange={this.handleTimeChange}
                input={<Input name="Time" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value='Morning'>Morning</MenuItem>
                <MenuItem value='Noon'>Noon</MenuItem>
                <MenuItem value='Evening'>Evening</MenuItem>
                <MenuItem value='Night'>Night</MenuItem>
                <MenuItem value='Late Night'>Late Night</MenuItem>
              </Select>
            </FormControl>
            <h5>If this exhibit gets built, how likely are you to visit?</h5>
            <FormControl>
              <InputLabel>Likeliness</InputLabel>
              <Select
                value={this.state.likeliness}
                onChange={this.handleLikelinessChange}
                input={<Input name="" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value='I will not'>I will not</MenuItem>
                <MenuItem value='Not Very'>Not very likely</MenuItem>
                <MenuItem value='Maybe'>Maybe</MenuItem>
                <MenuItem value='Most Likely'>Most Likely</MenuItem>
                <MenuItem value='Definitely'>Definitely</MenuItem>

              </Select>
            </FormControl>
            <h5>How much would you spend to see this exhibit?</h5>
            <FormControl>
              <InputLabel>Amount</InputLabel>
              <Select
                value={this.state.amount}
                onChange={this.handleAmountChange}
                input={<Input name="Amount" />}
              >
                <MenuItem value="">
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
            <Button color="primary" onClick={this.submitSurvey}>Support this idea!</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = ({ locale }) => ({ locale })

const mapDispatchToProps = dispatch => bindActionCreators({ postSurvey }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ExhibitCard)
