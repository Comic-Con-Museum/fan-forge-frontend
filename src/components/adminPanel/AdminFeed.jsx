import React, {Component} from 'react';

import Exhibit from '../exhibit';
import {
  Wrapper,
  Row,
  Header,
  Data,
  Controller
} from './Styled';

const tableCharacteristics = [
  {
    id: 'Title',
    value: 'title'
  },
  {
    id: 'Description',
    value: 'description'
  },
  {
    id: '# of supporters',
    value: 'supporters'
  }
]

class AdminFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exploring: true
    }
  }

  renderLegendElements() {
    return tableCharacteristics.map(({id}) => <Header>{id}</Header>);
  }

  renderFeedAsRows() {
    const {feed, changeContentSelection} = this.props;
    return this.props.feed.map(item =>
      <Row onClick={() => {this.setState({exploring: false, id: item.id}); changeContentSelection(item.id)}}>
        {tableCharacteristics.map(({value}) => {
          return <Data>{item[value]}</Data>
        })}
      </Row>
    );
  }

  render() {
    if (!this.props.feed) return <div>Loading</div>
    const {exploring, id} = this.state;
    return (
      <Controller>
        {exploring ?
        <Wrapper>
          <Row>
            {this.renderLegendElements()}
          </Row>
          {this.renderFeedAsRows()}
        </Wrapper>
        : <Exhibit match={{params:{id}}}/> }
      </Controller>
    );
  }
}

export default AdminFeed;