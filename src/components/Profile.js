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
import axios from 'axios/index';

import '../css/Profile.css'


const styles = {
  field: {
    marginLeft: 15
  }
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: true,
      club: 'Batman',
      tags: [],
      allTags: ['Batman', 'Spiderman', 'Superman', 'Thanos', 'Wonder Woman']
    };

    // load the current user
    axios.get(`/user/${this.props.username}`)
      .then(data => {
        // no user, api returns {}
        if (data.data && Object.keys(data.data).length !== 0) {
          this.setState({
            email: data.data.email,
            bio: data.data.bio,
            pic: data.data.photo,
            tags: data.data.tags || [],
            notificationMentions: data.data.notificationMentions,
            notificationComments: data.data.notificationComments,
            shouldPut: true
          });
        }
        else {
          this.setState({
            shouldPut: false
          })
        }
      })
      .catch(() => {});

    this.handleTagRemove = this.handleTagRemove.bind(this);
  }

  refresh = () => {
    // load the current user
    axios.get(`/user/${this.props.username}`)
      .then(data => {
        // no user, api returns {}
        if (data.data && Object.keys(data.data).length !== 0) {
          this.setState({
            email: data.data.email,
            bio: data.data.bio,
            pic: data.data.photo,
            tags: data.data.tags || [],
            notificationMentions: data.data.notificationMentions,
            notificationComments: data.data.notificationComments,
            shouldPut: true
          });
        }
        else {
          this.setState({
            shouldPut: false
          })
        }
      })
      .catch(() => {});
  };

  addTag = event => {
    const currentTags = this.state.tags;
    currentTags.push(event.target.value);
    this.setState({
      tags: currentTags
    });
  };

  onDrop(file) {
    this.setState({
      file: file
    });
  }

  handleEmailChange = event => {
    if (!this.state.editable) return;

    this.setState({
      email: event.target.value
    });
  };

  handleBioChange = event => {
    if (!this.state.editable) return;

    this.setState({
      bio: event.target.value
    });
  };

  handleNotificationMentionChange = event => {
    if (!this.state.editable) return;

    this.setState({
      notificationMentions: event.target.checked
    })
  };

  handleNotificationCommentsChange = event => {
    if (!this.state.editable) return;

    this.setState({
      notificationComments: event.target.checked
    });
  };

  handleTagRemove = name => {
    if (!this.state.editable) return;

    const { tags } = this.state;
    const indexRemove = tags.indexOf(name);
    tags.splice(indexRemove, 1); // removes the element, but returns the removed elements

    if (indexRemove !== -1) {
      this.setState({
        tags
      })
    }
  };

  handleSubmit = () => {
    const { username } = this.props;
    const {
      email, bio, tags, notificationMentions, notificationComments
    } = this.state;
    if (this.state.file) {
      const reader = new FileReader(); // eslint-disable-line
      reader.readAsDataURL(this.state.file);
      reader.onload = () => {
        let data = reader.result;
        data = data.substr(data.indexOf(',') + 1); // replace data:image/png;base64, with ''
        const req = {
          email, bio, tags, notificationComments, notificationMentions
        };
        req.photo = data;
        if (this.state.shouldPut) {
          req.uid = username;
          req.name = username;
          axios.put(`/user/${username}`, req)
            .then(() => {
              this.refresh()
            })
            .catch(error => {
              console.log(error)
            })
        }
        else {
          req.name = username;
          axios.post('/user', req)
            .then(() => {
              this.refresh()
            })
            .catch(error => {
              console.log(error)
            })
        }
      };
      reader.onerror = error => {
        console.log('Error: ', error);
      };
    }
    else {
      // post without the image
      const req = {
        email, bio, tags, notificationComments, notificationMentions
      };
      if (this.state.shouldPut) {
        req.uid = username;
        req.name = username;
        req.photo = this.state.pic;
        axios.put(`/user/${username}`, req)
          .then(() => {
            this.refresh()
          })
          .catch(error => {
            console.log(error)
          })
      }
      else {
        req.name = username;
        axios.post('/user', req)
          .then(() => {
            this.refresh()
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  };

  renderBadges = () => (
    <p style={styles.field}>New user</p>
  );

  renderTagChoices = () => {
    const items = [];
    this.state.allTags.forEach(tag => {
      if (this.state.tags.indexOf(tag) === -1) {
        items.push(
          <MenuItem key={tag} value={tag}>
            <em>{tag}</em>
          </MenuItem>
        )
      }
    });
    return items
  };

  renderTag = tag => {
    if (this.state.editable) {
      return (
        <FormGroup row key={tag}>
          <FormControlLabel
            control={(
              <Checkbox
                checkedIcon={<DeleteForeverIcon />}
                style={styles.field}
                checked
                onChange={() => this.handleTagRemove(tag)}
                value={tag}
              />
)}
            label={tag}
          />
        </FormGroup>
      )
    }
    return (
      <div className='tag'>{tag}</div>
    )
  };

  render() {
    const {
      name, pic, bio, notificationMentions, notificationComments, tags, club
    } = this.state;

    return (
      <div className='profile'>
        <div className='left'>
          <Avatar
            className='avatar'
            src={pic}
            alt={`${name}'s profile`}
          />
          { this.state.editable && (
          <Dropzone
            className='dropzone'
            multiple={false}
            accept='image/*'
            onDrop={files => this.onDrop(files[0])}
          >
            <div>
              Click here, or drop image to change
            </div>
          </Dropzone>
          ) }
          <h3>{this.props.username}</h3>
          <TextField
            value={this.state.email}
            onChange={this.handleEmailChange}
            fullWidth
            helperText='Email'
            margin='normal'
          />
          <h6>
Fan club:
            {club}
          </h6>
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

          <h3>
Followed tags
            {this.state.editable
              && (
              <span>
                <InputLabel htmlFor='add tag' style={{ marginLeft: 20 }}>Add tag</InputLabel>
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
              )
            }
          </h3>
          {tags.map(this.renderTag)}

          {this.state.editable
            && (
            <div>
              <h3>Notification Preferences</h3>
              <FormGroup row>
                <FormControlLabel
                  control={(
                    <Checkbox
                      style={styles.field}
                      checked={notificationMentions}
                      onChange={this.handleNotificationMentionChange}
                    />
)}
                  label='mentions'
                />
              </FormGroup>
              <FormGroup row>
                <FormControlLabel
                  control={(
                    <Checkbox
                      style={styles.field}
                      checked={notificationComments}
                      onChange={this.handleNotificationCommentsChange}
                    />
)}
                  label='comments on my posts'
                />
              </FormGroup>
            </div>
            )
          }
        </div>
        {this.state.editable
          && (
          <Button
            className='yellow-btn'
            children='Update my profile'
            variant='raised'
            fullWidth
            onClick={this.handleSubmit}
          />
          )
        }
      </div>
    )
  }
}

export default Profile
