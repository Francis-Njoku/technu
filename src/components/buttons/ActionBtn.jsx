import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './ActionBtn.scss'

export class ActionBtn extends Component {

  render() {
    return (
      <div id='action-btn'>
        <Link to={this.props.link} className={this.props.class}><button className={this.props.class}>{this.props.text}</button></Link>
      </div>
    )
  }
}

export default ActionBtn
