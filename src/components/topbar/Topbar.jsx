import React from "react";
import "./topbar.css";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";

 const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin-Dashboard</span>
        </div>
        <div className="topRight">
        
            <div className="topbarIcons">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIcons">
              <Language/>
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIcons">
              <Settings/>
                  </div>
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
    
        </div>
      </div>
    </div>
  );
 };

export default Topbar;