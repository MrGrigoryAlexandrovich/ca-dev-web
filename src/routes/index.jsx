import { Router, Redirect } from "@reach/router";
import PublicLayout from "../components/Layouts/PublicLayout";
import AdminLayout from "../components/Layouts/AdminLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import Ratings from "../pages/Ratings";
import Users from "../pages/Users";
import Technologies from "../pages/Technologies";

const AuthorizedRoute = (props) => {
  const userToken = localStorage.getItem("token");

  if (userToken === null) {
    return <Redirect noThrow to="/login" />;
  }

  return <AdminLayout {...props} />;
};

const UnauthorizedRoute = (props) => {
  return <PublicLayout {...props} />;
};

export default function Routes() {
  return (
    <Router>
      <UnauthorizedRoute path="/" component={Home} />
      <UnauthorizedRoute path="/login" component={Login} />
      <AuthorizedRoute path="/admin" component={Admin} />
      <AuthorizedRoute path="/ratings" component={Ratings} />
      <AuthorizedRoute path="/users" component={Users} />
      <AuthorizedRoute path="/technologies" component={Technologies} />
    </Router>
  );
}
