import React, { Fragment, PureComponent } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { moveTo, randomInt } from '../../utils/helpers';
import { fetchExhibit, supportExhibit } from '../../utils/api';
import Survey from '../survey/index';
import { appURL } from '../../utils/constants';
import LikesImgSrc from '../../assets/like.svg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Comments } from '../comments/';
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
  DescriptionAndExtrasDiv,
  InformationPlaceholder,
  ArtifactPlaceholder,
  SentencePlaceholder,
  TitlePlaceholder,
  Close
} from './Styled';
import './styles.scss';

const DescriptionPlaceholder = props => {
  return (
    <Fragment>
      {[1,2,3,4,5,6,7].map(index => <SentencePlaceholder key={index} />)}
    </Fragment>
  )
}

class Exhibit extends PureComponent {
  state = {
    loading: true,
    commentsOpen: false,
    showModal: false
  }

  componentDidMount = () => {
    if (this.props.activeExhibit.id != this.props.match.params.id) {
      this.fetchExhibits()
    } else {
      this.setState({loading: false})
    }
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.match.params.id !== this.props.match.params.id) {
     this.fetchExhibits() 
    }
  }

  fetchExhibits = () => {
    this.setState({loading: true})
    fetchExhibit(this.props.match.params.id).then(({data}) => {
      this.props.setActiveExhibit(data)
      this.setState({loading: false})
    })
  }
  
  showSupportModal = () => {
    this.setState({ showModal: true });
  }

  toggleComments = () => {
    this.setState((prevState) => ({commentsOpen: !prevState.commentsOpen}))
  }
    
  renderArtifacts = (loading, artifacts) => {
    let artifactSlides;

    if (loading || artifacts.length == 0) { //TOOD: remove .length after we remove mock data from db
      artifactSlides = <ArtifactPlaceholder />
    } else {
      artifactSlides = artifacts.map((item, key) => 
        <ArtifactImg key={key} src={`${appURL}/image/${item.id}`} />
      )
    }

    return  <Carousel showThumbs={false} showStatus={false} useKeyboardArrows>{artifactSlides}</Carousel>;
  }

  handleCloseButton = () => {
    if (this.state.commentsOpen) {
      this.setState((prevState) => ({commentsOpen: false}))
    } else {
      this.setState({close: true})
    }
  }

  handleClosing = () => {
    if (this.state.close) {
      this.props.history.push('/')
    }
  }

  render = () => {
    const { loading, commentsOpen, showModal, supported } = this.state;
    const {title, artifacts, tags, description, comments, supporters, id} = this.props.activeExhibit;

    return (
      <Fragment>
        <Card onAnimationEnd={this.handleClosing} close={this.state.close}>
            <Close onClick={this.handleCloseButton} blackTheme={commentsOpen}> X </Close>
            {this.renderArtifacts(loading, artifacts)}
            <InformationDiv>  
              <Title> {loading ? <TitlePlaceholder /> : title}</Title>
              <DescriptionAndExtrasDiv>
                <DescriptionColumns>{loading ? <DescriptionPlaceholder /> : description}</DescriptionColumns>
                {loading ? '': 
                  <ExtrasDiv> 
                    <LikesDiv>
                    <svg className="likeButton" onClick={this.showSupportModal} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.94 24.31">
                      <polygon points="13.71 24.31 0 12.96 1.16 11.56 5.58 13.76 2.76 9.63 3.68 8.51 13.35 16.5 29.85 0 31.15 1.3 28.67 5.32 32.83 2.98 33.94 4.08 13.71 24.31"/>
                    </svg>
                    {supporters} SUPPORTERS
                    </LikesDiv>
                    {tags && <TagsDiv>
                        <p>TAGS</p> {tags.map((item, key) => (<Tag key={key}>{item}</Tag>))}
                    </TagsDiv>}
                    <CommentsButton onClick={this.toggleComments}> READ {comments && comments.length || "..."} COMMENTS</CommentsButton>
                  </ExtrasDiv>
                }
              </DescriptionAndExtrasDiv>
            </InformationDiv>
            <Comments exhibit={id} show={commentsOpen} comments={comments} />
        </Card>
        {showModal ? (
            <Survey
              exhibitId={id}
              alreadySupported={supported}
              title={title}
              parentRef={this}
            />
        ) : null}
      </Fragment>
    );
  }
}

export default Exhibit;
