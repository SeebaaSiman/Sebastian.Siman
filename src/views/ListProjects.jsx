import { GridProjects } from "../components/projects/GridProjects";
import { HorizontalScroll } from "../components/projects/HorizontalScroll";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useHorizontalSectionProvider } from "../hook/useContextProvider";

const ListProjects = () => {
  const location = useLocation().pathname;
  const { handleScroll } = useHorizontalSectionProvider();
  useEffect(() => {
    if (location === "/Sebastian.Siman/projects") {
      handleScroll(-50);
    } else handleScroll(50);
  }, []);

  return (
    <HorizontalScroll>
      <GridProjects />
      <Outlet />
    </HorizontalScroll>
  );
};

export default ListProjects;
