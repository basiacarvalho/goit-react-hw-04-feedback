import React, { Component } from 'react';
import css from './Notification.module.css';

export class Notification extends Component {
  render() {
    return <p className={css.notification}>{this.props.message}</p>;
  }
}
