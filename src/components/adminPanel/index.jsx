import React, {Component} from 'react';

import { fetchFeed, pageSize } from '../../utils/api';
import AdminFeed from './AdminFeed';
import { fetchFormattedSurveyData, fetchRawSurveyData} from './adminApi';
import ExhibitDataModels from './ExhibitDataModels';
import {
  AdminPanelWrapper,
  Title
} from './Styled';

class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.feed,
      surveyData: null
    }
  }

  componentDidMount() {
    const {feed, setFeed} = this.props;
    if (feed.length === 0) {
      fetchFeed(0, 'popular', undefined).then(result => {
        setFeed(result.data.exhibits)
        this.setState({feedSize: result.data.count})
      })
    }
  }

  changeContentSelection = (id) => {
    if (!id) {
      this.setState({surveyData: null});
    } else {
      fetchFormattedSurveyData(id)
        .then(({data}) => this.setState({surveyData: data, id}));
    }
  }

  render() {
    const {feed} = this.props;
    const {surveyData, id} = this.state;
    return (
      <AdminPanelWrapper>
        <Title>WELCOME TO THE ADMIN PANEL</Title>
          { feed ? <AdminFeed changeContentSelection={this.changeContentSelection} feed={feed}/> : null }
        { surveyData ? <ExhibitDataModels {...surveyData}/> : null }
      </AdminPanelWrapper>
    )
  }
}

export default AdminPanel;

