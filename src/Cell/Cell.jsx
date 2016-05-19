/* eslint-disable no-unused-vars */
// Dependencies
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

// Styles
import './Cell.scss';

class Cell extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditMode: false,
      data: props.data,
    };

    this.handleBlur = this.handleBlur.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.handleEditCell = this.handleEditCell.bind(this);
    // this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillMount() {
    this.state = {
      isEditMode: false,
      data: this.props.data,
    };
  }

  /**
   * Set a cell editable.
   */
  handleEditCell() {
    this.setState({ isEditMode: true });
  }

  /**
   * Event onKeyDown
   * Launched when we press a keyboard. Used to modify tabIndex or isEditable.
   */
  handleKeyDown(evt) {
    switch (evt.keyCode) {
      case 13: // Enter
        this.setState({ isEditMode: false }); // Close EditMode.
        break;
      case 9: // Tab
        evt.target.tabIndex += 1; // Nav to next cell.
        break;
      default:
    }
  }

  /**
   * Event onChange:
   * Launched to change the value of field.
   */
  handleChange(evt) {
    this.setState({ data: evt.target.value });
  }

  /**
   * Event onBlur:
   * Launched when we lost focus, we change isEditable to false.
   */
  handleBlur() {
    this.setState({ isEditMode: !this.state.isEditMode });
  }

  /**
   * Private Function:
   * To render the cell template.
   */
  renderTemplate() {
    let cellHtml;
    const { isEditMode, data } = this.state;
    const { tabIndex, styleTextAlign, w } = this.props;

    // isEditMode = true;
    if (isEditMode) {
      cellHtml = (
        <input type={'text'} value={data}
          autoFocus={isEditMode} tabIndex={tabIndex}
          onKeyDown={this.handleKeyDown} onChange={this.handleChange}
          onBlur={this.handleBlur}
          />
      );
    } else {
      cellHtml = (
        <div className={'cell-template'}
          style={{ textAlign: styleTextAlign, minWidth: w }}
          tabIndex={tabIndex}
          onFocus={this.handleBlur}
          onClick={this.handleEditCell}
          >{data}</div>
      );
    }

    return cellHtml;
  }

  render() {
    const cellHtml = this.renderTemplate();
    const { className } = this.state;
    return (
      <td className={ cx(className, 'Cell') }>
        {cellHtml}
      </td>
    );
  }
}

Cell.defaultProps = {};

Cell.propTypes = {
  tabIndex: PropTypes.number,
  textAlign: PropTypes.string,
  w: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  data: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  className: PropTypes.string,
};

export default Cell;
