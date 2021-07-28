import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Detail from '../components/detail/Detail';
import { fetchCorePaper } from '../services/apiCore.js';

const ListPage = props => {
  // set up state
  const [item, setItem] = useState();

  // component did mount
  useEffect(async () => {
    setItem(await fetchCorePaper(props.match.params.coreId));

    return () => setItem(null);
  }, []);

  // render page
  return (
    <div className="ListPage">
      {Boolean(item) &&
        <Detail item={item} {...props} />
      }
    </div>
  );
};

ListPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default ListPage;
