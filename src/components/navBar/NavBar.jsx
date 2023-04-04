import React from "react";

export const NavBar = () => {
  return (
    <div>
      <ul>
        <li
          ref={(el) => (listRef.current[0] = el)}
          className={activeIndex === 0 ? "active" : ""}
        >
          Item 1
        </li>
        <li
          ref={(el) => (listRef.current[1] = el)}
          className={activeIndex === 1 ? "active" : ""}
        >
          Item 2
        </li>
        <li
          ref={(el) => (listRef.current[2] = el)}
          className={activeIndex === 2 ? "active" : ""}
        >
          Item 3
        </li>
      </ul>
    </div>
  );
};
