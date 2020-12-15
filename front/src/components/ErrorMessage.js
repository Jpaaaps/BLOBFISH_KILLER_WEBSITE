import React from "react";

export default function ErroMessage({ error }) {
  if (error) {
    switch (error.type) {
      case "required":
        return <p className='error_message'>This is required</p>;
      case "minLength":
        return <p className='error_message'>Your last name need minmium 2 charcaters</p>;
      case "pattern":
        return <p className='error_message'>Enter a valid email address</p>;
      default:
        return null;
    }
  }

  return null;
}
