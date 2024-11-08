import {createBrowserRouter} from "react-router-dom";
import HomePage from "../../ui/page/HomePage";
import LoginPage from "../../ui/page/LoginPage";
import ProductDetailPage from "../../ui/page/ProductDetailPage";
import ErrorPage from "../../ui/page/ErrorPage";
import ShoppingCartPage from "../../ui/page/ShoppingCartPage";
import CheckOutPage from "../../ui/page/CheckOutPage";
import ThankYouPage from "../../ui/page/ThankYouPage";
import ProductListingPage from "../../ui/page/ProductListingPage/productListingPage.tsx";

export const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>,
    errorElement:<ErrorPage/>
  },

  {
    path: "/product",
    element: <ProductListingPage/>
  },
  {
    path: "/product/:productId",
    element: <ProductDetailPage/>
  },
  {
    path: "/shoppingCart",
    element: <ShoppingCartPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },

  {
    path: "/checkout/:transactionId",
    element: <CheckOutPage/>
  },
  {
    path: "/thankyou",
    element: <ThankYouPage/>
  },
  {
    path: "/error",
    element: <ErrorPage/>
  }
])