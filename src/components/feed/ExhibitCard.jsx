import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import {
  ExhibitContainer,
  ExhibitImg,
  ExhibitTitle,
  ImgContainer,
  ButtonContainer,
  Description
} from './Styled';
class ExhibitCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  toggleOpen = () => {
    const open = !this.state.open;
    this.setState({open});
  }

  render() {
    const {id, title, description, supporters, cover} = this.props;
    const {open} = this.state;
    return (
      <ExhibitContainer onClick={this.toggleOpen} open={open}>
        <ImgContainer>
          <ExhibitImg open={open} src={`https://fan-forge-dev.herokuapp.com/image/${cover ? cover.image : ''}`}/>
        </ImgContainer>
        <div style={{padding: '0 20px 0 10px'}}>
          <ExhibitTitle>{title}</ExhibitTitle>
          <ButtonContainer>
            <p>Supporters: {supporters}</p>
            <Link to={`/exhibit/${id}`}>Go to exhibit page</Link>
            <p>{open ? 'V' : '>'}</p>
          </ButtonContainer>
          <Description>
            {description}
          </Description>
        </div>
      </ExhibitContainer>
    );
  }
}

ExhibitCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

export default ExhibitCard;