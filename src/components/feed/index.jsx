import { fetchFeed, pageSize } from '../../utils/api';
import ExhibitCard from '../exhibitCard/index';
import Footer from '../footer/index';
import { moveTo } from '../../utils/helpers';
import { defaultTag } from '../../utils/constants';
import React, { Fragment, PureComponent } from 'react';
import {
  PageWrapper,
  ExhibitList,
  PageChanger,
  Pagination,
  PageNumber,
  PageNavigate,
  FeedContainer,
  PaginationShadow
} from './Styled';

 class Feed extends PureComponent {
  state = {
    feedSize : 0
  }

  updateFeed = () => {
    let {setActiveCalls, setFeed, setErrors, sortOption, filterTag, feedIndex} = this.props;
    if (defaultTag.value == filterTag) {
      filterTag = undefined;
    }
    
    setActiveCalls({'feed': true})
    fetchFeed(feedIndex, sortOption, filterTag).then(result => {
      setFeed(result.data.exhibits)
      setActiveCalls({'feed': false})
      this.setState({feedSize: result.data.count})
    }).catch(error => {
      console.log(error)
      setActiveCalls({'feed': false})
      setErrors({'feed': error})
    });
  }

  shouldUpdateFeed = prevProps => {
    const {sortOption, filterTag, feedIndex} = this.props;
    return prevProps.sortOption !== sortOption
    || prevProps.filterTag !== filterTag
    || prevProps.feedIndex !== feedIndex
  }
  
  navigatePage = (direction) => () => {
    if (direction === "forwards") {
      console.log(pageSize);
      this.props.setIndex(this.props.feedIndex + pageSize)
      moveTo.move(document.body)
    } else if (direction === "backwards") {
      if (this.props.feedIndex !== 0) {
        this.props.setIndex(this.props.feedIndex - pageSize)
        moveTo.move(document.body)
      }
    }
  }

  componentDidMount() {
    if (this.props.setFeed) {  
      this.updateFeed();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.shouldUpdateFeed(prevProps)) {
      this.updateFeed();
    }
  }

  render() {
    const { feed, feedIndex } = this.props

    return (
      <FeedContainer>
        <ExhibitList>
          {feed.map((item, index) => <ExhibitCard key={index} {...item} />)}
        </ExhibitList>
        <Pagination hidden={feedIndex + pageSize > this.state.feedSize && feedIndex == 0}>
          <PageNavigate label="Previous page" hidden={feedIndex == 0} onClick={this.navigatePage("backwards")}>{"<"}</PageNavigate> 
          <PageNumber> Page {feedIndex / pageSize + 1}</PageNumber>
          <PageNavigate label="Next page" hidden={feedIndex + pageSize > this.state.feedSize} onClick={this.navigatePage("forwards")}>{">"} </PageNavigate>
        </Pagination>
      </FeedContainer>
    )
  }
}

export default Feed; 
