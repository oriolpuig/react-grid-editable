/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
// Dependencies
import React, { Component } from 'react';

// Components
import ReactGridEditable from '../dist/react-grid-editable';

export default class App extends Component {

  getData(num = 500) {
    const data = [];

    for (let i = 0; i < num; i++) {
      data.push(
        {
          title: 'Citizen Kane ' + (i + 1),
          rank: i + 1,
          year: '1941',
          rating: '96%',
          reviews: '155',
        });
    }

    return data;
  }

  getColumnDefs() {
    return [
      { name: 'Title', field: 'title', width: '250' },
      { name: 'Rank', field: 'rank', align: 'center', width: '50' },
      { name: 'Year', field: 'year', align: 'center', width: '50' },
      { name: 'Rating', field: 'rating', align: 'center', width: '50' },
      { name: 'Reviews', field: 'reviews', align: 'center', width: '50' },
    ];
  }

  render() {
    const gridOptions = {
      columnDefs: this.getColumnDefs(),
      data: this.getData(5),
      itemsPerPage: 0,
    };
    return (
      <div className="App">
        <h1>React Grid Editable</h1>
        <ReactGridEditable gridOptions={ gridOptions } />
      </div>
    );
  }
}

