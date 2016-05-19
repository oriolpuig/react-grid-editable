/* eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars */

class THeadCell extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columnDef: props.columnDef,
    };
  }

  render() {
    const { columnDef } = this.state;
    return (
      <th index={ columnDef.field }>
        { columnDef.name }
      </th>
    );
  }
}

THeadCell.defaultProps = {};

THeadCell.propTypes = {
  columnDef: PropTypes.object.isRequired,
};

export default THeadCell;
