import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { moveTo, randomInt } from '../../utils/helpers';

import {
  ExhibitContainer,
  ExhibitImg,
  ExhibitTitle,
  ImgContainer,
  Supporters,
  Featured
} from './Styled';

class ExhibitCard extends PureComponent {
  navigateToExhibit = () => {
    //TODO: Look into moving rewriting this, sometimes the scroll is not performed
    moveTo.move(document.head)
  }

  render() {
    const {id, title, description, supporters, featured, cover, active} = this.props

    return (
      <Link onClick={this.navigateToExhibit} to={`/exhibit/${this.props.id}`}>
        <ExhibitContainer active={active}>
          <ExhibitImg src={`https://fan-forge-dev.herokuapp.com/image/${cover ? cover.image : ''}`}/>
          <ExhibitTitle>{title}</ExhibitTitle>
          <Supporters>{supporters}</Supporters>
          {featured ? <Featured /> : ''}
        </ExhibitContainer>
      </Link>
    )
  }
}

ExhibitCard.propTypes = {
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  supporters: PropTypes.number,
  featured: PropTypes.bool,
  title: PropTypes.string,
}

export default ExhibitCard;
