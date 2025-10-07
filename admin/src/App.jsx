import React, { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import AppLayout from "./Layout/AppLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Lists from "./pages/Lists";
import Orders from "./pages/Orders";
import { adminDataContext } from "./context/AdminContext";

const App = () => {
  
  const {adminData } = useContext(adminDataContext);



  const router = createBrowserRouter([
    { path: "/", element: adminData?   <AppLayout/> : <Login/>
    , errorElement:<ErrorPage/> , children:[
      {path:'/', element:<Home/>},
      {path:"/login" , element:<Login/> },
      
      {
        path:'/add' , element: <Add/>
      }
      ,{
        path:'/lists' , element: <Lists/>
      },
      {
        path:'/orders' , element: <Orders/>
      }
    ]
     }]);
   
  return <>
    <RouterProvider router={router}>

    </RouterProvider>
  </>;
};

export default App;