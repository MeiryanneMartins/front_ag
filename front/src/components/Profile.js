import React from "react";
import AuthService from "../services/auth.service";

const Profile = () => {
  // eslint-disable-next-line no-unused-vars
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
     
    </div>
  );
};

export default Profile;
