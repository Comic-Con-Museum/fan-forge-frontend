import React from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import cardData from '../mockdata/cards.json'
import {connect} from "react-redux";
import ExhibitGroup from './feed/ExhibitGroup'
import Spinner from './Spinner'
import axios from 'axios'

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedType: this.props.feedType,
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
          console.log("here")
          this.setState({
            hasMoreItems: false
        })
      }
      return
    }
    console.log("load more")
    const newItem = this.state.items.shift()
    this.state.displayedItems.push(newItem)
    this.setState({
      items: this.state.items,
      displayedItems: this.state.displayedItems
    })

  }

  render() {
    const loading = <Spinner/>
    const items = []
    if (this.state.displayedItems.length === 0) {
      if (this.state.isLoaded) {
        return <p>No items found</p>
      }
    } else {
      console.log("before forEach")
      console.log(JSON.stringify(this.state.displayedItems))
      this.state.displayedItems.forEach((item) => {
        items.push(
          <ExhibitGroup
            title={item.title}
            picture={item.picture}
            summary={item.summary}
            tags={item.tags}
          />
        )
      })
    }

    return (
      <div className='feed' style={{overflow:"auto"}}>
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