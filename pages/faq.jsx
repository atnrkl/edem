import React from "react";
import Navbar from "../components/Navbar";

const faq = () => {
  return (
    <div>
      <Navbar />
      <div className="faq-wrapper">
        <div className="faq-item">
          <h1>what is e-democracy ? </h1>
          <p>
            e-democracy is a automated government system, every proposal voted
            and gained majority vote is executed by law enforcements.
          </p>
        </div>
        <div className="faq-item">
          <h1>how to vote ? </h1>
          <p>
            You need to login the system with your e-gov, if you are eligible
            for vote, you can vote any proposal.
          </p>
        </div>
        <div className="faq-item">
          <h1>What is -voters- ? </h1>
          <p>
            e-democracy is a theocratic system, thus some proposals interests
            locals are only can be voted by locals, and some matters need a
            special knowledge, are can only be voted by specialists
          </p>
        </div>
        <div className="faq-item">
          <h1>Can i change my vote ? </h1>
          <p>No, what is done cannot be undone - William Shakespeare</p>
        </div>
      </div>
    </div>
  );
};

export default faq;
