import React, { PureComponent } from 'react';
import ExhibitCard from '../ExhibitCard';
import {
  PageWrapper,
  ExhibitList,
  PageChanger
} from './Styled';

class Feed extends PureComponent {
  render() {
    const { content } = this.props
    return (
      <PageWrapper>
          <ExhibitList>
            {content.map((item, index) => <ExhibitCard key={index} {...item} />)}
          </ExhibitList>
      </PageWrapper>
    );
  }
}

export default Feed;