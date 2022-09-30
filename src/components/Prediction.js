import React from "react";
import bracket from "./Pictures/bracket.png";

const groupData = [
  {
    id: 1,
    teams: [
      { position: 1, teamName: "Ecuador" },
      { position: 2, teamName: "Netherlands" },
      { position: 3, teamName: "Qatar" },
      { position: 4, teamName: "Senegal" },
    ],
  },
  {
    id: 2,
    teams: [
      { position: 1, teamName: "England" },
      { position: 2, teamName: "Iran" },
      { position: 3, teamName: "USA" },
      { position: 4, teamName: "Wales" },
    ],
  },
  {
    id: 3,
    teams: [
      { group: 3, position: 1, teamName: "Argentina" },
      { group: 3, position: 2, teamName: "Saudi Arabia" },
      { group: 3, position: 3, teamName: "Mexico" },
      { group: 3, position: 4, teamName: "Poland" },
    ],
  },
  {
    id: 4,
    teams: [
      { group: 4, position: 1, teamName: "France" },
      { group: 4, position: 2, teamName: "Australia" },
      { group: 4, position: 3, teamName: "Denmark" },
      { group: 4, position: 4, teamName: "Tunisia" },
    ],
  },
  {
    id: 5,
    teams: [
      { group: 5, position: 1, teamName: "Spain" },
      { group: 5, position: 2, teamName: "Costa Rica" },
      { group: 5, position: 3, teamName: "Germany" },
      { group: 5, position: 1, teamName: "Spain" },
    ],
  },
  {
    id: 6,
    teams: [
      { group: 6, position: 1, teamName: "Belgium" },
      { group: 6, position: 2, teamName: "Canada" },
      { group: 6, position: 3, teamName: "Morocco" },
      { group: 6, position: 4, teamName: "Croatia" },
    ],
  },
  {
    id: 7,
    teams: [
      { group: 7, position: 1, teamName: "Brazil" },
      { group: 7, position: 2, teamName: "Serbia" },
      { group: 7, position: 3, teamName: "Switzerland" },
      { group: 7, position: 4, teamName: "Cameroon" },
    ],
  },
  {
    id: 8,
    teams: [
      { group: 8, position: 1, teamName: "Portugal" },
      { group: 8, position: 2, teamName: "Ghana" },
      { group: 8, position: 3, teamName: "Uruguay" },
      { group: 8, position: 4, teamName: "Korea Republic" },
    ],
  },
];

const Prediction = () => (
  <div style={{ backgroundColor: "" ,backgroundRepeat:"no-repeat", height: "60rem", display: "flex", flexDirection: "column", backgroundSize:"120rem"  }}>
    <h1 className="background">Prediction</h1>
    <ul className="groupdata" key={groupData}>
      {groupData.map((group) => (
        <Group group={group} />
      ))}
    </ul>
    <img style={{ height: "30rem" }} src={bracket} alt="Hmm" />
  </div>
);

const Group = ({ group }) => (
  <div >
    <li key={group}>Group: {group.id}</li>
    <ul className="groupbox">
      {group.teams.map((team) => (
        <li>
          {" "}
          {team.teamName}
          {team.flag}
        </li>
      ))}
    </ul>
  </div>
);

export default Prediction;
