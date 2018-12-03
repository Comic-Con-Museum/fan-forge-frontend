import React, { Fragment, PureComponent } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { moveTo, randomInt } from '../../utils/helpers';
import { fetchExhibit, supportExhibit } from '../../utils/api';
import { appURL } from '../../utils/constants';
import LikesImgSrc from '../../assets/LIKE.svg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
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
  DescriptionAndExtrasDiv,
  InformationPlaceholder,
  ArtifactPlaceholder,
  SentencePlaceholder,
  TitlePlaceholder,
  CommentTitle,
  CommentInfo,
  CommentAuthor,
  CommentDate,
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
    commentsOpen: false
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

  toggleComments = () => {
    this.setState((prevState) => ({commentsOpen: !prevState.commentsOpen}))
  }

  renderTags = (tags = []) => {
    return (
      <TagsDiv>
         <p>TAGS</p> {tags.map((item, key) => (<Tag key={key}>{item}</Tag>))}
      </TagsDiv>
    )
  }
    
  renderArtifacts = (loading, artifacts) => {
    if (loading || artifacts.length == 0) { //TOOD: remove .length after we remove mock data from db
      return <ArtifactPlaceholder />
    } else {
      return artifacts.map((item, key) => 
        <ArtifactImg key={key} src={`${appURL}/image/${item.id}`} />
      )
    }
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
    const { loading, commentsOpen } = this.state;
    const {title, artifacts, tags, description, comments, supporters, id} = this.props.activeExhibit;
    const commentComponents = comments.map(item =>
      <CommentDiv>
        <p>{item.text}</p>
        <CommentInfo>
          <p>{item.author}</p>
          <p>{new Date(item.created).toLocaleDateString("en-US")}</p>
        </CommentInfo>
      </CommentDiv>
    );
    return (
      <Fragment>
        <Card onAnimationEnd={this.handleClosing} close={this.state.close}>
            <Close onClick={this.handleCloseButton} blackTheme={commentsOpen}> X </Close>
            <Carousel
              showThumbs={false}
              showStatus={false}
              useKeyboardArrows
            >
              {this.renderArtifacts(loading, artifacts)}
            </Carousel>
            <InformationDiv>  
              <Title> {loading ? <TitlePlaceholder /> : title}</Title>
              <DescriptionAndExtrasDiv>
                <DescriptionColumns>{loading ? <DescriptionPlaceholder /> : description}</DescriptionColumns>
                {loading ? '': 
                  <ExtrasDiv> 
                    <LikesDiv>
                      <LikesImg onClick={() => supportExhibit(id)} src={LikesImgSrc}/>  
                      {supporters} likes
                    </LikesDiv>
                    {this.renderTags(tags)}
                    <CommentsButton onClick={this.toggleComments}> READ {comments && comments.length || "..."} COMMENTS</CommentsButton>
                  </ExtrasDiv>
                }
              </DescriptionAndExtrasDiv>
            </InformationDiv>
            <CommentsWrapper show={commentsOpen}>
              <CommentTitle>Comment section</CommentTitle>
              {commentComponents}
            </CommentsWrapper>
        </Card>
  
        
      </Fragment>
    );
  }
}

export default Exhibit;