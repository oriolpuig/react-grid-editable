/* eslint-disable no-unused-vars */
// Dependencies
import React, { Component, PropTypes } from 'react';

// Components
import Grid from '../Grid';

class ReactGridEditable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gridOptions: props.gridOptions,
      events: props.events,
    };
  }

  render() {
    const { gridOptions } = this.props;
    // TODO:  Render if we have columnDefs;
    return (<Grid gridOptions={ gridOptions } />);
  }
}

ReactGridEditable.defaultProps = {
  events: {},
};

ReactGridEditable.propTypes = {
  gridOptions: PropTypes.object.isRequired,
  events: PropTypes.object,
};

export default ReactGridEditable;
