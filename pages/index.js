import Proposals from "../components/Proposals";
import Navbar from "../components/Navbar";
import { MdOutlineHowToVote } from "react-icons/md";
import { GiVote } from "react-icons/gi";

const index = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          marginTop: "10rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
        }}
        className="main-page"
      >
        <GiVote size={120} />
        <h2>
          E-Democracy where people regained power from old crooked Democracy
        </h2>
        <p
          style={{
            marginTop: "5rem",
            fontSize: "1.2rem",
          }}
        >
          All your votes are matter, theocratic and fair for everyone
        </p>
      </div>
    </div>
  );
};

export default index;
