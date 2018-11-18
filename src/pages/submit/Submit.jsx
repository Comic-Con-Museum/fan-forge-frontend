import React, { PureComponent } from 'react';

import {
  PageWrapper,
  Title
} from './StyledComponents';

class Submit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageWrapper>
        <Title>Hey There</Title>
        <Title>This is a sample page: SUBMIT</Title>
      </PageWrapper>
    );
  }
}

export default Submit;