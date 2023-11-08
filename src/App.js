import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import './style/dark.scss'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import OccupiedHostelsPage from "./pages/OccupiedHostelsPage/OccupiedHostelsPage";
import UnoccupiedHostelsPage from "./pages/UnOccupiedHostelPage/UnOccupiedHostelPage";
import Rating from './pages/rating/Rating'
import Complaint from './pages/compliants/Complaint'
import Booking from './pages/bookings/Bookings'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";


function App() {
  const { darkMode } = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route path="login" element={<Login />} />
            <Route index element={<RequireAuth><Home /> </RequireAuth>} />
            <Route path="occupied" element={<RequireAuth><OccupiedHostelsPage /></RequireAuth>} />
            <Route path="unoccupied" element={<RequireAuth><UnoccupiedHostelsPage/></RequireAuth>} />
            <Route path="rating" element={<RequireAuth><Rating /></RequireAuth>} />
            <Route path="complains" element={<RequireAuth><Complaint /></RequireAuth>} />
            <Route path="bookings" element={<RequireAuth><Booking /></RequireAuth>} />
            
            <Route path="users">
              <Route index element={<RequireAuth><List /></RequireAuth>} />
              <Route path=":userId" element={<RequireAuth><Single /></RequireAuth>} />
              <Route
                path="new"
                element={<RequireAuth><New inputs={userInputs} title="Add New User" /></RequireAuth>}
              />
            </Route>
            <Route path="products">
              <Route index element={<RequireAuth><List /></RequireAuth>} />
              <Route path=":productId" element={<RequireAuth><Single /></RequireAuth>} />
              <Route
                path="new"
                element={<RequireAuth><New inputs={productInputs} title="Add New Product" /></RequireAuth>}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;