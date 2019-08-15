import React from "react";
import "./Team.scss";
import DouglasBraun from "../../../assets/team/DouglasBraun.png";
import Chase from "../../../assets/team/Chase-Fluz.jpg";
import Gavin from "../../../assets/team/Gavin-Fluz.jpg";
import Maurice from "../../../assets/team/Maurice-Fluz.jpg";
import Rae from "../../../assets/team/Rae-Fluz.jpg";
import TeamCard from "../../../components/TeamCard/TeamCard";

const Team = () => {
  return (
    <section className="Team Team-container">
      <div className="Team-content">
        <div className="Team-content-description">
          <span className="second-title">OUR PEOPLE</span>
          <h1 className="first-title is-size-3-mobile">Working For You</h1>
          <p className="title-caption">
            We're the Fluz team, an eclectic group of programers designers,
            communicators and facilitators who heart and soul believe in our app
          </p>
        </div>
        <div className="Team-content-cards columns">
          <TeamCard img={DouglasBraun} name="Douglas" title="title" />
          <TeamCard img={Chase} name="Chase" title="title" />
          <TeamCard img={Gavin} name="Gavin" title="title" />
        </div>
        <div className="Team-content-cards columns">
          <TeamCard img={Maurice} name="Maurice" title="title" />
          <TeamCard img={Rae} name="Rae" title="title" />
          <TeamCard img={DouglasBraun} name="Name" title="title" />
        </div>
        <div className="Team-content-cards columns">
          <TeamCard img={DouglasBraun} name="Name" title="title" />
          <TeamCard img={DouglasBraun} name="Name" title="title" />
          <TeamCard img={DouglasBraun} name="Name" title="title" />
        </div>
      </div>
    </section>
  );
};

export default Team;
