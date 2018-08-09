import React from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import ExhibitCard from './ExhibitCard'
import cardData from '../mockdata/cards.json'

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      hasMoreItems: true
    }
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
        <li key={i.toString()}>
          <ExhibitCard
            title={item.title}
            picture={item.picture}
            summary={item.summary}
          />
        </li>
      )
    })
    console.log(items.length)

    return (
      <div className='feed' style={{overflow:"auto"}}>
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

export default Feed
