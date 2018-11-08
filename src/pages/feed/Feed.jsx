import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
  PageWrapper,
  Title
} from './StyledComponents';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], startIdx: 0, done: false };
    this.getNextExhibits = this.getNextExhibits.bind(this);
  }

  componentDidMount() {
      //this.getNextExhibits();
  }

  getNextExhibits() {
      if (this.state.done) {
          alert("There are no more exhibits at the time.");
          return;
      }

      const headers = {
          "Content-Type": "application/json",
          "Authorization": "Bearer zjones"
      }

      axios.get(`http://localhost:8080/feed/new?startIdx=${this.state.startIdx}`, { headers: headers })
        .then(res => {
            const resp = res.data;
            const total = resp.count;
            const pageSize = resp.pageSize;
            const currentItems = this.state.items;
            const startIdx = this.state.startIdx;
            const newItems = currentItems.concat(resp.exhibits);
            this.setState({
                items: newItems,
                startIdx: startIdx + pageSize
            });
            if (startIdx >= total) {
                this.setState({ done: true });
            }
        })
        .catch(() => { alert("Unable to load the feed, please try again later."); });
  }

  showPopup(id) {

      const headers = {
          "Content-Type": "application/json",
          "Authorization": "Bearer zjones"
      }
      axios.get(`http://localhost:8080/exhibit/${id}`, { headers: headers })
        .then(res => {
            const resp = res.data;
            alert(JSON.stringify(resp));
        })
        .catch(() => { alert("Unable to load the detail page, please try again later."); });
  }

  renderItems() {
      const items = this.state.items.map(i => this.renderItem(i));
      return (
          <div>{items}</div>
      )
  }

  renderItem(item) {
    return (
        <div key={item.id}>
            <p>Title: {item.title}</p>
            <p>Description: {item.description}</p>
            <p>Supporters: {item.supporters}</p>
            <p>You supported it: {item.supported}</p>
            <button onClick={() => this.showPopup(item.id)}>Show detail</button>
        </div>
    );

  }

  render() {
    return (
      <PageWrapper>
        <Link to="/submit">Go to Submit</Link>
        <Title>This is the feed.</Title>
        {this.renderItems()}
        <button onClick={this.getNextExhibits}>Load more</button>
      </PageWrapper>
    );
  }
}

export default Feed;
