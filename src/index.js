import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { home, signIn, user } from "./Routes/Routes";
import App from "./pages/Home/App";
import SignIn from "./pages/SignIn/SignIn"
import User from "./pages/User/User"
import Error404 from "./pages/Error/Error"
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import "./index.scss"
import { Provider } from "react-redux";
import store from "./utils/store/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<App />} path={home} /> 
          <Route element={<SignIn />} path={signIn} />
          <Route element={<User />} path={user} />
          <Route element={<Error404 />} path="*" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  </Provider> 
);
