import React, {Component} from 'react';

import { fetchFeed, pageSize } from '../../utils/api';
import AdminFeed from './AdminFeed';
import {
  AdminPanelWrapper,
  Title
} from './Styled';

class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.feed
    }
  }

  componentDidMount() {
    const {feed, setFeed} = this.props;
    if (feed.length === 0) {
      fetchFeed(0, 'recent', undefined).then(result => {
        setFeed(result.data.exhibits)
        this.setState({feedSize: result.data.count})
      })
    }
  }

  render() {
    const {feed} = this.props;
    console.warn(feed);
    return (
      <AdminPanelWrapper>
        <Title>Welcome to the Admin Panel</Title>
        { feed ? <AdminFeed feed={feed}/> : null }
      </AdminPanelWrapper>
    )
  }
}

export default AdminPanel;