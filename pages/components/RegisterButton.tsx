import React from 'react';

class RegisterButton extends React.Component<any, any> {
  render() {
    return (
      <a href="https://forms.gle/cZuDfEkh5aiCVB926" className={`register-button ${this.props.className}`}>Register Your Presentation</a>
    );
  }
}


export default RegisterButton;

