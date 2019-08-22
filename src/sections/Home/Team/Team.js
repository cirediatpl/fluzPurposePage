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
          <TeamCard img={DouglasBraun} name="Andrew" title="Operations" />
          <TeamCard img={Chase} name="Chase" title="Customer Success" />
          <TeamCard img={DouglasBraun} name="Elisabeth" title="Marketing" />
        </div>
        <div className="Team-content-cards columns">
          <TeamCard img={DouglasBraun} name="Eric" title="Marketing" />
          <TeamCard img={Gavin} name="Gavin" title="Marketing" />
          <TeamCard img={DouglasBraun} name="Gil" title="Marketing" />
        </div>
        <div className="Team-content-cards columns">
          <TeamCard img={DouglasBraun} name="Henry" title="Engineering" />
          <TeamCard img={DouglasBraun} name="Jingyi" title="Marketing" />
          <TeamCard img={DouglasBraun} name="Justine" title="Marketing" />
        </div>
        <div className="Team-content-cards columns">
          <TeamCard img={DouglasBraun} name="Kenneth" title="Engineering" />
          <TeamCard img={DouglasBraun} name="Lasha" title="Engineering" />
          <TeamCard img={Maurice} name="Maurice" title="Founder" />
        </div>
        <div className="Team-content-cards columns">
          <TeamCard img={DouglasBraun} name="Peter" title="Engineering" />
          <TeamCard img={Rae} name="Rae" title="Customer Success" />
          <TeamCard img={DouglasBraun} name="Shaka" title="Operations" />
        </div>
        <div className="Team-content-cards columns">
          <TeamCard img={DouglasBraun} name="Sophia" title="Marketing" />
          <TeamCard img={DouglasBraun} name="Stas" title="Engineering" />
          <TeamCard img={DouglasBraun} name="Stefan" title="Founder" />
        </div>
        <div className="Team-content-cards columns">
          <TeamCard visible="hidden"/>
          <TeamCard img={DouglasBraun} name="Zvika" title="Engineering" />
          <TeamCard visible="hidden"/>
        </div>
      </div>
    </section>
  );
};

export default Team;
