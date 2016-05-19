/* eslint-disable no-unused-vars */
// Dependencies
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

// Styles
import './TBody.scss';

// Components
import Row from '../Row';

class TBody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gridOptions: props.gridOptions,
    };
  }

  renderRows() {
    const { gridOptions } = this.state;
    const rows = gridOptions.data.map((row, i) => {
      let index = 1;
      if (i !== 0) {
        index = (1 + gridOptions.columnDefs.length) * i;
      }
      return (
        <Row key={i}
          tabIndex={parseInt(index, 0) }
          entity={row}
          columnDefs={gridOptions.columnDefs} />
      );
    }, this);

    return rows;
  }

  render() {
    const rows = this.renderRows();
    const { className } = this.state;
    return (
      <tbody className={ cx(className, 'TBody') }>
        {rows}
      </tbody>
    );
  }
}

TBody.defaultProps = {};

TBody.propTypes = {
  gridOptions: PropTypes.any.isRequired,
  className: PropTypes.string,
};

export default TBody;
