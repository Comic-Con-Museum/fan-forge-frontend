import React, { PureComponent } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { fetchExhibit } from '../../utils/api';
import {
  PageWrapper,
  Card,
  Title,
  CarouselDiv,
  InformationDiv,
  DescriptionColumns,
  LikesDiv,
  TagsDiv,
  CommentsWrapper,
  CommentDiv,
  CommentsButton,
  ExtrasDiv,
  Tag
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

  renderTags() {
    return this.state.tags.map(item => (
      <Tag>{item}</Tag>
    ))
  }

  renderArtifacts() {
    return this.state.artifacts.map(item => (
      <div style={{backgroundColor:'red', border: 'green solid 2px', height: 'inherit', width: '100%'}}>
        <h1>
          {item.id}
          {item.description}
        </h1>
      </div>
    ));
  }

  render() {
    console.warn(this.state);
    const {title, description, comments, commentsOpen, artifacts, supporters} = this.state;
    if (!title) return <PageWrapper>Loading</PageWrapper>

    const commentComponents = comments.map(item =>
      <CommentDiv>
        <p>
          {item.text}
        </p>
        <p>
          {item.author}
        </p>
        <p>
          {item.created}
        </p>
      </CommentDiv>
    );

    return (
      <PageWrapper>
        <Card>
          <CarouselDiv>
            <Carousel
              showThumbs={false}
              showStatus={false}
              useKeyboardArrows
              height="400px"
              className="presentation-mode"
            >
              {this.renderArtifacts()}
            </Carousel>
          </CarouselDiv>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',     height: '35%'}}>
            <InformationDiv>
              <Title>{title}</Title>
              <DescriptionColumns>{description}</DescriptionColumns>
            </InformationDiv>
            <ExtrasDiv>
              <LikesDiv>
                <span>{supporters} supporters</span>
              </LikesDiv>
              <TagsDiv>
                TAGS {this.renderTags()}
              </TagsDiv>
              <CommentsButton onClick={() => this.setState({commentsOpen: !commentsOpen})}>View comments</CommentsButton>
            </ExtrasDiv>
            </div>
        </Card>

        {commentsOpen ? (
          <CommentsWrapper>
            <h3>Comment section</h3>
            {commentComponents}
          </CommentsWrapper>
        ) : null}
      </PageWrapper>
    );
  }
}

export default Exhibit;