import React from "react";

import { Link } from "react-router-dom";

const Footer = () => (
  <ul className="list-group centered p-4">
    <li className="list-group-item">
      <Link to="/">Home</Link>
    </li>

    <li className="list-group-item">
      <Link to="/squares">Square</Link>
    </li>

    <li className="list-group-item">
      <Link to="/sign-up">Sign Up</Link>
    </li>

    <li className="list-group-item">
      <Link to="/button">Button</Link>
    </li>

    <li className="list-group-item">
      <Link to="/form">Form</Link>
    </li>

    <li className="list-group-item">
      <Link to="/News">News</Link>
    </li>


</ul> );


export default Footer;