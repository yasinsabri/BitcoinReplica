import React from "react";
import Card from "../utils/Card";

const IndCard = () => {
  return (
    <React.Fragment>
      <div className="container pt-5">
        <div className="row pt-5 ">
          <div className="col-sm-4 ">
            <Card
              ImgUrl="asset/ico_mobile.svg"
              Heading="Mobile payments made easy"
              Text="Bitcoin when used on a mobile device allows you to pay with a simple two-step scan-and-pay. There's no need to sign up, swipe your card, type a PIN, or sign anything. All you need to receive Bitcoin payments is to display the QR code in your Bitcoin wallet app and let the other party scan your mobile, or touch the two phones together (using NFC radio technology)."
            />
          </div>
          <div className="col-sm-4 ">
            <Card
              ImgUrl="asset/ico_lock.svg"
              Heading="Security and control over your money"
              Text="Bitcoin transactions are secured by mathematics and energy. Cryptographic signatures prevent other people from spending your money. Energy spent by proof of work (PoW) prevents other people from undoing, rearranging or losing your transactions. So long as you take the required steps to protect your wallet, Bitcoin can give you control over your money and a strong level of protection against many types of fraud."
            />
          </div>
          <div className="col-sm-4 ">
            <Card
              ImgUrl="asset/ico_simple.svg"
              Heading="Works everywhere, anytime"
              Text="Similarly to email,  you don't need to ask recipients you're sending bitcoin to, to use the same software, wallets or service providers. You just need their bitcoin address and then you can transact with them anytime. The Bitcoin network is always running and never sleeps, even on weekends and holidays."
            />
          </div>
        </div>
        <div className="row pt-4 pb-5">
          <div className="col-sm-4 ">
            <Card
              ImgUrl="asset/ico_international.svg"
              Heading="Fast international payments"
              Text="Sending bitcoins across borders is as easy as sending them across the street. There are no banks to make you wait three business days, no extra fees for making an international transfer, and no special limitations on the minimum or maximum amount you can send."
            />
          </div>
          <div className="col-sm-4 ">
            <Card
              ImgUrl="asset/ico_lowfee.svg"
              Heading="Choose your own fees"
              Text="There is no fee to receive bitcoins, and many wallets let you control how large a fee to pay when spending. Most wallets have reasonable default fees, and higher fees can encourage faster confirmation of your transactions. Fees are unrelated to the amount transferred, so it's possible to send 100,000 bitcoins for the same fee it costs to send 1 bitcoin."
            />
          </div>
          <div className="col-sm-4 ">
            <Card
              ImgUrl="asset/ico_anon.svg"
              Heading="Protect your identity"
              Text="With Bitcoin, there's no credit card number that malicious actors can collect in order to steal from you. In fact, it's even possible in some cases to send a payment without revealing your identity, almost like with physical money. You should, however, take note that some effort can be required to protect your privacy."
            />
          </div>
          <div className="text-center pt-5">
            <a href="/">
              <button className="hero-btn1">Get Started With Bitcoin</button>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default IndCard;
