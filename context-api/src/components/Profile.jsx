import React, { useContext } from "react";
import { UserContext } from "./providers/userContext";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <button
          onClick={() => {
            setUser(null);
          }}
        >
          Log out
        </button>
      ) : (
        "you gotta login"
      )}
    </div>
  );
};

export default Profile;
