import React from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import {connect} from "react-redux";
import ExhibitCard from './ExhibitCard'
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


class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedType: this.props.feedType,
      eid: this.props.eid,
      items: [],
      displayedItems: [],
      hasMoreItems: true,
      isLoaded: false
    }
    this.loadExhibits()
  }

  loadExhibits() {
    axios.get("/feed/" + this.state.feedType)
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

  renderFilterButtons() {
    switch (this.props.feedType) {
      case 'new':
        return (
          <div className='filter-container'>
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/hot'>
              <Button color='primary'> Hot </Button>
            </NavLink>
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/new'>
              <Button color='secondary'> New </Button>
            </NavLink>
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/curated'>
              <Button color='primary'> Curator Picks </Button>
            </NavLink>
          </div>
        )
      case 'approved':
        return (
          <div className='filter-container'>
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/hot'>
              <Button color='primary'> Hot </Button>
            </NavLink>
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/new'>
              <Button color='primary'> New </Button>
            </NavLink>
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/curated'>
              <Button color='primary'> Curator Picks </Button>
            </NavLink>
          </div>
        )
      case 'curated':
        return (
          <div className='filter-container'>
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/hot'>
              <Button color='primary'> Hot </Button>
            </NavLink>
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/new'>
              <Button color='primary'> New </Button>
            </NavLink>
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/curated'>
              <Button color='secondary'> Curator Picks </Button>
            </NavLink>
          </div>
        )
      case 'hot':
      default:
        return (
          <div className='filter-container'>
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/hot'>
              <Button color='secondary'> Hot </Button>
            </NavLink>
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/new'>
              <Button color='primary'> New </Button>
            </NavLink>
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/curated'>
              <Button color='primary'> Curator Picks </Button>
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
          <ExhibitCard
            title={item.title}
            picture={item.images[0]}
            summary={item.summary}
            tags={item.tags}
            eid={item.eid}
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
          <TextField
            className='tag-search'
            id="password-input"
            label="Search by tag"
            type="password"
            autoComplete="current-password"
            margin="normal"
          />
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
