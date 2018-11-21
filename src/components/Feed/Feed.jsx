import React, { PureComponent } from 'react';
import axios from 'axios';
import ExhibitCard from './ExhibitCard';
import {
  PageWrapper,
  ExhibitList,
  PageChanger
} from './StyledComponents';

class Feed extends PureComponent {
  render() {
    const { content } = this.props
    return (
      <PageWrapper>
          {/* TO REDO, this component shouldn't have state
          <PageChanger id="NEXT" onClick={this.changePage} next/>
          <PageChanger id="BACK" onClick={this.changePage} /> */}
          <ExhibitList>
            {content.map((item, index) => <ExhibitCard key={index} {...item} />)}
          </ExhibitList>
      </PageWrapper>
    );
  }
}

export default Feed;