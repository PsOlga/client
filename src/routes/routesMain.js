
import { Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage/index.jsx";
import CategoriesAll from "../pages/CategotiesAll/index";
import ProductsAll from "../pages/ProductsAll/index.jsx";
function RoutesMain (){
    return (
     
         <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categoriesAll" element={<CategoriesAll />} />
          <Route path="/productsAll" element={<ProductsAll />} />
          {/* <Route path="/cart" element={} /> */}
        </Routes>
    )
}
export default RoutesMain;


