import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <div className="text-center bg-gray-600 font-semibold p-4 text-white">
      User: {userid}
    </div>
  );
};

export default User;
