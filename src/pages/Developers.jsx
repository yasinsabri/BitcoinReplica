import React from "react";
import OverviewCard from "../component/utils/OverviewCard";

const Developers = () => {
  return (
    <React.Fragment>
      <div className="container-fluid dev-bg">
        <div className="container pt-5">
          <div className="row pt-5">
            <div className="dev-welcome">
              <p>Welcome</p>
            </div>
            <div className="pt-4 pb-5 dev-hero-heading">
              <h2>
                Learn Bitcoin and start building Bitcoin-based applications.
              </h2>
            </div>
            <div className="col-sm-12 text-center pb-5 ">
              <div className="d-flex flex-wrap  gap-2 pt-5 ">
                
                <OverviewCard
                  ImgUrl="asset/ico_developers.svg"
                  Heading="Developer Guides"
                  Desc="Learn More"
                />
                <OverviewCard
                  ImgUrl="asset/ico_business.svg"
                  Heading="Reference"
                  Desc="Learn More"
                />
                <OverviewCard
                  ImgUrl="asset/ico_developers.svg"
                  Heading="Examples"
                  Desc="Learn More"
                />
                <OverviewCard
                  ImgUrl="asset/ico_individuals.svg"
                  Heading="Glossary"
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

export default Developers;
