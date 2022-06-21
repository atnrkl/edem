import React from "react";

import { proposalData } from "../../data/proposals";
import ProposalCard from "../../components/ProposalCard";
import { v4 as uuid } from "uuid";
import Navbar from "../../components/Navbar";
import Link from "next/link";

const Proposals = () => {
  let uniqueKey = () => {
    return uuid();
  };

  return (
    <div>
      <Navbar />
      <div className="proposal-wrapper">
        {proposalData.map((item) => {
          const uKey = uniqueKey();
          console.log(uKey);
          return (
            <ProposalCard
              key={uKey}
              slug={item.slug}
              title={item.title}
              desc={item.proposalDesc}
              voters={item.voters}
              approve={item.approve}
              refuse={item.refuse}
              deadline={item.deadline}
              img={item.img}
              comments={item.comments}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Proposals;
