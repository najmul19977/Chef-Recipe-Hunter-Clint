import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <div className="footer">
      <div className="container ">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4 mt-4">
            <h2>Chef Hunter</h2>
            <p className="footer_p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque doloribus, ratione reprehenderit molestias necessitatibus, nulla omnis vel dolor consequatur ab similique et dignissimos repellat perspiciatis earum illo. Aperiam, dignissimos nam!
            </p>
          </div>
          <div className="col-12 col-md-8 col-lg-8">
            <div className="row ps-4">
              <div className="col-12 col-md-4 col-lg-4 mt-4">
                <h4>Company</h4>
                <p>Home</p>
                <p>Blog</p>
              </div>

              <div className="col-12 col-md-4 col-lg-4 mt-4">
                <h4>Product</h4>
                <p>kabak </p>
                <p>kachi</p>
                <p>Shahi Muri</p>
                <p>Others</p>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mt-4">
                <h3>Contact</h3>
                <p>Ganginapat</p>
                <p>Mymensingh, Bangladesh </p>
                <p>+880111111111</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
