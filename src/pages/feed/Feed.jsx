import React, { Component } from 'react';

import ExhibitCard from './ExhibitCard';
import {
  PageWrapper,
  Title,
  ControlCard,
  ContentContainer,
  SearchInput,
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
          <ExhibitList>
            <ExhibitCard {...sampleData}/>
          </ExhibitList>
        </ContentContainer>
      </PageWrapper>
    );
  }
}

export default Feed;