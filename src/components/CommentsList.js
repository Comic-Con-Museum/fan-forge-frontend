import React, {Component} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar'
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'


class CommentsList extends Component {

    render() {
        return (
            <div>
            <List>
              <ListItem>
                <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM4UcvSBHwJTkCWxJFZnHBqGCSsnkImMWUMY1DobHYbHAhTw_m'/>
                <ListItemText primary="Dude, this is awesome. Thanks so much" secondary="by Joe Henderson" />
              </ListItem>
              <ListItem>
                <Avatar src='https://banner2.kisspng.com/20180127/wie/kisspng-iron-man-cartoon-avatar-superhero-icon-superhero-phone-icon-5a6c4a2f1ef1c3.9201138415170463191268.jpg'/>
                <ListItemText primary="How artistic!" secondary="by Jenny Hess" />
              </ListItem>
              <ListItem>
                <Avatar src='https://avatarfiles.alphacoders.com/103/thumb-103092.jpg'/>
                <ListItemText primary="This has been very useful for my research. Thanks as well!" secondary="by Elliot Fu" />
              </ListItem>
            </List>
            <Form>
                <FormGroup>
                    <Label for="exampleText">Add Comment</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>

          </div>
        )
    }
}

export default CommentsList

