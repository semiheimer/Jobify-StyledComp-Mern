import { Outlet } from "react-router-dom";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
import Wrapper from "../assets/wrappers/Dashboard";
import { createContext, useContext, useState } from "react";
import { checkDefaultTheme } from "../utils/helpers";

const DashboardContext = createContext();

const DashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState();
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());
  const user = { name: "Semih" };

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log("logout");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        toggleDarkTheme,
        showSidebar,
        isDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
