import React, { PureComponent } from 'react';
import axios from 'axios';
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
  imageUrl: 'https://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/marvel-spider-man-season-2-animated-series.jpg?itok=2b4vodb7'
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
class Feed extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      error: false,
      index: 0,
      onLastPage: false
    };
  }

  componentDidMount() {
    this.getExhibits();
  }

  getExhibits() {
    const {index} = this.state;
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer zjones"
    }

    axios.get(`https://fan-forge-dev.herokuapp.com/feed/new?startIdx=${index}`, { headers: headers })
    .then(({data}) => {
        console.warn('data', data);
        this.setState({
          index: index + data.pageSize,
          content: data.exhibits,
          onLastPage: index > data.count
        })
    })
    .catch(() => { this.setState({error: true}) });
  }

  render() {
    const {content, error} = this.state;
    if (error) return <div>Sorry, but there was an error on our side. Try refreshing.</div>

    if (!content) {
      return <div>Loading</div>
    }

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