import React, { PureComponent } from 'react';
import axios from 'axios';
import ExhibitCard from './ExhibitCard';
import {
  PageWrapper,
  ExhibitList,
  PageChanger
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
      onLastPage: false,
      pageSize: 10
    };
  }

  componentDidMount() {
    this.getExhibits();
  }

  getExhibits(forward = true) {
    const {index, pageSize} = this.state;
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer zjones"
    }

    console.warn('state', this.state)
    console.warn('for', forward)

    axios.get(`https://fan-forge-dev.herokuapp.com/feed/new?startIdx=${forward ? index : index - pageSize}`, { headers: headers })
    .then(({data}) => {
        console.warn('data', data);
        this.setState({
          index: forward ? index + data.pageSize : index - data.pageSize,
          content: data.exhibits,
          onLastPage: index > data.count,
          pageSize: data.pageSize
        })
    })
    .catch(() => { this.setState({error: true}) });
  }

  changePage = (event) => {
    console.log('changePage', event.target.id)
    this.getExhibits(event.target.id === 'NEXT');
  }

  render() {
    const {content, error} = this.state;
    if (error) return <div>Sorry, but there was an error on our side. Try refreshing.</div>

    if (!content) {
      return <div>Loading</div>
    }

    return (
      <PageWrapper>
          <PageChanger id="NEXT" onClick={this.changePage} next/>
          <PageChanger id="BACK" onClick={this.changePage} />
          <ExhibitList>
            {content.map((item, index) => <ExhibitCard key={index} {...item} />)}
          </ExhibitList>
      </PageWrapper>
    );
  }
}

export default Feed;