import React, { createContext, useContext, useEffect, useState } from "react";
import { authDataContext } from "./Authcontext";
import axios from "axios";

export const adminDataContext = createContext();

const AdminContext = ({ children }) => {
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ loading state
  const { serverUrl } = useContext(authDataContext);

  const getAdmin = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/user/getAdmin", {
        withCredentials: true,
      });
      setAdminData(result.data);
      console.log("Admin data ", result.data);
    } catch (error) {
      setAdminData(null);
      console.log("Admin error:", error);
    } finally {
      setLoading(false); // ✅ har case me loading false karna
    }
  };

  useEffect(() => {
    getAdmin();
  }, []);

  // ! Loader Component
  const Loader = () => (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white text-xl">
      Loading...
    </div>
  );

  if (loading) return <Loader />; // ✅ jab tak loading hai, loader dikhayega

  const value = {
    adminData,
    setAdminData,
    getAdmin,
  };

  return (
    <adminDataContext.Provider value={value}>
      {children}
    </adminDataContext.Provider>
  );
};

export default AdminContext;
