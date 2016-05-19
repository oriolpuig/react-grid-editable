/* eslint-disable no-unused-vars */
// Dependencies
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

// Styles
import './Row.scss';

// Components
import Cell from '../Cell';
/* eslint-enable no-unused-vars */

class Row extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tabIndex: props.tabIndex,
      entity: props.entity,
      columnDefs: props.columnDefs,
    };
  }

  renderCells() {
    const { columnDefs, entity, tabIndex } = this.state;
    const cells = columnDefs.map((col, i) => {
      const value = entity[col.field];
      const index = tabIndex + i;
      const styleTextAlign = col.align || 'left'; // 'left' default text-align
      return <Cell
        key={i}
        tabIndex={index}
        textAlign={styleTextAlign}
        w={parseInt(col.width, 0) || 0 }
        data={value} />;
    }, this);

    return cells;
  }

  render() {
    const cells = this.renderCells();
    const { className } = this.state;
    return (
      <tr className={ cx(className, 'Row') }>
        {cells}
      </tr>
    );
  }
}

Row.defaultProps = {
  entity: {},
};

Row.propTypes = {
  entity: PropTypes.object,
  columnDefs: PropTypes.any,
  tabIndex: PropTypes.numeric,
  className: PropTypes.string,
};

export default Row;
