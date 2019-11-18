import React, { Props } from 'react';

class RegisterButton extends React.Component<any, any> {
  render() {
    // "https://forms.gle/cZuDfEkh5aiCVB926" --> signupsheet
    return (
      <a href={this.props.url} className={`register-button ${this.props.className}`}>{this.props.name}</a>
    );
  }
}


export default RegisterButton;

