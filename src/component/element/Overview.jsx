import React from "react";
import OverviewCard from "../utils/OverviewCard";

const Overview = () => {
  return (
    <React.Fragment>
      <div className="container-fluid overview-bg pb-5 ">
        <div className="container pt-5">
          <div className="row pt-5" >
            <div className="col-sm-12 col-4 pt-5 text-center ">
                <div className="d-flex gap-5  justify-content-center ">
                <OverviewCard ImgUrl="asset/ico_individuals.svg" Heading="Individuals" Desc="Learn More"/>
                <OverviewCard ImgUrl="asset/ico_business.svg" Heading="Businesses" Desc="Learn More"/>
                <OverviewCard ImgUrl="asset/ico_developers.svg" Heading="Developers" Desc="Learn More"/>
                </div>
            </div>
            
           
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Overview;
