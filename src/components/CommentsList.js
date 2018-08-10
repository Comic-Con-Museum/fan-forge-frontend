import React, {Component} from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'
import axios from "axios/index"
import {connect} from "react-redux";

class CommentsList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            commentContent: '',
            comments: null,
            loading: true,
        }
    }

    componentDidMount() {
        this.loadComments()
    }

    loadComments = () => {
        axios.get("/exhibit/" + this.props.id)
            .then(data => {
                if (data.data) {
                    console.log(data.data.comments);
                    this.setState({
                        comments: data.data.comments,
                        loading: false
                    })
                }
            })
            .catch(err => undefined)
    }

    handleFormSubmit = e => {
        const req = {};
        req.text = this.state.commentContent;
        req.type = 'NORMAL';
        req.userID = this.props.username || "batman";
        const url = "/exhibit/" + this.props.id + "/comment"
        axios.post(url, req)
            .then(res => {this.setState({commentContent: "", loading: true}, this.loadComments);})
            .catch(err => {console.log("err" + err)});
    }

    handleChange = e => {
        this.setState({
            commentContent: e.target.value
        })
    }

    render() {
        const comments = [];
        for (const key in this.state.comments) {
            comments.push(this.state.comments[key]);
        }
        return (
            <div> 
                {!this.state.loading && 
                <List>
                    {comments.map((comment, i) => <ListItem key={i}>
                        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM4UcvSBHwJTkCWxJFZnHBqGCSsnkImMWUMY1DobHYbHAhTw_m'/>
                        <ListItemText primary={comment.text} secondary= {`by  ${comment.userID}`} />
                    </ListItem>)}
                </List>
                }
            <Form>
                <FormGroup>
                    <Label for="exampleText">Add Comment</Label>
                    <Input type="textarea" name="text" value={this.state.commentContent} onChange={this.handleChange}  />
                </FormGroup>
                <Button onClick={this.handleFormSubmit}>Submit</Button>
            </Form>
          </div>
        )
    }
}

const mapStateToProps = ({detail}) => ({id: detail});
export default connect(mapStateToProps)(CommentsList)
