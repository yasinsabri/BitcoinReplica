import React from "react";
import IndividualsHero from "../component/element/IndividualsHero";
import Card from "../component/utils/Card";

const Individuals = () => {
  const cardData = [
    {
      imgUrl: "asset/ico_mobile.svg",
      title: "Mobile payments made easy",
      desc: "Bitcoin when used on a mobile device allows you to pay with a simple two-step scan-and-pay. There's no need to sign up, swipe your card, type a PIN, or sign anything. All you need to receive Bitcoin payments is to display the QR code in your Bitcoin wallet app and let the other party scan your mobile, or touch the two phones together (using NFC radio technology).",
    },
    {
      imgUrl: "asset/ico_lock.svg",
      title: "Security and control over your money",
      desc: "Bitcoin transactions are secured by mathematics and energy. Cryptographic signatures prevent other people from spending your money. Energy spent by proof of work (PoW) prevents other people from undoing, rearranging or losing your transactions. So long as you take the required steps to protect your wallet, Bitcoin can give you control over your money and a strong level of protection against many types of fraud.",
    },
    {
      imgUrl: "asset/ico_simple.svg",
      title: "Works everywhere, anytime",
      desc: "Similarly to email,  you don't need to ask recipients you're sending bitcoin to, to use the same software, wallets or service providers. You just need their bitcoin address and then you can transact with them anytime. The Bitcoin network is always running and never sleeps, even on weekends and holidays.",
    },
    {
      imgUrl: "asset/ico_international.svg",
      title: "Fast international payments",
      desc: "Sending bitcoins across borders is as easy as sending them across the street. There are no banks to make you wait three business days, no extra fees for making an international transfer, and no special limitations on the minimum or maximum amount you can send.",
    },
    {
      imgUrl: "asset/ico_lowfee.svg",
      title: "Choose your own fees",
      desc: "There is no fee to receive bitcoins, and many wallets let you control how large a fee to pay when spending. Most wallets have reasonable default fees, and higher fees can encourage faster confirmation of your transactions. Fees are unrelated to the amount transferred, so it's possible to send 100,000 bitcoins for the same fee it costs to send 1 bitcoin.",
    },
    {
      imgUrl: "asset/ico_anon.svg",
      title: "Protect your identity",
      desc: "With Bitcoin, there's no credit card number that malicious actors can collect in order to steal from you. In fact, it's even possible in some cases to send a payment without revealing your identity, almost like with physical money. You should, however, take note that some effort can be required to protect your privacy.",
    },
  ];
  return (
    <React.Fragment>
        <IndividualsHero
          heading1="Bitcoin for Individuals"
          heading2="Bitcoin is the easiest way to transact at a very low cost."
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

export default Individuals;
