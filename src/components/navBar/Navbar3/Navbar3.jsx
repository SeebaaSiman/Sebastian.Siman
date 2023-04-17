import { useState } from "react";
import { Navigation } from "./NavigationStyle";

export const Navbar3 = () => {
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <Navigation className="navigation">
      <ul>
        <li className={`list ${active === 0 && "active"}`}>
          <a href="#" onClick={() => handleClick(0)}>
            <span className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="text">Home</span>
          </a>
        </li>
        <li className={`list ${active === 1 && "active"}`}>
          <a href="#" onClick={() => handleClick(1)}>
            <span className="icon">
              <ion-icon name="person-outline"></ion-icon>
            </span>
            <span className="text">Profile</span>
          </a>
        </li>
        <li className={`list ${active === 2 && "active"}`}>
          <a href="#" onClick={() => handleClick(2)}>
            <span className="icon">
              <ion-icon name="chatbubble-outline"></ion-icon>
            </span>
            <span className="text">Messages</span>
          </a>
        </li>
        <li className={`list ${active === 3 && "active"}`}>
          <a href="#" onClick={() => handleClick(3)}>
            <span className="icon">
              <ion-icon name="camera-outline"></ion-icon>
            </span>
            <span className="text">Photos</span>
          </a>
        </li>
        <li className={`list ${active === 4 && "active"}`}>
          <a href="#" onClick={() => handleClick(4)}>
            <span className="icon">
              <ion-icon name="settings-outline"></ion-icon>
            </span>
            <span className="text">Settings</span>
          </a>
        </li>
        <div className="indicator"></div>
      </ul>
    </Navigation>
  );
};
