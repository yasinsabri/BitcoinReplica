import React from "react";
import OverviewCard from "../utils/OverviewCard";

const Overview = () => {
  return (
    <React.Fragment>
      <div className="container-fluid overview-bg pb-5 ">
        <div className="container pt-5">
          <div className="row pt-5">
            <div className="col-sm-12 text-center pt-5  ">
              <h4 className="overview-heading pt-5">Get a quick overview for </h4>
              <div className="d-flex flex-wrap  gap-5 pt-5 justify-content-center ">
                <OverviewCard
                  ImgUrl="asset/ico_individuals.svg"
                  Heading="Individuals"
                  Desc="Learn More"
                  
                />
                <OverviewCard
                  ImgUrl="asset/ico_business.svg"
                  Heading="Businesses"
                  Desc="Learn More"
                />
                <OverviewCard
                  ImgUrl="asset/ico_developers.svg"
                  Heading="Developers"
                  Desc="Learn More"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Overview;
