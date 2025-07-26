import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Wishlist from './pages/Wishlist/Wishlist';
import Productdetailes from './pages/ProductDetailes/Productdetailes';
import Orders from './pages/Orders/Orders';
import NotFound from './pages/NotFound/NotFound';
import Forgetpassword from './pages/ForgetPassword/Forgetpassword';
import Checkout from './pages/Checkout/Checkout';
import Categories from './pages/Categories/Categories';
import Cart from './pages/Cart/Cart';
import Brands from './pages/Brands/Brands';
import Layout from './pages/Layout/Layout';
import Account from './pages/Account/Account';
import CategoriesDetailes from './pages/CategoriesDetailes/CategoriesDetailes';
import { ToastContainer } from 'react-toastify';
import ProductProvider from './Context/AllProducts.Context';
import CategoriesProvider from './Context/AllCategories.Context';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import AuthProvider from './Context/Auth.Context';
import CartProvider from './Context/Cart.Context';
import SubCategoriesProvider from './Context/SubCategories.Context';
import VerifyResetCode from './pages/VerifyResetCode/VerifyResetCode';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import WishlistProvider from './Context/Wishlist.Context';
import BrandsProvider from './Context/AllBrands.Context';
import AccountDetails from './pages/AccountDeatils/AccountDetails';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to="home" />,
        },
        {
          path: 'home',
          element: <Home />,
        },
        {
           path: 'allorders',
           element: <Navigate to="/account" />,
        },
        {
          path: 'account',
          element: (
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          ), children :[
             {
           index: true,
           element: <Navigate to="orders" />,
           },   
        {
          path: 'orders',
          element: (
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          ),
        },{
          path:'account-details',
          element :<AccountDetails />
        }
          ]
        },
        {
          path: 'signup',
          element: <Signup />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'verify-reset-code',
          element: <VerifyResetCode />,
        },
        {
          path: 'reset-password',
          element: <ResetPassword /> ,
        },
        {
          path: 'wishlist',
          element: (
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          ),
        },
        {
          path: 'product-detailes/:id',
          element: <Productdetailes />,
        },
        {
          path: 'forget-password',
          element: <Forgetpassword />,
        },
        {
          path: 'checkout',
          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          ),
        },
        {
          path: 'categories',
          element: <Categories />,
        },
        {
          path: 'categories/:id',
          element: <CategoriesDetailes />,
        },
        {
          path: 'brands',
          element: <Brands />,
        },
        {
          path: 'cart',
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
           <CategoriesProvider>
            <SubCategoriesProvider>
             <BrandsProvider>
              <ProductProvider>
                <RouterProvider router={router}></RouterProvider>
                <ToastContainer
                  position="top-right"
                  closeButton={false}
                  autoClose={3000}
                />
              </ProductProvider>
             </BrandsProvider>
            </SubCategoriesProvider>
          </CategoriesProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
