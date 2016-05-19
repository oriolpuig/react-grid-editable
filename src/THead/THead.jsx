/* eslint-disable no-unused-vars */
// Dependencies
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

// Styles
import './THead.scss';

// Components
import THeadRow from '../THeadRow';

class THead extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columnDefs: props.columnDefs,
    };
  }

  render() {
    const { columnDefs, className } = this.state;
    return (
      <thead className={ cx(className, 'THead') }>
        <THeadRow columnDefs={ columnDefs } />
      </thead>
    );
  }
}

THead.defaultProps = {};

THead.propTypes = {
  columnDefs: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default THead;
