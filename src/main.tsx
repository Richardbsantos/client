import React from "react";
import ReactDOM from "react-dom";
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Header from "./ui/Header";
import NotFound from "./pages/NotFound";
import Footer from "./ui/Footer";
import { getProducts } from "./data";
import { app } from "./fireabase.config";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import "react-toastify/dist/ReactToastify.css";
import Product from "./pages/Product";
import Success from "./pages/Success";

const RootLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: getProducts,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider app={app} store={store}>
    <PersistGate loading={"loading"} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);

