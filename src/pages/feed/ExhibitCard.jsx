import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import {
  ExhibitContainer,
  ExhibitImg,
  ExhibitTitle,
  ImgContainer,
  ButtonContainer,
  Description
} from './StyledComponents';

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
    const {imageUrl, title, description} = this.props;
    const {open} = this.state;
    return (
      <ExhibitContainer onClick={this.toggleOpen} open={open}>
        <ImgContainer>
          <ExhibitImg open={open} src={imageUrl}/>
        </ImgContainer>
        <div style={{padding: '0 20px 0 10px'}}>
          <ExhibitTitle>{title}</ExhibitTitle>
          <ButtonContainer>
            <p>Supporters: 889</p>
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