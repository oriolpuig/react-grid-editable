/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars */

class Colgroup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cols: props.cols,
    };
  }

  componentDidMount() {
    // const width = this._calculateColumnWidth();
  }

  _calculateColumnWidth() {
    // 1. Sum all defineds widths
    // const definedWidths = this._calculateAllDefinedWidths();
    // debugger;
    // 2. Get parent width
    // const parentWidth = 0;

    // 3. Rest 1 to 2.
    // Divide 3 per each column without width defined.

    // Sucks.
  }

  _calculateAllDefinedWidths() {
    let result = 0;
    const { cols } = this.state;

    cols.forEach((width) => {
      result += width;
    }, this);

    return result;
  }

  render() {
    const cols = this.props.cols.map((colWidth, index) =>
      <col key={'col' + index} width={colWidth} style={{ textAlign: 'center' }}/>
    );

    return (
      <colgroup>
        {cols}
      </colgroup>
    );
  }
}

Colgroup.defaultProps = {};

Colgroup.propTypes = {
  cols: PropTypes.arrayOf(PropTypes.number),
};

export default Colgroup;
