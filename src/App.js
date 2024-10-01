import { Fragment } from "react";
import Home from "./pages/home";
import Login from "./components/login";
import Registration from "./components/registration";
import ProductPage from "./pages/productPage";
import About from "./components/about";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import SingleProduct from "./components/singleProduct";
import CheckOut from "./components/checkOut";
import Card from "./components/card";
import SiteBar from "./components/siteBar/index";
// import DropDown from "./components/dropdown";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/productPage" element={<ProductPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="singleProduct/:id" element={<SingleProduct />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/checkOut" element={<CheckOut />} />
          <Route path="/card" element={<Card />} />
        </Route>
      </Routes>
      {/* <SiteBar /> */}
    </Fragment>
  );
}

export default App;
