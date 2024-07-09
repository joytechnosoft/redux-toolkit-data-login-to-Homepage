import React from "react";
import { useSelector } from "react-redux";

function Content() {
  const user = useSelector((state) => state.user.user);
  if (!user) {
    return <h2>User information is not available</h2>;
  } else {
    return <div>
 <h2>User Informaion</h2>;
<h4>{user.name}</h4>
<h4>{user.email}</h4>
    </div>
  }
}

export default Content;
