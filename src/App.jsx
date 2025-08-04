import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navfirst from './Componants/Navfirst';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Wishlist from './Pages/Wishlist';
import Addcart from './Pages/Addcart';
import Footer from './Componants/Footer';
import Login from './Pages/Signin';
import ForgotPassword from './Pages/Reset';
import Signup1 from './Pages/Sinup';
import Dashboard from './Pages/Dashboard/Dashboard';
import DashboardCharts from './Pages/Dashboard/Dashchart';
import DashboardOverview from './Pages/Dashboard/Dashbordabout';
import Dashboard01 from './Pages/Dashboard/Dashboard01';
import Desproducts from './Pages/Dashboard/Desproducts';
import ProductForm from './Pages/Addproduct';
import Costumer from './Pages/Dashboard/Costumer';
import ProductDetails from './Componants/Detailprodut';
import Checkout from './Componants/Checkout';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const location = useLocation();

  const Navbarhide = ["/Signup1", "/Dashboard", "/Dashboard01", "/dashboard/products", "/ProductForm","/Dashboard/Costumer"];
  const hideNavbar = Navbarhide.includes(location.pathname);


  return (
    <>

      {!hideNavbar && (

        <Navfirst
          onCartOpen={() => setIsCartOpen(true)}
          onProfileClick={() => setIsSignupOpen(true)}
        />
      )}


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Addcart" element={<Addcart />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Signup1" element={<Signup1 />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Dashboard01 />} /> {/* Default dashboard content */}
          <Route path="products" element={<Desproducts />} /> {/* /dashboard/products */}
          <Route path="Costumer" element={<Costumer />} />
        </Route>
<Route path="/productdetails" element={<ProductDetails />} />
        <Route path="ProductForm" element={<ProductForm />} />
        <Route path="/Checkout" element={<Checkout />} />



      </Routes>


{isCartOpen && <Wishlist key={Date.now()} onClose={() => setIsCartOpen(false)} />}
      {isSignupOpen && <Signup setOpen={setIsSignupOpen} />}

      <Footer />

    </>
  );
}

export default App;
