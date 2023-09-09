import React from "react";

const GetStarted = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row pt-5">
          <h4 className="started-heading text-center ">
            Get Started with Bitcoin
          </h4>
          <div className="col-sm-6">
            <div className="started-details pt-5">
              <p>
                Bitcoin uses peer-to-peer technology to operate with no central
                authority or banks; managing transactions and the issuing of
                bitcoins is carried out collectively by the network.{" "}
                <b>
                  {" "}
                  Bitcoin is open-source; its design is public, nobody owns or
                  controls Bitcoin and{" "}
                  <span className="blue-details">
                    {" "}
                    everyone can take part.
                  </span>{" "}
                </b>{" "}
                Through many of its unique properties, Bitcoin allows exciting
                uses that could not be covered by any previous payment system.
              </p>
            </div>
            <div className="pt-5">
              <div className="d-flex gap-5 pt-2 ">
                <img src="asset/main_ico_instant.svg" alt="" />
                <h6 className="pt-3">Fast peer-to-peer transactions</h6>
              </div>
              <div className="d-flex gap-5 pt-3 ">
                <img src="asset/main_ico_worldwide.svg" alt="" />
                <h6 className="pt-3">Worldwide payments</h6>
              </div>
              <div className="d-flex gap-5  pt-3">
                <img src="asset/main_ico_lowfee.svg" alt="" />
                <h6 className="pt-3">Low processing fees</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 text-center ">
            <img src="asset/bitcoin-img.svg" alt="" />
          </div>
          <div className="text-center pt-5 pb-5">
            <button className="overview-button">Get Started With Bitcoin </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GetStarted;
