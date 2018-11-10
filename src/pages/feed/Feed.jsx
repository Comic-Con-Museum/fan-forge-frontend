import React, { Component } from 'react';

import ExhibitCard from './ExhibitCard';
import {
  PageWrapper,
  ExhibitList
} from './StyledComponents';

const sampleData = {
  title: 'The timeless exhibit of spiderman',
  description: 'What can even go wrong with this kind of an exhibit? You already know him, he is your friendly neighbourhood spiderman. What can even go wrong with this kind of an exhibit? You already know him, he is your friendly neighbourhood spiderman What can even go wrong with this kind of an exhibit? You already know him, he is your friendly neighbourhood spiderman',
  tags: [
    'spiderman',
    'superhero'
  ],
  likeCount: 988,
  imageUrl: 'adf'
}

const dataArr = [
  sampleData,
  sampleData,
  sampleData,
  sampleData,
  sampleData,
  sampleData,
  sampleData,
  sampleData,
  sampleData,
  sampleData
]

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageWrapper>
          <ExhibitList>
            {dataArr.map((item) => <ExhibitCard {...item} />)}
          </ExhibitList>
      </PageWrapper>
    );
  }
}

export default Feed;