import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchTags } from '../../utils/api';
import { keyCodes, defaultTag } from '../../utils/constants';
import { CollapsibleFilteringOptions } from './FilteringOptions/';
import { NavBarContainer, NavButtonController, NavButton } from './Styled';
import Submit from '../submit';

const linkStyle = {
  color: 'yellow',
  fontFamily: "Helvetica Neue",
  fontSize: '28px',
  fontWeight: 500,
  textTransform: 'uppercase',
  margin: '0 20px',
  textDecoration: 'none'
}

const activeStyle = {
  color: '#b4b8c5',
  fontFamily: "Helvetica Neue",
  fontSize: '28px',
  fontWeight: 500,
  textTransform: 'uppercase',
}

export class Navigation extends PureComponent {
  state = {
    showFiltering: false
  }

  toggleFiltering = () => this.setState(prevState => ({ showFiltering: !prevState.showFiltering }));

  toggleFilteringOnKeyPress = (event) => {
    if (event.keyCode == keyCodes.enter || event.keyCode == keyCodes.space) {
      event.preventDefault()
      this.toggleFiltering()
    }
  }

  componentDidMount() {
    const {setTags, setErrors, setActiveCalls, setNetworkStatus} = this.props

    if (setTags) {
      setActiveCalls({'navigation': true})
      fetchTags().then(result => {
        const tagData = [defaultTag].concat(result.data.map(tag => ({
          label: tag,
          value: tag
        })));

        setTags(tagData)
        setActiveCalls({'navigation': false})
      }).catch(error => {
        console.log(error)
        setActiveCalls({'navigation': false})
        setErrors({'navigation': error})
      })
    }
  }

  showModal = () => {
      this.setState({ showModal: true });
  }

  render() {
    return (
      <NavBarContainer direction={this.props.direction}>
        <NavButtonController
          id="nav__filterController"
          controleeId="nav__filterContainer"
          isControleeActive={this.state.showFiltering}
          onClick={this.toggleFiltering}
          onKeyDown={this.toggleFilteringOnKeyPress}
          black={this.state.showFiltering}
        > FILTER FEED </NavButtonController>
        <CollapsibleFilteringOptions
          id="nav__filterContainer"
          controllerId="nav__filterController"
          collapseContainer={this.toggleFiltering}
          setSortOption={this.props.setSortOption}
          setFilterTag={this.props.setFilterTag}
          isCollapsed={this.state.showFiltering}
          sortValue={this.props.sortOption}
          tagValue={this.props.filterTag}
          tagOptions={this.props.tags}
        />
        <NavButton yellow onClick={this.showModal}>SUBMIT AN IDEA</NavButton>
        { this.state.showModal ?
            <Submit
              deactivateModal={() => this.setState({ showModal: false })}
            />
            : null
        }
        <NavButton disabled>LOG IN</NavButton>
      </NavBarContainer>
    );
  }
}

Navigation.defaultProps = {
  direction: 'column'
}

export default Navigation;
