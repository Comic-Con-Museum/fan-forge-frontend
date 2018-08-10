import React from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import cardData from '../mockdata/cards.json'
import {connect} from "react-redux";
import ExhibitGroup from './feed/ExhibitGroup'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'redux-first-router-link'
import Spinner from './Spinner'
import axios from 'axios'
import '../css/Feed.css'


class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedType: this.props.feedType,
      items: [],
      displayedItems: [],
      hasMoreItems: true,
      isLoaded: false,
      searchString: ''
    }
    this.loadExhibits()
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
        items.push(
          <ExhibitGroup
            title={item.title}
            picture={item.images[0]}
            summary={item.summary}
            tags={item.tags}
            upvotes={item.upvotes}
          />
        )
      })
    }

    return (
      <div className='feed' style={{overflow:"auto"}}>
        <div className='exhibit-right'>
          <Card>
            <CardContent>
              <h1>
                Submit your own exhibit!
              </h1>
              <p>
                Here you can share your ideas for Comic-Con Museum exhibits and concepts, vote to support your favorite ideas to get them into reality!
              </p>
            </CardContent>
            <CardActions>
              <NavLink className='navLinkTab' activeClassName='active' to='/submit'>
                <Button size='small'>
                  Learn More
                </Button>
              </NavLink>
            </CardActions>
          </Card>
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
