import { NavLink } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="not">
      <h1 className="not__title">Error Code: 404</h1>
      <h2 className="not__subtitle">Page not found</h2>
      <p className="not__description">
        Oops! It looks like the page you're looking for doesn't exist :(
      </p>
      <NavLink className={"not__btn"} to="/">
        Go back to Home
      </NavLink>
    </main>
  );
}

export default NotFound;
