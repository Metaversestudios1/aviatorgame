import './App.css';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./components/utils/PrivateRoute";
import Home from  "./components/Home";
import AviatorSetting from "./components/setting/aviator/AviatorSetting"
import Login from "./components/Login"
import Error from "./components/Error"
import AviatorNew from "./components/AviatorNew"
import AuthProvider from "./context/AuthContext";
import BankDetails from "./components/setting/BankDetails/bankdetail"
import RechargeHistory from "./components/setting/rechargehistory"
import WithdrawHistory from "./components/setting/withdrawhistory"

import AddCrashPercentage from "./components/crashPercent/AddCrashPercentage"
import CrashPercentage from "./components/crashPercent/CrashPercentage"
import EditCrashPercentage from "./components/crashPercent/EditCrashPercentage"
import User from "./components/User/User"



function App() {
  const [sideBar, setSideBar] = useState(true);
  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Login />
        </div>
      ),
    },
    
    {
      path: "/login",
      element: (
        <div>
          <Login />
        </div>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoute>
        <div className="flex h-screen">
          <Sidebar sidebar={sideBar} className="flex-1" toggleSideBar={toggleSideBar}/>
          <div className="flex flex-col flex-grow overflow-y-auto flex-[3]">
            <Navbar toggleSideBar={toggleSideBar} />
            <Home/>
          </div>
        </div>
        </PrivateRoute>
      ),
    },
    {
      path: "/aviatorsetting",
      element: (
        <PrivateRoute>
        <div className="flex h-screen">
          <Sidebar sidebar={sideBar} className="flex-1" toggleSideBar={toggleSideBar}/>
          <div className="flex flex-col flex-grow overflow-y-auto flex-[3]">
            <Navbar toggleSideBar={toggleSideBar} />
            <AviatorSetting/>
          </div>
        </div>
        </PrivateRoute>
      ),
    },
    
   
    {
      path: "/aviatornew",
      element: (
        <PrivateRoute>
       
            <AviatorNew/>
        </PrivateRoute>
      ),
    },
    {
      path: "/bankdetails",
      element: (
        <PrivateRoute>
        <div className="flex h-screen">
          <Sidebar sidebar={sideBar} className="flex-1" toggleSideBar={toggleSideBar}/>
          <div className="flex flex-col flex-grow overflow-y-auto flex-[3]">
            <Navbar toggleSideBar={toggleSideBar} />
            <BankDetails/>
          </div>
        </div>
        </PrivateRoute>
      ),
    },

    {
      path: "/rechargehistory",
      element: (
        <PrivateRoute>
        <div className="flex h-screen">
          <Sidebar sidebar={sideBar} className="flex-1" toggleSideBar={toggleSideBar}/>
          <div className="flex flex-col flex-grow overflow-y-auto flex-[3]">
            <Navbar toggleSideBar={toggleSideBar} />
            <RechargeHistory/>
          </div>
        </div>
        </PrivateRoute>
      ),
    },
    {
      path: "/withdrawhistory",
      element: (
        <PrivateRoute>
        <div className="flex h-screen">
          <Sidebar sidebar={sideBar} className="flex-1" toggleSideBar={toggleSideBar}/>
          <div className="flex flex-col flex-grow overflow-y-auto flex-[3]">
            <Navbar toggleSideBar={toggleSideBar} />
            <WithdrawHistory/>
          </div>
        </div>
        </PrivateRoute>
      ),
    },
    
    {
      path: "/addcrashpercentage",
      element: (
        <PrivateRoute>
        <div className="flex h-screen">
          <Sidebar sidebar={sideBar} className="flex-1" toggleSideBar={toggleSideBar}/>
          <div className="flex flex-col flex-grow overflow-y-auto flex-[3]">
            <Navbar toggleSideBar={toggleSideBar} />
            <AddCrashPercentage/>
          </div>
        </div>
        </PrivateRoute>
      ),
    },
    {
      path: "/crashpercentage",
      element: (
        <PrivateRoute>
        <div className="flex h-screen">
          <Sidebar sidebar={sideBar} className="flex-1" toggleSideBar={toggleSideBar}/>
          <div className="flex flex-col flex-grow overflow-y-auto flex-[3]">
            <Navbar toggleSideBar={toggleSideBar} />
            <CrashPercentage/>
          </div>
        </div>
        </PrivateRoute>
      ),
    },
    {
      path: "/editcrashpercentage/:id",
      element: (
        <PrivateRoute>
        <div className="flex h-screen">
          <Sidebar sidebar={sideBar} className="flex-1" toggleSideBar={toggleSideBar}/>
          <div className="flex flex-col flex-grow overflow-y-auto flex-[3]">
            <Navbar toggleSideBar={toggleSideBar} />
            <EditCrashPercentage/>
          </div>
        </div>
        </PrivateRoute>
      ),
    },
    {
      path: "/users",
      element: (
        <PrivateRoute>
        <div className="flex h-screen">
          <Sidebar sidebar={sideBar} className="flex-1" toggleSideBar={toggleSideBar}/>
          <div className="flex flex-col flex-grow overflow-y-auto flex-[3]">
            <Navbar toggleSideBar={toggleSideBar} />
            <User/>
          </div>
        </div>
        </PrivateRoute>
      ),
    },
    {
      path: "*",
      element: (
        <Error/>
      ),
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
export default App;
