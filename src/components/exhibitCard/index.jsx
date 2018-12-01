import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import {
  ExhibitContainer,
  ExhibitImg,
  ExhibitTitle,
  ImgContainer,
  Supporters,
  Featured
} from './Styled';

class ExhibitCard extends PureComponent {
  render() {
    const {id, title, description, supporters, featured, cover} = this.props

    return (
      <ExhibitContainer>
        <ExhibitImg open={open} src={`https://fan-forge-dev.herokuapp.com/image/${cover ? cover.image : ''}`}/>
        <ExhibitTitle>{title}</ExhibitTitle>
        <Supporters>{supporters}</Supporters>
        {featured ? <Featured /> : ''}
      </ExhibitContainer>
    )
  }
}

ExhibitCard.propTypes = {
  description: PropTypes.string,
  imageUrl: PropTypes.string, 
  supporters: PropTypes.num,
  featured: PropTypes.bool,
  title: PropTypes.string,
}

export default ExhibitCard;