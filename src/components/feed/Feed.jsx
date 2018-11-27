import { defaultTag } from '../../utils/constants';
import React, { PureComponent } from 'react';
import { fetchFeed } from '../../utils/api';
import ExhibitCard from './ExhibitCard';
import {
  PageWrapper,
  ExhibitList,
  PageChanger
} from './Styled';

 class Feed extends PureComponent {
  updateFeed = () => {
    let {setActiveCalls, setFeed, setErrors, sortOption, filterTag, feedPageIndex} = this.props;
    if (defaultTag.value == filterTag) {
      filterTag = undefined;
    }
    
    setActiveCalls({'feed': true})
    fetchFeed(feedPageIndex, sortOption, filterTag).then(result => {
      setFeed(result.data.exhibits)
      setActiveCalls({'feed': false})
    }).catch(error => {
      console.log(error)
      setActiveCalls({'feed': false})
      setErrors({'feed': error})
    });
  }

  shouldUpdateFeed = prevProps => {
    const {sortOption, filterTag, feedPageIndex} = this.props;
    console.log(prevProps);
     return prevProps.sortOption !== sortOption
    || prevProps.filterTag !== filterTag
    || prevProps.feedPageIndex !== feedPageIndex
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
    const { feed } = this.props
    return (
      <PageWrapper>
          <ExhibitList>
            {feed.map((item, index) => <ExhibitCard key={index} {...item} />)}
          </ExhibitList>
      </PageWrapper>
    );
  }
}
 export default Feed; 
