import { Link } from "react-router-dom";

let Navbar = () => {
  return (
    <nav class="navbar navbar-dark bg-dark InPublic">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          Resume Builder
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;