import { Outlet, Link } from "react-router-dom";

function Shop() {
  return (
    <div>
      <nav>
        <Link to="oyo">OYO</Link> |{" "}
        <Link to="web">Web</Link> |{" "}
        <Link to="mobile">Mobile</Link>
      </nav>

      <hr />

      {/* CHILD ROUTES RENDER HERE */}
      <Outlet />
    </div>
  );
}

export default Shop;
