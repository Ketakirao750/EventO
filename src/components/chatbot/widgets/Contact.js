import React from "react";

import Contact from  '../icons/contact.png';

const ContactLink = () => {
  return (
    <a href="tel:1999" className="tel-link">
      <img className="url-icon" alt="CallIcon" src={Contact} />
      <h1 className="tel-header"> Mobile - 828961210 <br/> Email - eventoit01@gmail.com </h1>
    </a>
  );
};

export default ContactLink;
