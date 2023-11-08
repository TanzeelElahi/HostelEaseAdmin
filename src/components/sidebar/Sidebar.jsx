import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HourglassFullIcon from '@mui/icons-material/HourglassFull';
import HourglassFullTwoToneIcon from '@mui/icons-material/HourglassFullTwoTone';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import StarOutlineTwoToneIcon from '@mui/icons-material/StarOutlineTwoTone';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import ChatBubbleOutlineTwoToneIcon from '@mui/icons-material/ChatBubbleOutlineTwoTone';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
        <span className="logo">HostelEase</span>
        </Link>
      </div>
      <hr/>
      <div className="center">
        <ul>
          {/* <p className="title">MAIN</p> */}
          {/* <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li> */}
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
         
          <StoreIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">USERS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
          <li>
          <PersonOutlineOutlinedIcon className="icon"/>
            <span>HOSTEL OWNERS</span>
          </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
          <li>
          <PersonOutlineOutlinedIcon className="icon"/>
            <span>CUSTOMERS</span>
          </li>
          </Link>
          <Link to="/bookings" style={{ textDecoration: "none" }}>
          <li>
            <CreditCardIcon className="icon"/>
            <span>Bookings</span>
          </li>
          </Link>
          
          <p className="title">Hostel Details</p>
           <Link to="/occupied" style={{ textDecoration: "none" }}> 
          <li>
          <HourglassFullIcon className="icon"/>
            <span>OCCUPIED HOSTELS</span>
          </li>
           </Link>
         <Link to="/unoccupied" style={{ textDecoration: "none" }}>
          <li>
          <HourglassFullTwoToneIcon className="icon"/>
            <span>AVAILABLE HOSTELS</span>
          </li>
          </Link>
          <p className="title">RATING AND COMPLAINTS</p>
          
          <Link to="/rating" style={{ textDecoration: "none" }}>
          <li>
          <StarOutlineTwoToneIcon className="icon"/>
            <span>RATING</span>
          </li>
          </Link>
          <Link to="/complains" style={{ textDecoration: "none" }}>
          <li>
          <ChatBubbleOutlineTwoToneIcon className="icon"/>
            <span>COMPLAINTS</span>
          </li>
          </Link>
         
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
          {/* <li>
            <AccountCircleOutlinedIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon"/>
            <span>Logout</span>
          </li> */}
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"  onClick={() => dispatch({ type: "LIGHT" })}></div>
        <div className="colorOption"  onClick={() => dispatch({ type: "DARK" })}></div>
        
      </div>
    </div>
  );
};

export default Sidebar;
