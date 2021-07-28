import React from 'react';
import PropTypes from 'prop-types';
import './Detail.css';
import { Link } from 'react-router-dom';

const Detail = props => {

  const { item } = props;
  
  return <div className="Detail">
    <p>title: {item.title}</p>
    <p>fulltext: <a href={item.fulltextUrls[0]}>{item.fulltextUrls[0]}</a></p>
    <p>doi: <a href={`https://doi.org/${item.doi}`}>{item.doi}</a></p>
    <p>authors: {
      item.authors.concat(item.contributers)
        .filter(s => s)
        .join(' + ')
    }</p>
    {Boolean(item.subjects.length) && 
      <p>subjects: {item.subjects.join(', ')}</p>
    }
    {Boolean(item.topics.length) && 
      <p>topics: {item.topics.join(', ')}</p>
    }
    <Link to="/">{'<< back to list'}</Link>
  </div>;
};

Detail.propTypes = {
  item: PropTypes.object.isRequired
};

export default Detail;
