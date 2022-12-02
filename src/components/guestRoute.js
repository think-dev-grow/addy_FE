import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const GuestRoute = ({ children }) => {
  const activated = Cookies.get("token");

  if (!activated) {
    return <Navigate to={"/sign-up"} />;
  }

  return children;
};

export default GuestRoute;
