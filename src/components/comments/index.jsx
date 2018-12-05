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
  sendComment = () => {
    postComment(this.commentBox.value, this.props.exhibit)
    this.commentBox.value = ''
  }

  render() {
    const {show, comments} = this.props

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
          <SendComment onClick={this.sendComment}> Send </SendComment>
        </CommentInput>
      </CommentsWrapper>
    )
  }
}

export default Comments
