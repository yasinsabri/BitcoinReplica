import React from "react";
import Example from "../utils/Example";

const Hero = () => {
  return (
    <React.Fragment>
      <div className="container pt-5">
        <div className="row pt-5">
          <div className="col-sm-12 text-center pt-5">
            <p className="hero-heading">
              Bitcoin is an innovative payment network and a new kind of money.
            </p>
            <div className=" d-flex gap-2 justify-content-center  flex-wrap     ">
              <a href="/">
                <button className="hero-btn1">Get Started With Bitcoin</button>
              </a>
              <a href="/">
                <button className="hero-btn2">Choose Your Wallet</button>
              </a>
              <a href="/">
                <button className="hero-btn2">Buy Bitcoin</button>
              </a>
            </div>
            <div className="pt-5">
              
              <div className="d-flex justify-content-center gap-3 pt-5">
              <Example />
                <p className="pt-3 hero-text">what is bitcoin?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
