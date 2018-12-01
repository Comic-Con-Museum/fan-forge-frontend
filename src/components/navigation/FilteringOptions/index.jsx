import Select from 'react-select';
import { PropTypes } from 'prop-types';
import { sortOptions } from '../../../utils/constants'
import { collapsibleContainerStyles, Label, FilterOptionContainer, selectStyle, selectTheme } from './Styled';
import React, { PureComponent, Fragment } from 'react';
import createControlledCollapsibleComponent from '../../collapsible/';

class FilteringOptions extends PureComponent {
    render() {
        return (
            <Fragment>
                <FilterOptionContainer>
                    <Label htmlFor="filtering__byTag">Showing exhibits tagged as</Label>
                    <Select
                        id="filter__byTag"
                        theme={selectTheme}
                        styles={selectStyle}
                        value={this.props.tagValue}
                        tabIndex={this.props.tabIndex}
                        options={this.props.tagOptions}
                        onChange={this.props.setFilterTag}
                    />
                </FilterOptionContainer>

                <FilterOptionContainer>
                    <Label htmlFor="filtering__sortBy">Sort By</Label>
                    <Select
                        id="filtering__sortBy"
                        theme={selectTheme}
                        styles={selectStyle}
                        value={this.props.sortValue}
                        tabIndex={this.props.tabIndex}
                        options={this.props.sortOptions}
                        onChange={this.props.setSortOption}
                    />
                </FilterOptionContainer>             
            </Fragment>
        );
    }
};

FilteringOptions.propTypes = {
    sortValue: PropTypes.object.isRequired,
    sortOptions: PropTypes.array.isRequired,
    setSortOption: PropTypes.func.isRequired,
    tagValue: PropTypes.object.isRequired,
    tagOptions: PropTypes.array.isRequired,
    setFilterTag: PropTypes.func.isRequired,
    tabIndex: PropTypes.string
};

FilteringOptions.defaultProps = {
    sortOptions: Object.values(sortOptions),
    tagOptions: Object.values(sortOptions),
    tabIndex: "0"
};

const CollapsibleFilteringOptions = createControlledCollapsibleComponent(FilteringOptions, collapsibleContainerStyles);

export {
    CollapsibleFilteringOptions,
    FilteringOptions
};

export default FilteringOptions;