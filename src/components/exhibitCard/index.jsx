import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { moveTo, randomInt } from '../../utils/helpers';
import LikesImgSrc from '../../assets/like.svg';
import './styles';
import {
  ExhibitContainer,
  ExhibitImg,
  ExhibitTitle,
  ImgContainer,
  Supporters,
  LikeImg,
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
      <ExhibitContainer active={active}>
        <Link className="exhibit-card" onClick={this.navigateToExhibit} to={`/exhibit/${this.props.id}`}>
          <ExhibitImg open={open} src={`https://fan-forge-dev.herokuapp.com/image/${cover ? cover.image : ''}`}/>
          <ExhibitTitle>{title}</ExhibitTitle>
          <Supporters><LikeImg src={LikesImgSrc}/>{supporters} SUPPORTERS</Supporters>
          {featured ? <Featured /> : ''}
        </Link>
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