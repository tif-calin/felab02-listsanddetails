import React, { useState, useEffect } from 'react';
import { fetchCorePapers } from '../services/apiCore.js';
import List from '../components/list/List.jsx';

const ListPage = props => {
  // set up state
  const [items, setItems] = useState([]);

  // component did mount
  useEffect(async () => { 
    setItems(await fetchCorePapers());

    return () => setItems([]);
  }, []);

  // render page
  return (
    <div className="ListPage">
      {Boolean(items.length) &&
        <List items={items} {...props} />
      }
    </div>
  );

};

export default ListPage;
