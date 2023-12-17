// Infosection.jsx
import React from "react";

export const Infosection = ({ items }) => {
  return (
    <div id="infosection">
      <div className="container">
        {items.map((item, index) => (
          <div key={index} className="info-container">
            <div className="row">
              <div className="col-xs-12 col-md-2">
                <i className={`fa ${item.icon} icon`} style={{ color: '#6ec1e3' }}></i>
              </div>
              <div className="col-xs-12 col-md-10">
                <div className="infosection-text">
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
