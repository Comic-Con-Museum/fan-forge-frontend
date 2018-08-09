import React from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import ExhibitCard from './feed/ExhibitCard'
import cardData from '../mockdata/cards.json'
import {Submit} from "./Submit";
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

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedType: this.props.feedType,
      items: [],
      hasMoreItems: true
    }
    console.log(this.state)
  }

  loadItems(page) {
    const i = this.state.items
    const newOne = cardData.shift() // remove first element and return it
    if (newOne === undefined) { // no more
      this.setState({
        hasMoreItems: false
      })
    } else {
      i.push(newOne)
      this.setState({
        items: i
      })
    }
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
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/approved'>
              <Button color='primary'> Approved exhibits </Button>
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
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/approved'>
              <Button color='secondary'> Approved exhibits </Button>
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
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/approved'>
              <Button color='primary'> Approved exhibits </Button>
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
            <NavLink className='navLinkTab' activeClassName='active' to='/feed/approved'>
              <Button color='primary'> Approved exhibits </Button>
            </NavLink>
          </div>
        )
    }
  }

  render() {
    const loading = <div key="uniqueKey" className="loader">Loading ...</div>
    const items = []
    if (this.state.items.length === 0) {
      items.push(
        <p key='hi'>There are currently no items</p>
      )
    }
    this.state.items.map((item, i) => {
      items.push(
        <ExhibitGroup
          title={item.title}
          picture={item.picture}
          summary={item.summary}
          tags={item.tags}
        />
      )
    })

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
          loadMore={this.loadItems.bind(this)}
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
