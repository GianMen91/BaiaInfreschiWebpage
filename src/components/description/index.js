import React from "react";

export const Description = (props) => {
  return (
    <div id="description">
      <div className="container">
        <div className="row">

          <div className="col-xs-12 col-md-6">
            <div className="description-text">
              <h2>Descrizione</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
          </div>
            <div className="col-xs-12 col-md-6">
              {" "}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191.0287453803258!2d15.42485363821781!3d39.998173083176496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133ec0b4706f5ee3%3A0x9420f63607767053!2sSpiaggia%20degli%20Infreschi!5e0!3m2!1sit!2sde!4v1702848820903!5m2!1sit!2sde"
                width="500"
                height="350"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
