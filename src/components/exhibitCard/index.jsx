import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import {
  ExhibitContainer,
  ExhibitImg,
  ExhibitTitle,
  ImgContainer,
  Description
} from './Styled';

class ExhibitCard extends PureComponent {
  render() {
    const {id, title, description, supporters, cover} = this.props

    return (
      <ExhibitContainer>
        <ImgContainer>
          <ExhibitImg open={open} src={`https://fan-forge-dev.herokuapp.com/image/${cover ? cover.image : ''}`}/>
        </ImgContainer>
        <ExhibitTitle>{title}</ExhibitTitle>
      </ExhibitContainer>
    )
  }
}

ExhibitCard.propTypes = {
  description: PropTypes.string,
  imageUrl: PropTypes.string, 
  title: PropTypes.string,
}

export default ExhibitCard;