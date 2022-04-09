import React from "react";

const Footer = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>CALL US</h5>
            <p>09954635761 | 09682352667 </p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>LOCATION</h5>
            <p>112 Maryland Street, Immaculate Concepcion Quezon City</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-fax"></i>
            </div>
            <h5>TEL NO.</h5>
            <p>N/A</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;