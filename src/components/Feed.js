import React from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import {connect} from "react-redux";
import ExhibitCard from './ExhibitCard'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'redux-first-router-link'
import Spinner from './Spinner'
import axios from 'axios'
import { elementInViewport } from '../helpers';

import '../css/Feed.css'

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedType: this.props.feedType,
      eid: this.props.eid,
      items: [],
      displayedItems: [],
      hasMoreItems: true,
      isLoaded: false,
      searchString: ''
    }
    this.loadExhibits()
    this.menuRef = undefined
    this.topbarImgRef = undefined
    this.makeNavbarFixed = this.makeNavbarFixed.bind(this);
  }

  componentDidMount() {
    this.topbarImgRef = document.querySelector('.bannerImg');
    this.menuRef = document.querySelector('.topnavbar');
    window.addEventListener("scroll", this.makeNavbarFixed);
  }

  componentWillUnmount() {
    this.menuRef.classList.remove('sticked_to_top');
    window.removeEventListener("scroll", this.makeNavbarFixed);
  }

  makeNavbarFixed() {
    if(elementInViewport(this.topbarImgRef)) {
      this.menuRef.classList.add('sticked_to_top');
    } else {
      this.menuRef.classList.remove('sticked_to_top');
    }
  }

  loadExhibits() {
    const apiEndpoint = this.state.feedType.slice(0,7) ==='tagged-' ? `feed/tagged/${this.state.feedType.slice(7)}` : `feed/${this.state.feedType}`
    axios.get(apiEndpoint)
        .then(data => {
            if (Object.keys(data.data).length === 0) {
              this.setState({isLoaded: true})
            } else {
                this.state.displayedItems.push(data.data[0])
                this.setState({items: data.data.slice(1), displayedItems: this.state.displayedItems, isLoaded: true})
            }
        }).catch(err =>
        console.log(err))
  }

  loadMoreDisplayedItems() {
    if (this.state.items.length === 0) {
      if (this.state.isLoaded === true) {
          this.setState({
            hasMoreItems: false
        })
      }
      return
    }
    const newItem = this.state.items.shift()
    this.state.displayedItems.push(newItem)
    this.setState({
      items: this.state.items,
      displayedItems: this.state.displayedItems
    })
  }

  reloadOnReroute() {
    window.location.reload()
  }

  renderFilterButtons() {
    switch (this.props.feedType) {
      case 'new':
        return (
          <div className='filter-container'>
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/hot'>
              <Button color='primary' onClick={() => this.reloadOnReroute()}> Hot </Button>
            </NavLink>
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/new'>
              <Button color='secondary' onClick={() => this.reloadOnReroute()}> New </Button>
            </NavLink>
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/curated'>
              <Button color='primary' onClick={() => this.reloadOnReroute()}> Curator Picks </Button>
            </NavLink>
          </div>
        )
      case 'approved':
        return (
          <div className='filter-container'>
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/hot'>
              <Button color='primary' onClick={() => this.reloadOnReroute()}> Hot </Button>
            </NavLink>
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/new'>
              <Button color='primary' onClick={() => this.reloadOnReroute()}> New </Button>
            </NavLink>
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/curated'>
              <Button color='primary' onClick={() => this.reloadOnReroute()}> Curator Picks </Button>
            </NavLink>
          </div>
        )
      case 'curated':
        return (
          <div className='filter-container'>
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/hot'>
              <Button color='primary' onClick={() => this.reloadOnReroute()}> Hot </Button>
            </NavLink>
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/new'>
              <Button color='primary' onClick={() => this.reloadOnReroute()}> New </Button>
            </NavLink>
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/curated'>
              <Button color='secondary' onClick={() => this.reloadOnReroute()}> Curator Picks </Button>
            </NavLink>
          </div>
        )
      case 'hot':
      default:
        return (
          <div className='filter-container'>
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/hot'>
              <Button color='secondary' onClick={() => this.reloadOnReroute()}> Hot </Button>
            </NavLink>
            <NavLink className='navLinkTab' activeClassName='active' refresh='true' to='/feed/new'>
              <Button color='primary' onClick={() => this.reloadOnReroute()}> New </Button>
            </NavLink>
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/curated'>
              <Button color='primary' onClick={() => this.reloadOnReroute()}> Curator Picks </Button>
            </NavLink>
          </div>
        )
    }
  }

  render() {
    const loading = <Spinner/>
    const items = []
    if (this.state.displayedItems.length === 0) {
      if (this.state.isLoaded) {
        return <p>No items found</p>
      }
    } else {
      this.state.displayedItems.forEach(item => {
        console.log(item)
        items.push(
          <ExhibitCard
            title={item.title}
            picture={item.images[0]}
            summary={item.summary}
            tags={item.tags}
            eid={item.eid}
            upvotes={item.upvotes}
            author={item.uid || 'unknown user'}
          />
        )
      })
    }

    return (
      <div className='feed' style={{overflow:"auto"}}>
        <div className='exhibit-right'>
          <NavLink className='submit-exhibit-card-nav' activeClassName='active' to='/details'>
            <Card className='submit-exhibit-card'>
              <CardContent>
                <h1>
                  Submit your own exhibit!
                </h1>
              </CardContent>
            </Card>
          </NavLink>
          {this.renderFilterButtons()}
          <div className='tag-search-container'>
            <TextField
              className='tag-search'
              id="password-input"
              label="Search by tag"
              autoComplete="Batman"
              margin="normal"
              onChange={event => this.setState({ searchString: event.target.value })}
            />
            <NavLink className='navLinkTab' activeClassName='active' to={`/feed/tagged-${this.state.searchString}`}>
              <Button color='primary' onClick={() => this.reloadOnReroute()}> Search </Button>
            </NavLink>
          </div>
        </div>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMoreDisplayedItems.bind(this)}
          hasMore={this.state.hasMoreItems}
          loader={loading}>
            {items}
        </InfiniteScroll>
      </div>
    )
  }
}

const mapStateToProps = ({ page, feed }) => ({ page:page, feedType:feed });
export default connect(mapStateToProps)(Feed);
