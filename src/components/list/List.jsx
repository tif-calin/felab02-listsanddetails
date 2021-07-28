import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './List.css';

const List = props => {
  return <ul className={styles.List}>
    {props.items.map(paper => <li key={paper.id}>
      <div>
        <Link className="title" to={`/list/${paper.id}`}  title={paper.title}>
          {paper.title}
        </Link>
      </div>

      <div>
        <span className="journal">
          {paper.publisher && paper.publisher.replaceAll('\'', '').trim()}
        </span>
      </div>

      {false && <div className="tags">
      </div>}
    </li>)}
  </ul>;
};

List.propTypes = {
  items: PropTypes.array.isRequired
};

export default List;
