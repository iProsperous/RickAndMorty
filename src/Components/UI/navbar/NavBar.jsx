import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link className="links" to="/about">
          О сайте
        </Link>
        <Link className="links" to="/posts">
          Посты
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
