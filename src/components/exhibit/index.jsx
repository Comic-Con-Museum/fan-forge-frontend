import React, { PureComponent } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { fetchExhibit, supportExhibit } from '../../utils/api';
import LikesImgSrc from '../../assets/LIKE.svg';
import {
  ComponentWrapper,
  Card,
  Title,
  CarouselDiv,
  InformationDiv,
  DescriptionColumns,
  LikesDiv,
  LikesImg,
  TagsDiv,
  CommentsWrapper,
  CommentDiv,
  CommentsButton,
  ExtrasDiv,
  Tag,
  CommentsCloseButton,
  DescriptionAndExtrasDiv
} from './Styled';

class Exhibit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount = () => {
    fetchExhibit(this.props.match.params.id).then(({data}) => this.setState(data));
  }

  toggleComments = () => {
    this.setState({commentsOpen: !this.state.commentsOpen})
  }

  renderTags = () => {
    return this.state.tags.map(item => (
      <Tag>{item}</Tag>
    ))
  }

  renderArtifacts = () => {
    return this.state.artifacts.map(item => (
      <div style={{backgroundColor:'yellow', height: '50vh', width: '100%'}}>
        <h1>
          {item.id}
          {item.description}
        </h1>
      </div>
    ));
  }

  render = () => {
    console.warn(this.state);
    const {title, description, comments, commentsOpen, artifacts, supporters, id} = this.state;
    if (!title) return <Card>Loading</Card>

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
      <ComponentWrapper>
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
          <InformationDiv>
            <Title>{title}</Title>
            <DescriptionAndExtrasDiv>
              <DescriptionColumns>{description}</DescriptionColumns>
              <ExtrasDiv>
                <LikesDiv>
                  <LikesImg onClick={() => supportExhibit(id)} src={LikesImgSrc}/>
                  <span>{supporters} likes</span>
                </LikesDiv>
                <TagsDiv>
                  TAGS {this.renderTags()}
                </TagsDiv>
                <CommentsButton onClick={this.toggleComments}>READ {comments.length} COMMENTS</CommentsButton>
              </ExtrasDiv>
            </DescriptionAndExtrasDiv>
          </InformationDiv>
        </Card>

        {commentsOpen ? (
          <CommentsWrapper>
            <CommentsCloseButton onClick={this.toggleComments}>X</CommentsCloseButton>
            <h3>Comment section</h3>
            {commentComponents}
          </CommentsWrapper>
        ) : null}
      </ComponentWrapper>
    );
  }
}

export default Exhibit;