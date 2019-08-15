import React from "react";
import "./Leaders.scss";
import LeaderCard from "../../../components/LeaderCard/LeaderCard";
import andreas from "../../../assets/leaders/ANDREAS-ANTRUP.png";
import anil from "../../../assets/leaders/Anil-Benard-Dende.png";
import che from "../../../assets/leaders/CHE-POPE.png";
import karl from "../../../assets/leaders/KARL-KARLSSON.png";
import michael from "../../../assets/leaders/Michael-Rosen.png";
import stephen from "../../../assets/leaders/STEPHEN-NORRIS.png";

const logos = Array.apply(null, Array(12)).map((logo, index) => (
  <div key={index} className="Leaders-logos-logo">
    <img
      src={require(`../../../assets/svg_logos/logo${index}.svg`)}
      alt="company logo"
    />
  </div>
));

const stephenDetail = () => {
  return (
    <ul className="anilDetail">
      <li>Carlyle Group, Co-Founder</li>
      <li>Marriott Corporation, Corporate Vice President and head of the Tax department</li>
      <li>Federal Retirement Thrift Investment Board, Board Advisor appointed by President Bush, confirmed by the US Senate.</li>
    </ul>
  );
};

const michaelDetail = () => {
  return (
    <ul className="anilDetail">
      <li>Herbalife International, Executive VP of Marketing</li>
      <li>Shop Television Network, Founder and CEO. Became JCPenney Home Shopping Channel and later acquired by QVC.</li>
      <li>United Postal Centers, Founder</li>
    </ul>
  );
};

const karlDetail = () => {
  return (
    <ul className="anilDetail">
      <li>Sway Ventures, General Partner</li>
      <li>Vinted, Member of the Board. World's largest preloved fashion marketplace.</li>
      <li>Abbyy, Senior Advisor. World leader in OCR with upcoming IPO.</li>
      <li>Monster Inc, Senior Advisor. Sold subsidiary, Beats, to Apple.</li>
      <li>Pickit, Co-Founder. Sold to Microsoft.</li>
      <li>3721.com, Founder. Sold to Yahoo and rolled in to Alibaba.</li>
      <li>Scoop Inc, Founder. Listed on NASDAQ.</li>
    </ul>
  );
};

const cheDetail = () => {
  return (
    <ul className="anilDetail">
      <li>Grammy award-winning American hip-hop producer</li>
      <li>Former president of G.O.O.D. Music, Kanye West’s music label</li>
      <li>VP of A&R at Warner Bros Records</li>
    </ul>
  );
};

const andreasDetail = () => {
  return (
    <ul className="anilDetail">
      <li>Zalando SE, Vice President of Data & Advertising</li>
      <li>Zalando Media Solutions, Managing Director</li>
      <li>Citi, Analyst</li>
      <li>University of Edinburgh, PHD</li>
    </ul>
  );
};

const anilDetail = () => {
  return (
    <ul className="anilDetail">
      <li>Showroom Prive, Deputy CEO</li>
      <li>Cdiscount, COO</li>
      <li>Cdiscount, International & Advertising VP</li>
      <li>Groupe Casino, Director of Methods and organization</li>
      <li>PPR (Kering) Group, Supply Chain Manager</li>
      <li>PwC Consulting, Senior Consultant</li>
    </ul>
  );
};

const Leaders = () => {
  return (
    <section className="Leaders Leaders-container">
      <div className="Leaders-description">
        <span className="second-title">OUR LEADERS</span>
        <h1 className="first-title is-size-3-mobile">Proven groundbreakers</h1>
        <p className="title-caption">
          Our leaders are not only dreamers - they are doers. We've brought in a
          top team of <b>social and financial powerhouses</b> to make Fluz a
          household name.
        </p>
      </div>

      <div className="Leaders-cards columns">
        <LeaderCard
            img={stephen}
            name="STEPHEN NORRIS"
            company="Carlyle Group, Co-Founder"
            title="Finance & Strategy"
            detail={stephenDetail}
          />
          <LeaderCard
            img={michael}
            name="MICHAEL ROSEN"
            company="Herbalife International, EVP"
            title="Marketing Strategy"
            detail={michaelDetail}
          />
          <LeaderCard
            img={karl}
            name="KARL KARLSSON"
            company="Sway Ventures, GP"
            title="Strategic Partnerships"
            detail={karlDetail}
          />
        </div>
        <div className="Leaders-cards columns">
          <LeaderCard
            img={che}
            name="CHE POPE"
            company="G.O.O.D Music, former President"
            title="Artists & Influencers"
            detail={cheDetail}
          />
          <LeaderCard
            img={andreas}
            name="ANDREAS ANTRUP"
            company="Zalando, VP"
            title="Data, Engineering & AI"
            detail={andreasDetail}
          />
          <LeaderCard
            img={anil}
            name="ANIL BENARD-DENDE"
            company="Showroom Prive, Deputy CEO"
            title="Operations & Customer Success"
            detail={anilDetail}
          />
        </div>

      <div className="Leaders-logos">{logos}</div>
    </section>
  );
};

export default Leaders;
