/* eslint-disable no-unused-vars */
// Dependencies
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

// Styles
import './Grid.scss';

// Components
import THead from '../THead';
import TBody from '../TBody';
import Colgroup from '../Colgroup';

class Grid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gridOptions: props.gridOptions,
      events: props.events,
    };
  }

  /**
   * Render ColGroup Component
   * To define the width of the columns
   */
  renderColgroups() {
    const colGroups = [];
    const { gridOptions } = this.state;

    gridOptions.columnDefs.forEach((c) => {
      let width = 0;
      if (c.width !== undefined && c.width !== null
        && (typeof c.width === 'number' || typeof c.width === 'string')) {
        if (typeof c.width === 'string') {
          width = parseInt(c.width, 0);
        } else {
          width = c.width;
        }
      }
      colGroups.push(width);
    }, this);

    return (
      <Colgroup cols={ colGroups } />
    );
  }

  /**
   * Render THead Component
   * To show the header of the grid if columnDefs are defined.
   */
  renderHeader() {
    const { gridOptions } = this.state;
    if (gridOptions.columnDefs.length > 0) {
      return (<THead columnDefs={ gridOptions.columnDefs } />);
    }
    return null;
  }

  /**
   * Render TBody Component
   * To show list of rows with data.
   */
  renderBody() {
    const { gridOptions } = this.state;
    return (<TBody gridOptions={ gridOptions } />);
  }

  /**
   * Render TFoot Component
   * To show the pagination if it is setted up.
   */
  renderFooter() { }

  /**
   * Render
   */
  render() {
    const thead = this.renderHeader();
    const tbody = this.renderBody();
    const colgroup = this.renderColgroups();
    const tfoot = this.renderFooter();
    const { className } = this.state;
    return (
      // 'table table-striped table-bordered table-hover'
      <table id={ 'ReactGrid' }
        className={ cx(className, 'Grid') }>
        {colgroup}
        {thead}
        {tbody}
        {tfoot}
      </table>
    );
  }
}

Grid.defaultProps = {
  events: {},
};

Grid.propTypes = {
  gridOptions: PropTypes.object.isRequired,
  events: PropTypes.object,
  className: PropTypes.string,
};

export default Grid;
