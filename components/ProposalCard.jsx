import Link from "next/link";
import React from "react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import styled from "styled-components";

const ProposalCard = ({
  title,
  desc,
  refuse,
  approve,
  deadline,
  voters,
  slug,
}) => {
  const votersChips = voters.split(",");
  console.log(votersChips);

  const randomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };
  console.log(randomColor());

  return (
    <Link href={`/proposal/${slug}`}>
      <div className="proposal-card nav-link">
        <h1>{title}</h1>
        <p>{desc}</p>
        <div className="votes">
          <div>
            <FiThumbsUp style={{ color: "#0BDE38" }} size={20} />
            {approve}
          </div>
          <div>
            <FiThumbsDown size={20} style={{ color: "#DE310B" }} />
            {refuse}
          </div>
        </div>
        <div>
          <p>deadline {deadline}</p>
          <div>
            <p>voters: </p>
            {votersChips
              ? votersChips.map((chips) => {
                  return (
                    <StyledSpan randomColor={randomColor()} key={Math.random()}>
                      {chips}
                    </StyledSpan>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </Link>
  );
};

const StyledSpan = styled.span`
  padding: 3px 6px;
  border: 1px solid #f2f2f2;
  color: #f2f2f2;
  border-radius: 10px;
  margin: 2px;
  background-color: ${(props) =>
    props.randomColor ? `#${props.randomColor}` : "blue"};
`;

export default ProposalCard;
