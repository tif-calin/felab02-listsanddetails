import React, { useState, useEffect } from 'react';
import { fetchCoreValidPapers } from '../services/apiCore.js';
import List from '../components/list/List.jsx';

const ListPage = props => {
  // set up state
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // component did mount
  useEffect(async () => {
    setItems(JSON.parse(window.localStorage.getItem('items')) || []);
    fetchCoreValidPapers()
      .then(papers => setItems(papers))
      .then(() => setLoading(false))
    ;

    return () => setItems([]);
  }, []);

  // set localStorage
  useEffect(() => {
    window.localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  // render page
  return (
    <div className="ListPage">
      {Boolean(items.length) &&
        <List items={items} loading={loading} {...props} />
      }
    </div>
  );

};

export default ListPage;
