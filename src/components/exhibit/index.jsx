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
  Close
} from './Styled';
import './styles.scss';

const DescriptionPlaceholder = props => {
  return (
    <Fragment>
      {Array.from(Array(randomInt(8,30))).map(index => <SentencePlaceholder key={index} />)}
    </Fragment>
  )
} 

class Exhibit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      commentsOpen: false
    };
  }

  componentDidMount = () => {
    if (this.props.activeExhibit.id == undefined) {
      this.fetchExhibits()
    } else {
      this.setState({loading: false})
    }
  }

  componentDidUpdate = (prevProps) => {
    console.log(prevProps)
    if (prevProps.match.params.id !== this.props.match.params.id) {
     this.fetchExhibits() 
    }
  }

  fetchExhibits = () => {
    this.setState({loading: true})
    moveTo.move(document.body, {
      callback: () => {
        //TODO: Look into moving this outside the callback and making sure the scroll top animation is good
        fetchExhibit(this.props.match.params.id).then(({data}) => {
          this.props.setActiveExhibit(data)
          this.setState({loading: false})
        })
      }
    })
  }

  toggleComments = () => {
    this.setState({commentsOpen: !this.state.commentsOpen})
  }

  renderTags = () => {
    return this.state.tags.map(item => (
      <Tag>{item}</Tag>
    ))
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

  render = () => {  
    const { loading } = this.state;
    const {title, artifacts, description, comments, commentsOpen, supporters, id} = this.props.activeExhibit;
    console.log(this.props)
    // const commentComponents = comments.map(item =>
    //   <CommentDiv>
    //     <p>{item.text}</p>
    //     <p>{item.author}</p>
    //     <p>{item.created}</p>
    //   </CommentDiv>
    // );
    return (
      <Fragment>
        <Card>
            <Close onClick={() => this.props.history.push('/')}> X </Close>
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
                <ExtrasDiv>
                  <LikesDiv>
                    <LikesImg onClick={() => supportExhibit(id)} src={LikesImgSrc}/>  
                    {supporters} likes
                  </LikesDiv>
                  <TagsDiv>
                    {/* TAGS {this.renderTags()} */}
                  </TagsDiv>
                  {/* <CommentsButton onClick={this.toggleComments}>READ {comments.length} COMMENTS</CommentsButton> */}
                </ExtrasDiv>
              </DescriptionAndExtrasDiv>
            </InformationDiv>
        </Card>
  
        {/* {commentsOpen ? (
          <CommentsWrapper>
            <CommentsCloseButton onClick={this.toggleComments}>X</CommentsCloseButton>
            <h3>Comment section</h3>
            {commentComponents}
          </CommentsWrapper>
        ) : null} */}
      </Fragment>
    );
  }
}

export default Exhibit;