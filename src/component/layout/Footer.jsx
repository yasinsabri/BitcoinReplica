import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container-fluid footer-bg  pb-5">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-sm-12 text-center">
              <img src="asset/footer-bg.svg" alt="" className=" w-100 " />
              <div>
                <img
                  src="asset/logo-footer.svg"
                  alt=""
                  className="bitcoin-footer"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-3">
          <div className="row">
            <div className="col-sm-5">
              <div className="d-flex gap-5  ">
                <p className="footer-support">
                  {" "}
                  <b> Support Bitcoin.org</b>
                </p>
                <button className="footer-btn"> Donate</button>
              </div>
              <div className="pt-2">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd
                </a>
              </div>
            </div>
            <div className="col-sm-7"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
