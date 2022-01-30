import React from "react";
import LHSFeed from "./LHSFeed";
import RHSFeed from "./RHSFeed";
import MiddleFeed from "./MiddleFeed";

const Feed = () => {
  return (
    <section className="feed">
      <div className="feed_cont container">
        <LHSFeed />
        <MiddleFeed />
        <RHSFeed />
      </div>
    </section>
  );
};

export default Feed;
