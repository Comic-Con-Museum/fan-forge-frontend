import React, { PureComponent } from 'react';

import { fetchExhibit } from '../../utils/api';
import {
  PageWrapper,
  Card,
  Title,
  CarouselDiv,
  InformationDiv
} from './StyledComponents';

class Exhibit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetchExhibit(this.props.match.params.id).then(({data}) => this.setState(data));
  }

  render() {
    console.warn(this.state);
    const {title} = this.state;
    if (!title) return <PageWrapper>Loading</PageWrapper>
    return (
      <PageWrapper>
        <Card>
          <CarouselDiv />
          <InformationDiv>
            <Title>{title}</Title>
          </InformationDiv>
        </Card>
      </PageWrapper>
    );
  }
}

export default Exhibit;