import React from "react";
import IndividualsHero from "../component/element/IndividualsHero";
import Card from "../component/utils/Card";

const Businesses = () => {
  const cardData = [
    {
      imgUrl: "asset/ico_lowfee.svg",
      title: "Choose your own fees",
      desc: "There is no fee to receive bitcoins, and many wallets let you control how large a fee to pay when spending. Most wallets have reasonable default fees, and higher fees can encourage faster confirmation of your transactions. Fees are unrelated to the amount transferred, so it's possible to send 100,000 bitcoins for the same fee it costs to send 1 bitcoin.",
    },
    {
      imgUrl: "asset/ico_control.svg",
      title: "Protection against fraud",
      desc: "Any business that accepts credit cards or PayPal knows the problem of payments that are later reversed. Chargeback frauds result in limited market reach and increased prices, which in turn penalizes customers. Bitcoin payments are irreversible and secure, meaning that the cost of fraud is no longer pushed onto the shoulders of the merchants.",
    },
    {
      imgUrl: "asset/ico_international.svg",
      title: "Fast international payments",
      desc: "Sending bitcoins across borders is as easy as sending them across the street. There are no banks to make you wait three business days, no extra fees for making an international transfer, and no special limitations on the minimum or maximum amount you can send.",
    },
    {
      imgUrl: "asset/ico_pci.svg",
      title: "No PCI compliance required",
      desc: "Accepting credit cards online typically requires extensive security checks in order to comply with the PCI standard. Bitcoin still requires you to secure your wallet and your payment requests, however, you do not carry the costs and responsibilities that come with processing sensitive information from your customers like with credit card numbers.",
    },
    {
      imgUrl: "asset/ico_visib.svg",
      title: "Get some free visibility",
      desc: "Bitcoin is an emerging market of new customers who are searching for ways to spend their bitcoins. Accepting them is a good way to get new customers and give your business some new visibility. Accepting a new payment method has often shown to be a clever practice for online businesses.",
    },
    {
      imgUrl: "asset/multi-signature.svg",
      title: "Multi-signature",
      desc: "Bitcoin also includes a multi-signature feature which allows bitcoins to be spent only if a subset of a group of people authorize the transaction. This can be used by a board of directors, for example, to prevent members from making expenditures without enough consent from other members, as well as to track which members permitted particular transactions.",
    },
    {
      imgUrl: "asset/transparency.svg",
      title: "Accounting transparency",
      desc: "Many organizations are required to produce accounting documents about their activity. Using Bitcoin allows you to offer the highest level of transparency since you can provide information to verify balances and transactions through the block chain. For example, non-profit organizations can allow the public to see how much they receive in donations.",
    },
  ];
  return (
    <React.Fragment>
      <IndividualsHero
        heading1="Bitcoin for Businesses"
        heading2="Bitcoin is a very secure and inexpensive way to handle payments."
      />
      <div className="container">
        <div className="row pt-5 ">
          {cardData.map((value, index) => {
            return (
              <div className="col-sm-4 mt-3" key={index}>
                <Card
                  ImgUrl={value?.imgUrl}
                  Heading={value?.title}
                  Text={value?.desc}
                />
              </div>
            );
          })}

          <div className="text-center pt-5 mb-5">
            <a href="/">
              <button className="hero-btn1">Get Started With Bitcoin</button>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Businesses;
