import React, { Component } from 'react';

import {
  PageWrapper,
  Title
} from './StyledComponents';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageWrapper>
        <Title>Hey There</Title>
        <Title>This is a sample page: FEED</Title>
      </PageWrapper>
    );
  }
}

export default Feed;