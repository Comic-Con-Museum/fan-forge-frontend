import React, { PureComponent } from 'react'
import { postComment } from '../../utils/api'
import {
  CommentsWrapper,
  CommentTitle,
  CommentInfo,
  CommentAuthor,
  CommentDate,
  CommentList,
  CommentBox,
  CommentDiv,
  CommentInput,
  SendComment,
} from './Styled'

//TODO Handle loading state on post for comment and resetting text afterwards
export class Comments extends PureComponent {
  state = {
    sendText: 'Send'
  };

  sendComment = () => {
    const newValue = this.commentBox.value;

    this.setState({sendText: 'Your comment was sent!'})
    this.commentBox.value = ''
    this.commentBox.disabled = true
    this.commentBox.style.background = 'whitesmoke'
    postComment(newValue, this.props.exhibit, this.resetComment)
  }

  resetComment = (id) => {
    this.commentBox.disabled = false;
    this.commentBox.style.background = 'white'
    this.setState({sendText: 'Send'})
  }

  render() {
    const {show, comments} = this.props;

    return (
      <CommentsWrapper show={show}>
        <CommentTitle>Comment section</CommentTitle>
        <CommentList> {comments.map(comment =>
          <CommentDiv key={comment.created}>
            <p>{comment.text}</p>
            <CommentInfo>
              <p>{comment.author}</p>
              <p>{new Date(comment.created).toLocaleDateString("en-US")}</p>
            </CommentInfo>
          </CommentDiv>
        )} </CommentList>
        <CommentInput>
          <CommentBox innerRef={node => this.commentBox = node}/>
          <SendComment onClick={this.sendComment}>{this.state.sendText}</SendComment>
        </CommentInput>
      </CommentsWrapper>
    )
  }
}

export default Comments
