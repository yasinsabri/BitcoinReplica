import React from "react";

const Card = ({ImgUrl , Heading , Text}) => {
  return (
    <React.Fragment>
      <div className="ind-card">
        <div className="text-center card-detailss pt-5">
          <img src={ImgUrl} alt=""   />
          <h5>{Heading}</h5>
          <p>
            {Text}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
