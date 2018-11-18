import Select from 'react-select';
import { PropTypes } from 'prop-types';
import { sortOptions } from '../constants';
import { collapsibleContainerStyles } from './Styled';
import React, { PureComponent, Fragment } from 'react';
import createControlledCollapsibleComponent from '../CollapsibleContainer/';

class FilteringOptions extends PureComponent {
    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="filtering__sortBy">Sort By</label>
                    <Select
                        value={this.props.sortValue}
                        onChange={this.props.setSortOption}
                        options={this.props.sortOptions}
                        id="filtering__sortBy"
                    />
                </div>
                <label htmlFor="filtering__byTag">Showing exhibits tagged as</label>
                <Select
                    value={this.props.tagValue}
                    onChange={this.props.setFilterTag}
                    options={this.props.tagOptions}
                    id="filter__byTag"
                />
            </Fragment>
        );
    }
};

FilteringOptions.propTypes = {
    sortValue: PropTypes.object.isRequired,
    sortOptions: PropTypes.array,
    setSortOption: PropTypes.func.isRequired,
    tagValue: PropTypes.object.isRequired,
    tagOptions: PropTypes.array,
    setFilterTag: PropTypes.func.isRequired
};

FilteringOptions.defaultProps = {
    sortOptions: sortOptions,
    tagOptions: sortOptions
};

const CollapsibleFilteringOptions = createControlledCollapsibleComponent(FilteringOptions, collapsibleContainerStyles);

export {
    CollapsibleFilteringOptions,
    FilteringOptions
};

export default FilteringOptions;