import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./view/auth/sign_in/SignIn";
import SignUp from "./view/auth/sign_up/SignUp";
import HomePage from "./view/home/HomePage";
import { ProductDetails } from "./controller/components/ProductDetails";
import { Wishlist } from "./controller/components/Wishlist";
import { AddCategoryModal } from "./controller/components/AddCategory";
import { AddSubCategoryModal } from "./controller/components/AddSubCategory";
import { AddProductModal } from "./controller/components/AddProductModal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/add-category" element={<AddCategoryModal />} />
        <Route path="/add-subcategory" element={<AddSubCategoryModal />} />
        <Route path="/add-product" element={<AddProductModal />} />
      </Routes>
    </Router>
  );
}

export default App;
