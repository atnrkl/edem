import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import { proposalData } from "../../data/proposals";
import { useState, useEffect } from "react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";



const id = ({}) => {
  const { asPath, pathname } = useRouter();
  const [propProps, setPropProps] = useState({});

  const slug = () => {
    const fullpath = asPath.split("/");
    return fullpath[2];
  };

  useEffect(() => {
    const loadData = async () => {
      await proposalData.map((proposal) => {
        proposal.slug === slug()
          ? setPropProps({
              slug: proposal.slug,
              proposalDec: proposal.proposalDesc,
              title: proposal.title,
              refuse: proposal.refuse,
              approve: proposal.approve,
              deadline: proposal.deadline,
              voters: proposal.voters,
              img: proposal.img,
              comments: proposal.comments,
            })
          : "";
      });
    };
    loadData();
  }, []);

  return (
    <div className="detail-wrapper">
      <Navbar id="navbar" />

      <div className="prop-detail-page">
        <div>
          <h1 style={{ padding: "2rem" }}>{propProps.title}</h1>
          <p>{propProps.proposalDec}</p>
        </div>
        <div className="image-container">
          <img className="prop-image" src={propProps.img} alt="image" />
        </div>
        <p style={{ margin: "1rem" }}>deadline: {propProps.deadline}</p>
        <div className="approve-refuse">
          <div
            style={{
              cursor: "pointer",
              backgroundColor: "#DE310B",
              color: "#f2f2f2",
              width: "50%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {propProps.refuse}
          </div>
          <div
            style={{
              cursor: "pointer",
              backgroundColor: "#0BDE38",
              color: "#f2f2f2",
              width: "50%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {propProps.approve}
          </div>
        </div>
      </div>
      <div className="comments-wrapper">
        {propProps.comments
          ? propProps.comments.map((comment) => {
              return (
                <div className="comment-tile" key={Math.random()}>
                  <div className="comment-context">
                    <img src={comment.profile.img} alt="profile-photo" />
                    <h2>{comment.profile.name}</h2>
                    <p>{comment.profile.comment}</p>
                  </div>
                  <div className="comment-likes">
                    <span>
                      <FiThumbsUp size={12} />
                      {comment.profile.like}
                    </span>
                    <span>
                      <FiThumbsDown size={12} />
                      {comment.profile.dislike}
                    </span>
                  </div>
                  {console.log(Array.isArray(comment.profile.replies))}
                  {Array.isArray(comment.profile.replies)
                    ? comment.profile.replies.map((reply) => {
                        return (
                          <div
                            style={{ marginLeft: "1rem" }}
                            className="comment-tile"
                            key={Math.random()}
                          >
                            <div className="comment-context">
                              <img
                                src={reply.profile.img}
                                alt="profile-photo"
                              />
                              <h2>{reply.profile.name}</h2>
                              <p>{reply.profile.comment}</p>
                            </div>
                            <div className="comment-likes">
                              <span>
                                <FiThumbsUp size={12} />
                                {reply.profile.like}
                              </span>
                              <span>
                                <FiThumbsDown size={12} />
                                {reply.profile.dislike}
                              </span>
                            </div>
                          </div>
                        );
                      })
                    : ""}
                </div>
              );
            })
          : console.log("none")}
      </div>
    </div>
  );
};

export default id;
