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
      activeExhibit: {"id":97,"title":"Thor, the Might of the Nords","description":"Thor is a pretty cool dude, and his hammer is pretty neat too.","supporters":0,"comments":[{"id":48,"text":"dfafafs","author":"zjones","reply":null,"created":"2018-12-05T04:51:49.971Z"},{"id":49,"text":"fsdsfd","author":"zjones","reply":null,"created":"2018-12-05T04:52:01.002Z"}],"supported":false,"featured":false,"author":"zjones","created":"2018-12-05T04:45:45.089Z","tags":["Thor","Hammer"],"artifacts":[{"title":"A title","description":"A description","image":24,"creator":"zjones","id":24,"cover":true,"created":"2018-12-05T04:45:45.138Z"},{"title":"A title","description":"A description","image":25,"creator":"zjones","id":25,"cover":false,"created":"2018-12-05T04:45:45.585Z"}]}
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
          <BackButton onClick={this.goBack}>Back</BackButton>
          <FeatureButton onClick={() => featureExhibit(id)}>Feature this!</FeatureButton>
          <DeleteButton onClick={() => removeExhibit(id)}>Delete this!</DeleteButton>
        </ButtonContainer>}
      </ActionWrapper>
    );
  }
}

export default AdminFeed;