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
          <Supporters>
            <svg className={`likeButton ${active ? 'likeButton--active' : 'likeButton--feed'}`} onClick={this.showSupportModal} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.94 24.31">
              <polygon points="13.71 24.31 0 12.96 1.16 11.56 5.58 13.76 2.76 9.63 3.68 8.51 13.35 16.5 29.85 0 31.15 1.3 28.67 5.32 32.83 2.98 33.94 4.08 13.71 24.31"/>
            </svg>{supporters} SUPPORTERS</Supporters>
          {featured ? <Featured /> : ''}
        </Link>
      </ExhibitContainer>
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
