import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

export const Footer = (props) => {
  return (
    <div>
      <div id="footer">
        <div className="container text-center">
          <p>
            Baiainfreschi.it – ©Copyright 2019 Giancarlo Mennillo
            <a href="mailto:giancarlo.mennillo@gmail.com"> (giancarlo.mennillo@gmail.com)</a>
          </p>
        </div>
      </div>
    </div>
  );
};
