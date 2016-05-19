/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import Component from './index';
/* eslint-enable no-unused-vars */

(() => {
  const app = document.getElementById('react-view');
  const gridOptions = {
    columnDefs: _getColumnDefs(),
    data: _getData(5),
    itemsPerPage: 0
  };

  ReactDOM.render(<Component gridOptions={ gridOptions } />, app);


  // Private functions

  function _getData(num = 500) {
    var data = [];

    for (var i = 0; i < num; i++) {
      data.push(
        {
          "title": "Citizen Kane " + i,
          "rank": i + 1,
          "year": "1941",
          "rating": "96%",
          "reviews": "155"
        });
    }

    return data;
  }

  function _getColumnDefs() {
    return [
      { name: 'Title', field: 'title', width: '250' },
      { name: 'Rank', field: 'rank', align: 'center', width: '50' },
      { name: 'Year', field: 'year', align: 'center', width: '50' },
      { name: 'Rating', field: 'rating', align: 'center', width: '50' },
      { name: 'Reviews', field: 'reviews', align: 'center', width: '50' }
    ];
  }

})();
