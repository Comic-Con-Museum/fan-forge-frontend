import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
  PageWrapper,
  Title
} from './StyledComponents';

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [], startIdx: 0, done: false };
        this.getNextExhibits = this.getNextExhibits.bind(this);
    }

    getNextExhibits() {
        if (this.state.done) {
            alert("There are no more exhibits at the time.");
            return;
        }

        const headers = {
            "Content-Type": "application/json",
            "Authorization": "Bearer zjones"
        };

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

    searchFor() {
        alert("Backend needs to do some sort of search here");
    }

    deleteExhibit(id) {
        // TODO add user confirmation that they do in fact want to delete
        const headers = {
            "Content-Type": "application/json",
            "Authorization": "Bearer zjones"
        }
        axios.delete(`http://localhost:8080/exhibit/${id}`, { headers: headers })
            .then(() => {
                const exhibits = this.state.items;
                // success remove from the list
                for (let i = 0; i < exhibits.length; i++) {
                    if (exhibits[i].id === id) {
                        exhibits.splice(i, 1); // remove the one
                    }
                }
                this.setState({ items: exhibits })
            })
            .catch(() => {
                alert("deleting exhibit failed. Please try again later");
            });
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
              <button onClick={() => this.deleteExhibit(item.id)}>Click to delete</button>
          </div>
      );

    }

    render() {
      return (
        <PageWrapper>
            <Link to="/submit">Go to Submit</Link>
            <Link to="/">Go to Feed</Link>
            <Title>This is the admin page.</Title>
            <form>
                <fieldset>
                    <legend>Sort by:</legend>
                    <div>
                        Popularity
                        <input type="radio" name="sort"/>
                    </div>
                    <div>
                        Date Created
                        <input type="radio" name="sort"/>
                    </div>
                </fieldset>
            </form>

            <div>
                <input id="search" />
                <button onClick={() => {this.searchFor}}>Search</button>
            </div>

            {this.renderItems()}
            <button onClick={this.getNextExhibits}>Load more</button>

        </PageWrapper>
      );
    }
}

// TODO -- we will need custom endpoints for the admin stuff, for now we can just use the other endpoints
//  can't delete anything since we aren't the owners of any content.

// TODO sort the actual elements once we have an API
// TODO get all the details, once the api is in place, including surveys

export default AdminPage;
