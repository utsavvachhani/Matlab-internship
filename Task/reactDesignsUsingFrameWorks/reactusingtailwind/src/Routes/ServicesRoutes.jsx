import { Route } from "react-router-dom";
import Shop from "../pages/Shop";

const ServicesRoutes = (
  <Route path="/shop" element={<Shop />}>
    <Route index element={<div>Select a service</div>} />
    <Route path="oyo" element={<div>Services</div>} />
    <Route path="web" element={<div>Web Development</div>} />
    <Route path="mobile" element={<div>Mobile Development</div>} />
  </Route>
);

export default ServicesRoutes;
