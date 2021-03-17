import React, { useEffect } from "react";
import { useTypedSelector } from "../store";

const AppHome = () => {
  const state = useTypedSelector((state) => state);

  useEffect(() => {
    if (state.socket.connected === true) {
    }
  }, [state]);
  return (
    <div className="section">
      Hello! Click on a Channel on the left to get started.
    </div>
  );
};

export default AppHome;
