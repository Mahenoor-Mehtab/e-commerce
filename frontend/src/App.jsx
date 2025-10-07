import React, { useContext } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { userDataContext } from "./context/UserContext";

import Nav from "./component/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/registration";
import About from "./pages/About";
import Collections from "./pages/Collections";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const { userData } = useContext(userDataContext);
  const location = useLocation(); // ✅ works because App is inside BrowserRouter

  return (
    <>
      {userData && <Nav />}

      <Routes>
        <Route
          path="/login"
          element={
            userData ? (
              <Navigate to={location.state?.from || "/"} />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/signup"
          element={
            userData ? (
              <Navigate to={location.state?.from || "/"}  />
            ) : (
              <Registration />
            )
          }
        />

        {/* Protected home route */}
        <Route
          path="/"
          element={
            userData ? <Home /> : <Navigate to="/login" state={{ from: location.pathname }} replace />
          }
        />

        <Route path="/about" element={
            userData ? <About/> : <Navigate to="/login" state={{ from: location.pathname }}/>
        }/>

        <Route path="/collection" element={
            userData ? <Collections/> : <Navigate to="/login" state={{ from: location.pathname }}/>
        }/>
        <Route path="/product"  element={
            userData ? <Product/> : <Navigate to="/login" state={{ from: location.pathname }}/>
        }/>
        <Route path="/contact"  element={
            userData ? <Contact/> : <Navigate to="/login" state={{ from: location.pathname }}/>
        }/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
