import React, { Component } from 'react';
import css from './Section.module.css';

export class Section extends Component {
  render() {
    return (
      <>
        <h3 className={css.title}>{this.props.title}</h3>
        {this.props.children}
      </>
    );
  }
}
