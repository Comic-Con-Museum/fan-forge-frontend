import React from 'react'
import {
  Avatar,
  Checkbox,
  TextField,
  Button,
  FormControlLabel,
  FormGroup,
  Select,
  MenuItem,
  InputLabel
} from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import Dropzone from 'react-dropzone'
import '../css/Profile.css'


const styles = {
  field: {
    marginLeft: 15
  }
}

class Profile extends React.Component {
  constructor(props) {
    super(props)
    // if this.props.profileId
    this.state = {
      editable: true,
      name: 'Zach Jones',
      club: 'Batman',
      email: 'zachtjones16@gmail.com',
      bio:
        "Here's a short bio, containing useful information about me, my passions, and who I am.",
      pic: 'https://graph.facebook.com/321231654995187/picture?type=large',
      tags: ['Batman', 'Superman', 'Wonder Woman'],
      notificationMentions: true,
      notificationComments: true,
      allTags: ['Batman', 'Spiderman', 'Superman', 'Thanos', 'Wonder Woman']
    }

    this.handleTagRemove = this.handleTagRemove.bind(this)
  }

  addTag = (event) => {
    const currentTags = this.state.tags
    currentTags.push(event.target.value)
    this.setState({
      tags: currentTags
    })
  }

  onDrop(file) {
    console.log(file)
    this.setState({
      "file": file
    })
    console.log('should upload this file')
  }

  handleBioChange = event => {
    if (!this.state.editable) return

    this.setState({
      bio: event.target.value
    })
  }

  handleNotificationMentionChange = event => {
    if (!this.state.editable) return

    this.setState({
      notificationMentions: event.target.checked
    })
  }

  handleNotificationCommentsChange = event => {
    if (!this.state.editable) return

    this.setState({
      notificationComments: event.target.checked
    })
  }

  handleTagRemove = name => {
    if (!this.state.editable) return

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

  renderTagChoices = () => {
    const items = []
    this.state.allTags.map((tag) => {
      if (this.state.tags.indexOf(tag) === -1) {
        items.push(
          <MenuItem key={tag} value={tag}>
            <em>{tag}</em>
          </MenuItem>
        )
      }
    })
    return items
  }

  renderTag = tag => {
    if (this.state.editable) {
      return (
        <FormGroup row key={tag}>
          <FormControlLabel
            control={
              <Checkbox
                checkedIcon={ <DeleteForeverIcon /> }
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
    } else {
      return (
        <div className='tag'>{tag}</div>
      )
    }

  }

  renderButton = () => {
    if (this.state.editable) {
      return
    } else {
      return null
    }
  }

  render() {
    const {
      name, email, pic, bio, notificationMentions, notificationComments, tags, club
    } = this.state

    return (
      <div className='profile'>
        <div className='left'>
          <Avatar
            className='avatar'
            src={pic}
            alt={`${name}'s profile`}
          />
          { this.state.editable && <Dropzone
            className='dropzone'
            multiple={false}
            accept="image/*"
            onDrop={(file) => this.onDrop(file)}>
            <div>
              Click here, or drop image to change
            </div>
          </Dropzone> }

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

          <h3>Followed tags
            {this.state.editable &&
              <span>
              <InputLabel htmlFor="add tag" style={{marginLeft: 20}}>Add tag</InputLabel>
              <Select
                onChange={this.addTag}
                inputProps={{
                  id: 'add tag'
                }}
                value='Add tag'
              >
                {this.renderTagChoices()}
              </Select>
              </span>
            }
          </h3>
          {tags.map(this.renderTag)}

          {this.state.editable &&
            <div>
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
          }
        </div>
        {this.state.editable &&
          <Button
            className='yellow-btn'
            variant='contained'
            children='Update my profile'
            variant='raised'
            fullWidth
          />
        }
      </div>
    )
  }
}

export default Profile
