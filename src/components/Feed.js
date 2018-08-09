import React from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import ExhibitCard from './feed/ExhibitCard'
import cardData from '../mockdata/cards.json'
import {Submit} from "./Submit";
import {connect} from "react-redux";
import ExhibitGroup from './feed/ExhibitGroup'
import axios from 'axios'

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedType: this.props.feedType,
      items: [],
      hasMoreItems: true,
      isLoaded: false
    }
    this.loadExhibits()

  }

  loadExhibits() {
    axios.get("/exhibit/005b03ea-32dd-4ac0-ac7d-40cb522de089")
        .then(data => {
            console.log(data)
            this.setState({example: data.data.title, isLoaded: true})
        }).catch(err =>
        console.log(err))
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