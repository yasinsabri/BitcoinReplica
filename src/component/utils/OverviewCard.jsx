import React from "react";

const OverviewCard = ({ ImgUrl, Heading, Desc }) => {
  return (
    <React.Fragment>
      <div className="O-card card   ">
        <div className="O-card-des  ">
          <div>
            <img src={ImgUrl} alt="" className=" w-50 " />
          </div>
          <div className="card-details">
            <h5 className="pt-3 O-heading">{Heading}</h5>
            <p className="pt-2 o-desc">{Desc}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OverviewCard;
