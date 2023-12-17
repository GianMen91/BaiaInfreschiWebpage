import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <div className="navbar-brand">
            Baiainfreschi.it
            </div>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#description" className="page-scroll">
                DESCRIZIONE
              </a>
            </li>
            <li>
              <a href="#infosection" className="page-scroll">
                COME ARRIVARE ALLA BAIA DA SALERNO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
