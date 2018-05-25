import React, { Component } from 'react';
import { Media } from "react-bootstrap";

export default class GironeTipo extends Component {
  render() {
    return (
        <Media.Left align="middle" bsClass="media-left">
            Girone {this.props.tipo}
        </Media.Left>
    )
  }
}
