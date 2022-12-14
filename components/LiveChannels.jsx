import React from "react";

const LiveChannels = () => {
  return (
    <div id="live" className="p-2 md:p-8">
      <h2 className="text-xl font-bold px-2">
        <span className="text=[#9147ff]">Live Channels</span> we think you'll
        like
      </h2>

      {/* Container */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-gols-5 gap-4 py-2"></div>
    </div>
  );
};

export default LiveChannels;
