import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import { StyledCollapsibleContainer } from './Styled';

function createControlledCollapsibleComponent(WrappedComponent, containerStyles = '') {
  const CollapsibleContainer =  styled(StyledCollapsibleContainer)`${containerStyles}`
  
  class _ControlledCollapsibleComponent extends PureComponent {
    componentDidUpdate(prevProps) {
      if (!prevProps.isCollapsed && this.props.isCollapsed) {
        this.containerRef.focus();
      }
    }
  
    componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  
    componentWillUnMount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  
    handleClickOutside = (event) => {
      if (this.props.isCollapsed && event.target.id != this.props.controllerId &&
         this.containerRef && !this.containerRef.contains(event.target)) {
        this.props.collapseContainer()
      }
    } 
  
    render() {
      return (
        <CollapsibleContainer isCollapsed={this.props.isCollapsed} id={this.props.id} innerRef={node => this.containerRef = node}>
          <WrappedComponent tabIndex={this.props.isCollapsed ? "0" : "-1"} {...this.props} />
        </CollapsibleContainer>
      )
    }
  }

  _ControlledCollapsibleComponent.propTypes = {
    isCollapsed: PropTypes.bool.isRequired,
    controllerId: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  };
  
  return _ControlledCollapsibleComponent;
}

export default  createControlledCollapsibleComponent;