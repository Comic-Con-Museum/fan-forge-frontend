import React from 'react'
import { Checkbox, TextField, Button, FormControlLabel, FormGroup } from '@material-ui/core'
import CCMBanner from '../assets/Logo-wide.png'
import '../css/Profile.css'

const styles = {
  field: {
    marginLeft: 15
  }
}

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Zach Jones',
      club: 'Batman',
      email: 'zachtjones16@gmail.com',
      bio:
        "Here's a short bio, containing useful information about me, my passions, and who I am.",
      pic: 'https://graph.facebook.com/321231654995187/picture?type=large',
      tags: ['batman', 'superman', 'wonderwoman'],
      notificationMentions: true,
      notificationComments: true
    }

    this.handleTagRemove = this.handleTagRemove.bind(this)
  }

  handleBioChange = event => {
    this.setState({
      bio: event.target.value
    })
  }

  handleNotificationMentionChange = event => {
    this.setState({
      notificationMentions: event.target.checked
    })
  }

  handleNotificationCommentsChange = event => {
    this.setState({
      notificationComments: event.target.checked
    })
  }

  handleTagRemove = name => {
    const { tags } = this.state
    const indexRemove = tags.indexOf(name)
    tags.splice(indexRemove, 1) // removes the element, but returns the removed elements

    if (indexRemove !== -1) {
      this.setState({
        tags
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    // const data = new FormData(event.target);

    // can get the form data through:
    // console.log(data.get('email'));

    // or just use the state
    // console.log(this.state)
    // NOTE: you access formData fields with `data.get(fieldName)`
    // const [month, day, year] = data.get('birthdate').split('/');
    // const serverDate = `${year}-${month}-${day}`;
    // data.set('birthdate', serverDate);
    // data.set('username', data.get('username').toUpperCase());
    /* fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });*/
  }

  renderBadges = () => {
    return (
      <p style={styles.field}>{"New user"}</p>
    )
  }

  renderTag = tag => (
    <FormGroup row key={tag}>
      <FormControlLabel
        control={
          <Checkbox
            style={styles.field}
            checked
            onChange={() => this.handleTagRemove(tag)}
            value={tag}
          />
        }
        label={tag}
      />
    </FormGroup>
  )

  render() {
    const {
      name, email, pic, bio, notificationMentions, notificationComments, tags, club
    } = this.state

    return (
      <div className='profile'>
        <img src={CCMBanner} width='100%'/>
        <div className='left'>
          <Button>
            <img
              alt={`${name}'s profile`}
              src={pic}
              width='100%'
            />
          </Button>

          <h3>{name}</h3>
          <h6>{email}</h6>
          <h6>Fan club: {club}</h6>
        </div>
        <div className='right'>
          <h3>About myself</h3>
          <div className='bio'>
            <TextField
              value={bio}
              onChange={this.handleBioChange}
              multiline
              fullWidth
            />
          </div>
          <h3>Badges</h3>
          {this.renderBadges()}

          <h3>Tags I follow</h3>
          {tags.map(this.renderTag)}

          <h3>Notification Preferences</h3>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  style={styles.field}
                  checked={notificationMentions}
                  onChange={this.handleNotificationMentionChange}
                />
              }
              label="mentions"
            />
          </FormGroup>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  style={styles.field}
                  checked={notificationComments}
                  onChange={this.handleNotificationCommentsChange}
                />
              }
              label='comments on my posts'
            />
          </FormGroup>


        </div>
        <Button children='Update my profile' variant='raised' fullWidth />
      </div>
    )
  }
}

export default Profile
