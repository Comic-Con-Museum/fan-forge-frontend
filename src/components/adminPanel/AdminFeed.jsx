import React, {Component} from 'react';

import { fetchExhibit } from '../../utils/api';
import Exhibit from '../exhibit';
import {
  Wrapper,
  Row,
  Header,
  Data,
  Controller,
  ActionWrapper,
  ButtonContainer,
  BackButton,
  FeatureButton,
  DeleteButton
} from './Styled';
import { featureExhibit, removeExhibit } from './adminApi';

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
      exploring: true,
      activeExhibit: {"id":0,"title":"","description":"","supporters":0,"comments":[],"supported":false,"featured":false,"author":"","created":"","tags":[],"artifacts":[]}
    }
  }

  renderLegendElements() {
    return tableCharacteristics.map(({id}) => <Header>{id}</Header>);
  }

  renderFeedAsRows() {
    const {feed, changeContentSelection} = this.props;
    return this.props.feed.map((item, index) =>
      <Row key={index} onClick={() => {this.setState({id: item.id, exploring: false}); changeContentSelection(item.id)}}>
        {tableCharacteristics.map(({value}) => {
          return <Data>{item[value]}</Data>
        })}
      </Row>
    );
  }

  setActiveExhibit = (activeExhibit) =>  {
    this.setState({activeExhibit})
  }

  goBack = () => {
    this.setState({exploring: true})
    this.props.changeContentSelection()
  }

  render = () => {
    if (!this.props.feed) return <div>Loading</div>
    const {exploring, id, activeExhibit} = this.state;
    return (
      <ActionWrapper>
        <Controller>
          {exploring ?
          <Wrapper>
            <Row>
              {this.renderLegendElements()}
            </Row>
            {this.renderFeedAsRows()}
          </Wrapper>
          : <Exhibit setActiveExhibit={this.setActiveExhibit} activeExhibit={activeExhibit} match={{params:{id}}}/> }
        </Controller>
        {exploring ? null : <ButtonContainer>
          <BackButton onClick={this.goBack}>BACK</BackButton>
          <FeatureButton onClick={() => featureExhibit(id)}>FEATURE</FeatureButton>
          <DeleteButton onClick={() => removeExhibit(id)}>DELETE</DeleteButton>
        </ButtonContainer>}
      </ActionWrapper>
    );
  }
}

export default AdminFeed;