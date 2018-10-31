import React, { Component } from 'react';

import {
  PageWrapper,
  Title,
  ControlCard,
  ContentContainer,
  SearchInput
} from './StyledComponents';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageWrapper>
        <Title>Explore exhibit ideas</Title>
        <ContentContainer>
          <ControlCard>
            <SearchInput placeholder="Search exhibits..."/>
          </ControlCard>
          <ControlCard />
        </ContentContainer>
      </PageWrapper>
    );
  }
}

export default Feed;