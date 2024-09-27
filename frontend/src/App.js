import './App.css';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from  "./components/Home";
import AviatorSetting from "./components/setting/aviator/AviatorSetting"
import Login from "./components/Login"
import Error from "./components/Error"
import AviatorGame from "./components/AviatorGame"
function App() {
  const [sideBar, setSideBar] = useState(true);
  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };
  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <div>
            <Login/>
        </div>
      ),
    },
    {
      path: "/",
      element: (
        <div className="flex h-screen">
          <Sidebar sidebar={sideBar} className="flex-1" toggleSideBar={toggleSideBar}/>
          <div className="flex flex-col flex-grow overflow-y-auto flex-[3]">
            <Navbar toggleSideBar={toggleSideBar} />
            <Home/>
          </div>
        </div>
      ),
    },
    {
      path: "/aviatorsetting",
      element: (
        <div className="flex h-screen">
          <Sidebar sidebar={sideBar} className="flex-1" toggleSideBar={toggleSideBar}/>
          <div className="flex flex-col flex-grow overflow-y-auto flex-[3]">
            <Navbar toggleSideBar={toggleSideBar} />
            <AviatorSetting/>
          </div>
        </div>
      ),
    },
    
    {
      path: "/AviatorGame",
      element: (
        <div className="flex h-screen">
          <Sidebar sidebar={sideBar} className="flex-1" toggleSideBar={toggleSideBar}/>
          <div className="flex flex-col flex-grow overflow-y-auto flex-[3]">
            <Navbar toggleSideBar={toggleSideBar} />
            <AviatorGame/>
          </div>
        </div>
      ),
    },
    
    {
      path: "*",
      element: (
        <Error/>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
