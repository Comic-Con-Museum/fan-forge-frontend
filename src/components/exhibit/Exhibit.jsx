import React, { PureComponent } from 'react';

import { fetchExhibit } from '../../utils/api';
import {
  PageWrapper,
  Card,
  Title,
  CarouselDiv,
  InformationDiv,
  DescriptionColumns,
  CommentsAndTagsDiv,
  CommentsWrapper,
  CommentDiv,
  CommentsButton
} from './StyledComponents';

class Exhibit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetchExhibit(this.props.match.params.id).then(({data}) => this.setState(data));
  }

  render() {
    console.warn(this.state);
    const {title, description, comments, commentsOpen} = this.state;
    if (!title) return <PageWrapper>Loading</PageWrapper>

    const commentComponents = comments.map(item =>
      <CommentDiv>
        <p>
          {item.text}
        </p>
        <p>
          {item.author}
        </p>
      </CommentDiv>
    );

    return (
      <PageWrapper>
        <Card>
          <CarouselDiv />
          <InformationDiv>
            <Title>{title}</Title>
            <DescriptionColumns>{description}</DescriptionColumns>
            <CommentsButton onClick={() => this.setState({commentsOpen: !commentsOpen})}>View comments</CommentsButton>
          </InformationDiv>
        </Card>
        {commentsOpen ? <div>HI THERERERERERERERERER</div>: null}
      </PageWrapper>
    );
  }
}

export default Exhibit;