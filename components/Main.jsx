import React from "react";
import Hero from "./Hero";
import LiveChannels from "./LiveChannels";

const Main = () => {
  return (
    <div className="absolute left-[64px] xl:left-[232px] p-4">
      <Hero />
      <LiveChannels />
    </div>
  );
};

export default Main;
