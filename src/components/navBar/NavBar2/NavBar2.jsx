import { useState } from "react";
import {
  UilEstate,
  UilBracketsCurly,
  UilAt,
  UilCommentAltNotes,
} from "@iconscout/react-unicons";
import { Navigation } from "./NavBar2style";

export const NavBar2 = () => {
  const [activeId, setActiveId] = useState(1); // por defecto, el primer elemento es el activo
  const NavbarArray = [
    { id: 1, title: "Home", icon: "UilEstate", to: "" },
    { id: 2, title: "About me", icon: "UilCommentAltNotes", to: "" },
    { id: 3, title: "Projects", icon: "UilBracketsCurly", to: "" },
    { id: 4, title: "Contact", icon: "UilAt ", to: "" },
  ];
  function getIconComponent(icon) {
    switch (icon) {
      case "UilEstate":
        return <UilEstate size="25" color="#000000" />;
      case "UilCommentAltNotes":
        return <UilCommentAltNotes size="25" color="#000000" />;
      case "UilBracketsCurly":
        return <UilBracketsCurly size="25" color="#000000" />;
      case "UilAt":
        return <UilAt size="25" color="#000000" />;
      default:
        return null;
    }
  }
  const handleItemClick = (id) => {
    setActiveId(id);
  };
  return (
    <Navigation className="navigation">
      <ul>
        {NavbarArray.map((item) => (
          <li
            key={item.id}
            className={`list ${item.id === activeId ? "active" : ""}`}
            onClick={() => handleItemClick(item.id)}
          >
            <a href={item.to}>
              <span className="icon">{getIconComponent(item.icon)}</span>
              <span className="text">{item.title}</span>
            </a>
          </li>
        ))}
        <div className="indicator"></div>
      </ul>
    </Navigation>
  );
};