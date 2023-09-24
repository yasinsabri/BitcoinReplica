import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container-fluid footer-bg">
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
            <div className="col-sm-4">
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
            <div className="col-sm-8">
              <div className="d-flex gap-5 justify-content-center  flex-wrap ">
                <div className="footer-c1">
                  <h6>Introduction:</h6>
                  <p className="pt-3">Individual</p>
                  <p>Businesses</p>
                  <p>Developers</p>
                  <p>Getting Started</p>
                  <p>How It Works</p>
                  <p>You Need to know</p>
                  <p>Whitepaper</p>
                </div>
                <div className="footer-c1">
                  <h6>Resources:</h6>
                  <p className="pt-3">Resources</p>
                  <p>Exchanges</p>
                  <p>Community</p>
                  <p>Vocabulary</p>
                  <p>Events</p>
                  <p>Bitcoin Core</p>
                </div>
                <div className="footer-c1">
                  <h6>Participate:</h6>
                  <p className="pt-3">Support Bitcoin</p>
                  <p>Buy Bitcoin</p>
                  <p>Running a full node</p>
                  <p>Development</p>
                </div>
                <div className="footer-c1">
                  <h6>Other:</h6>
                  <p className="pt-3">Avoid Scams</p>
                  <p>Legal</p>
                  <p>Privacy Policy</p>
                  <p>Press</p>
                  <p>About bitcoin.org</p>
                  <p>Blog</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid end-bg">
          <div className="container">
            <div className="row end-bg">
              <div className="col-sm-5 pt-3">
                <h6 className="end-pt1">
                  © Bitcoin Project 2009-2023 Released under the MIT license
                </h6>
              </div>
              <div className="col-sm-3 pt-3"></div>
              <div className="col-sm-4 pt-3">
                <div>
                  <div className="network d-flex gap-2 justify-content-end  ">
                    <img
                      src="asset/netstatus_normal.svg"
                      alt=""
                      height="5%"
                      className="pt-1"
                    />
                    <p className="end-pt2">Network Status</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
