import axios from 'axios';
import React from 'react';

import ExhibitCard from './ExhibitCard';


class ExhibitLoader {
  constructor() {
    this.start = 0;
    // future add in search tags
    this.cached = [];
    this.isDone = false;
    this.isLoading = false;
  }

  // gets the next exhibitCard, or null if reached the end
  //   this method will not always make a network call as it uses a cache.
  // calls the completionHandler with the result, null if no more left, or 'loading' if loading more
  getNext(completionHandler) {
    if (this.cached.length > 0) {
      completionHandler(this.cached.shift());
      return;
    }
    // reached the end of the list
    if (this.isDone) {
      completionHandler(null);
      return;
    }
    if (this.isLoading) {
      completionHandler('loading');
      return;
    }
    this.isLoading = true;
    axios.get(`http://localhost:8080/feed/new?startIdx=${this.start}`)
      .then(res => {
        const json = res.data;
        const { count, pageSize, exhibits } = json;

        if (this.start + pageSize >= count) {
          this.isDone = true;
        }
        this.start += exhibits.length;

        // TODO replace these when the api contains them
        const image = 'https://upload.wikimedia.org/wikipedia/en/8/87/Batman_DC_Comics.png';
        const tags = ['hi', 'there'];
        const author = 'me';
        const votes = 20;

        exhibits.forEach(item => {
          this.cached.push(
            <ExhibitCard
              key={item.id}
              eid={item.id}
              title={item.title}
              summary={item.description}
              tags={tags}
              upvotes={votes}
              author={author}
              picture={image}
            />
          );
        });
        completionHandler(this.cached.shift());
        this.isLoading = false;
      }).catch(err => {
        console.error(err);
        completionHandler(null);
        this.isLoading = false;
      });
  }
}

export default ExhibitLoader;
