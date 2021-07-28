import React from 'react';
import PropTypes from 'prop-types';

const List = props => {
  return <ul className="List">
    {props.items.map(paper => <li key={paper.id}>{paper.title}</li>)}
  </ul>;
};

List.propTypes = {
  items: PropTypes.array.isRequired
};

export default List;
