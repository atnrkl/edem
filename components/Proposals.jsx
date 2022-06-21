import React from "react";

import { proposalData } from "../data/proposals";
import ProposalCard from "./ProposalCard";
import { v4 as uuid } from "uuid";

const Proposals = () => {
  return (
    <div className="proposal-wrapper">
      {proposalData.map((item) => (
        <ProposalCard
          id={uuid()}
          key={uuid()}
          title={item.title}
          desc={item.proposalDesc}
          voters={item.voters}
          approve={item.approve}
          refuse={item.refuse}
          deadline={item.deadline}
          img={item.img}
        />
      ))}
    </div>
  );
};

export default Proposals;
