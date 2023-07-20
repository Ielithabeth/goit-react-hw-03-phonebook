import PropTypes from 'prop-types';

export const Filter = ({ filter, onFilter }) => {
    return (
        <label>Find contacts by name
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={onFilter}
          />
        </label>
    );
  };

  Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
  }