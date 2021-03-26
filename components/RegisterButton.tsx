import React from "react";

interface RegisterButtonProps {
  url?: string;
  className?: string;
  name?: string;
}

const RegisterButton = ({ url, className, name }: RegisterButtonProps) => {
  // "https://forms.gle/cZuDfEkh5aiCVB926" --> signupsheet
  return (
    <a href={url} className={`register-button ${className}`}>
      {name}
    </a>
  );
};

export default RegisterButton;
