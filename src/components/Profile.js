import React from 'react'
import { Checkbox, TextField, RaisedButton } from 'material-ui' // eslint-disable-line
import '../css/Profile.css'

const styles = {
  field: {
    marginLeft: 15
  },
  imageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  }
}

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Zach Jones',
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

  renderTag = tag => (
    <Checkbox
      key={tag}
      style={styles.field}
      label={tag}
      checked
      onCheck={() => this.handleTagRemove(tag)}
    />
  )

  render() {
    const {
      name, email, pic, bio, notificationMentions, notificationComments, tags
    } = this.state


    return (
      <div className='profile'>
        <h3>
          {name}
        </h3>
        <h3>
Email:
        </h3>
        <TextField
          style={styles.field}
          value={email}
          hintText='enter your email'
        />
        <h3>
Profile image:
        </h3>
        <img
          alt={`${name}'s profile`}
          src={pic}
        />
        <RaisedButton
          label='Update image'
          labelPosition='before'
          style={styles.field}
          containerElement='label'
        >
          <input
            type='file'
            name='file'
            style={styles.imageInput}
            id='profileImg'
          />
        </RaisedButton>

        <h3>
Bio:
        </h3>
        <div className='bio'>
          <TextField
            value={bio}
            onChange={this.handleBioChange}
            multiLine
            fullWidth
          />
        </div>
        <h3>
Notification Preferences
        </h3>
        <Checkbox
          style={styles.field}
          label='mentions'
          checked={notificationMentions}
          onCheck={this.handleNotificationMentionChange}
        />
        <Checkbox
          style={styles.field}
          label='comments on my posts'
          checked={notificationComments}
          onCheck={this.handleNotificationCommentsChange}
        />

        <h3>
Tags I follow
        </h3>
        {tags.map(this.renderTag)}

        <RaisedButton label='Update my profile' fullWidth />
      </div>
    )
  }
}

export default Profile
