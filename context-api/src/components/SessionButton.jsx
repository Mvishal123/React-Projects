import React, { useContext } from "react";
import { UserContext } from "./providers/userContext";

const SessionButton = () => {
  const { user } = useContext(UserContext);
  const session = !!user;
  return <div>{session ? `Session: ${user}` : "No session"}</div>;
};

export default SessionButton;
