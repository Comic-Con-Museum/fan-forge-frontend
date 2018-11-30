import React, { Fragment } from 'react';

export class MobileWrapper extends PureComponent {
  state = {
    display: true
  }

  componentDidMount() {
    document.window.addEventListener('scroll', event => {
      if(window.pageYOffset > 50 && window.pageYOffset < 900) {
        this.setState({ display: true });
      } else {
        this.setState({ display: false });
      }
    })
  }

  render() {
    return (
      <MobileNav innerRef={node => this.container}>
        {this.props.children}
      </MobileNav>
    )
  }
}