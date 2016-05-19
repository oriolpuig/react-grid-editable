/* eslint-disable no-unused-vars */
// Dependencies
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

// Styles
import './THeadRow.scss';

// Components
import THeadCell from '../THeadCell';

class THeadRow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columnDefs: props.columnDefs,
    };
  }

  renderCells() {
    const { columnDefs } = this.state;
    const cells = columnDefs.map((col, i) => {
      const cell = (
        <THeadCell key={i}
          columnDef={col} />);
      return cell;
    }, this);

    return cells;
  }

  render() {
    const cells = this.renderCells();
    const { className } = this.state;

    return (
      <tr className={ cx(className, 'THeadRow')}>
        {cells}
      </tr>
    );
  }
}

THeadRow.defaultProps = {};

THeadRow.propTypes = {
  columnDefs: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default THeadRow;
