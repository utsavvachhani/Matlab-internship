import { Link } from "react-router-dom";



function Navbar() {
  return (
    <div>
      <nav className="bg-blue-700 rounded-2xl flex align-middle justify-between  text-center m-6 p-6 font-serif">
        <Link className="textColor" to="/">
          Home
        </Link>
        <Link className="textColor" to="/tailwind">
          Tailwind
        </Link>
        <Link className="textColor" to="/about">
          About
        </Link>
        <Link className="textColor" to="/shop">
          Router Example
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
