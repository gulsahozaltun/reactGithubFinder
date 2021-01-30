import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-warning">
                <div className="container">
                <a href="#" className="navbar-brand">
                <i className={this.props.icon} ></i>{this.props.title}
                </a>
                </div>
            </nav>
        )
    }
}


// Prop'lar için varsayılan değerleri belirtir:
Navbar.defaultProps = {
    title: 'Github Finder',
    icon:'fab fa-github'
  };
  //gonderilen parametreler icin kosullar belirlendi string olmali vs
  Navbar.PropTypes={
      title:PropTypes.string.isRequired,
      icon:PropTypes.string.isRequired
  }
export default Navbar
