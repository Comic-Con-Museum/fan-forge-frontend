import React, { PureComponent } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Survey from '../survey/index';

import { fetchExhibit } from '../../utils/api';
import { appURL } from '../../utils/constants';
import LikesImgSrc from '../../assets/LIKE.svg';
import {
  ComponentWrapper,
  Card,
  Title,
  CarouselDiv,
  ArtifactDiv,
  ArtifactImg,
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
      data: null,
      loaded: false,
      commentsOpen: false,
      showModal: false
    };
  }

  componentDidMount = () => {
    fetchExhibit(this.props.match.params.id).then(({data}) => this.setState({...data, loaded: true }));
  }

  showSupportModal = () => {
    this.setState({ showModal: true });
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
      <ArtifactDiv key={item.id}>
        <ArtifactImg src={`${appURL}/image/${item.id}`} style={{width: 'auto'}}/>
      </ArtifactDiv>
    ));
  }

  render = () => {
    const {title, description, comments, commentsOpen, loaded, supporters, id, showModal} = this.state;
    if (!loaded) return <Card>Loading</Card>

    const commentComponents = comments.map(item =>
      <CommentDiv>
        <p>{item.text}</p>
        <p>{item.author}</p>
        <p>{item.created}</p>
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
                  <LikesImg onClick={this.showSupportModal} src={LikesImgSrc}/>
                  {supporters} likes
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
        {showModal ? (
            <Survey
              exhibitId={this.props.match.params.id}
              alreadySupported={true}
              title={title}
              parentRef={this}
            />
        ) : null}

      </ComponentWrapper>
    );
  }
}

export default Exhibit;
