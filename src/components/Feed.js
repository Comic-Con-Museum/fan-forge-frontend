import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Link } from 'react-router-dom'

import ExhibitLoader from './ExhibitLoader'
import Spinner from './Spinner'

import { elementInViewport } from '../helpers';

import '../css/Feed.css'

class Feed extends React.Component {
  static reloadOnReroute() {
    window.location.reload();
  }

  constructor(props) {
    super(props);
    this.exhibitLoader = new ExhibitLoader();
    this.state = {
      items: [],
      hasMoreItems: true,
      isLoaded: false,
      searchString: ''
    };
    this.menuRef = null;
    this.topbarImgRef = null;
    this.makeNavbarFixed = this.makeNavbarFixed.bind(this);
    this.getAnotherExhibit = this.getAnotherExhibit.bind(this);
  }

  componentDidMount() {
    this.topbarImgRef = document.querySelector('.bannerImg');
    this.menuRef = document.querySelector('.topnavbar');
    window.addEventListener('scroll', this.makeNavbarFixed);

    // start loading some exhibits
    this.getAnotherExhibit();
  }

  componentWillUnmount() {
    this.menuRef.classList.remove('sticked_to_top');
    window.removeEventListener('scroll', this.makeNavbarFixed);
  }

  makeNavbarFixed() {
    if (elementInViewport(this.topbarImgRef)) {
      this.menuRef.classList.add('sticked_to_top');
    }
    else {
      this.menuRef.classList.remove('sticked_to_top');
    }
  }

  getAnotherExhibit() {
    this.exhibitLoader.getNext(card => {
      if (!card) {
        this.setState({
          hasMoreItems: false
        });
      }
      else if (card !== 'loading') {
        // append, using the concat since want new object
        this.setState(state => ({
          items: state.items.concat([card]),
          isLoaded: true
        }));
      }
    });
  }

  render() {
    const loading = <Spinner />;
    if (this.state.items.length === 0 && this.state.isLoaded) {
      return <p>No items found</p>;
    }

    return (
      <div className='feed' style={{ overflow: 'auto' }}>
        <div className='exhibit-right'>
          <Link className='submit-exhibit-card-nav' activeClassName='active' to='/submit'>
            <Card className='submit-exhibit-card'>
              <CardContent>
                <h1>
                  Submit your own exhibit!
                </h1>
              </CardContent>
            </Card>
          </Link>
          <div className='tag-search-container'>
            <TextField
              className='tag-search'
              id='password-input'
              label='Search by tag'
              autoComplete='Batman'
              margin='normal'
              onChange={event => this.setState({ searchString: event.target.value })}
            />
            <Link className='navLinkTab' activeClassName='active' to={`/feed/tagged-${this.state.searchString}`}>
              <Button color='primary' onClick={() => Feed.reloadOnReroute()}> Search </Button>
            </Link>
          </div>
        </div>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.getAnotherExhibit}
          hasMore={this.state.hasMoreItems}
          loader={loading}
        >
          {this.state.items}
        </InfiniteScroll>
      </div>
    )
  }
}

export default Feed;
