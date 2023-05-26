import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";
import Main from "./pages/Main";
import ProductPage from "./pages/ProductPage";

import Shop from "./pages/Shop";
import Trainers from "./pages/Trainers";
import {
  ADMIN_ROUTE,
  CART_ROUTE,
  PRODUCT_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  MAIN_ROUTE,
  TRAINERS_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: CART_ROUTE,
    Component: Cart,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: PRODUCT_ROUTE + "/:id",
    Component: ProductPage,
  },

  {
    path: TRAINERS_ROUTE,
    Component: Trainers,
  },

  {
    path: MAIN_ROUTE,
    Component: Main,
  },
];
