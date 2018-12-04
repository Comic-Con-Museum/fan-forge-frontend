import React, {Component} from 'react';

import {
  Wrapper,
  Row,
  Header,
  Data
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
  }

  renderLegendElements() {
    return tableCharacteristics.map(({id}) => <Header>{id}</Header>);
  }

  renderFeedAsRows() {
    return this.props.feed.map(item =>
      <Row>
        {tableCharacteristics.map(({value}) => {
          return <Data>{item[value]}</Data>
        })}
      </Row>
    );
  }

  render() {
    if (!this.props.feed) return <div>Loading</div>
    return (
      <Wrapper>
        <Row>
          {this.renderLegendElements()}
        </Row>
        {this.renderFeedAsRows()}
      </Wrapper>
    );
  }
}

export default AdminFeed;