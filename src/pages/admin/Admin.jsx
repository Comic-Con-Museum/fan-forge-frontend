import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
  PageWrapper,
  Title
} from './StyledComponents';

class Admin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <PageWrapper>
          <Link to="/submit">Go to Submit</Link>
          <Title>This is the feed.</Title>
          {this.renderItems()}
          <button onClick={this.getNextExhibits}>Load more</button>
        </PageWrapper>
      );
    }
}

export default Admin;
