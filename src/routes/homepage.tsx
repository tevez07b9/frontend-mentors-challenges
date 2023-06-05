import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="p-6">
      <h1 className="text-center text-3xl">Homepage</h1>
      <p className="font-serif mt-4 text-base font-normal">
        This is a collection of all frontend mentor challenges
      </p>
      <ul>
        <li>
          <Link to="/qrcode">QR Code Example</Link>
        </li>
        <li>
          <Link to="/age-calculator">Age Calculator</Link>
        </li>
      </ul>
    </div>
  );
};

export default Homepage;
