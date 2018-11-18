import styled from 'styled-components';
import { PropTypes } from 'prop-types';

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const Controller = styled.a.attrs({
  'role': 'button',
  'tabIndex': '0',
  'aria-controls': props => props.controleeId,
  'aria-pressed': props => props.isControleeActive
})``;

Controller.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  controleeId: PropTypes.string.isRequired,
  isControleeActive: PropTypes.bool.isRequired,
};

export const NavController = styled(Controller)`
  color: yellow;
  font-family: Helvetica Neue;
  font-size: 28px;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0 20px;
  text-decoration: none;
`;

export const LogoImg = styled.img`
  height: 100px;
  width: auto;
  margin-right: 10px;
`;

export const ActionContainer = styled.div`
  display: flex;
  width:100%;
  flex-wrap: wrap;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  background-color: black;
  height: 100px;
`;

export const SubmitLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
`;

export const SubmitButton = styled.button`
  font-size: 16px;
  font-weight: 700;
  font-family: "Helvetica Neue";
  padding: 0;
  height: 50%;
  background-color: yellow;
  width: 100%;
  border: none;
`;
export const LoginButton = styled.button`
  font-size: 16px;
  font-weight: 700;
  font-family: "Helvetica Neue";
  padding: 0;
  height: 50%;
  background-color: darkgrey;
  color: yellow;
  border: none;
`;