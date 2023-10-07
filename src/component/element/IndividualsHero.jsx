import React from "react";

const IndividualsHero = ({heading1 , heading2}) => {
  return (
    <React.Fragment>
      <div className="container-fluid Ind-bg pb-5">
        <div className="row pt-5 pb-3">
          <div className="col-sm-12 pt-5 text-center ">
            <div className="pt-5 pb-5 ind-heading">
              <h1 className="pt-5">{heading1}</h1>
              <h5 className="pt-3">
                {heading2}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default IndividualsHero;
