import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

const Home = lazy(() => import("../../views/Home"));
const About = lazy(() => import("../../views/About"));
const Certificates = lazy(() => import("../../views/Certificates"));
const CV = lazy(() => import("../../views/CV"));
const ListProjects = lazy(() => import("../../views/ListProjects"));
const ProjectDetail = lazy(() => import("../../views/ProjectDetail"));
const ProjectModalWrapper = lazy(() => import("../../components/projects/ProjectDetailWrapper"));
const NotFound = lazy(() => import("../../views/NotFound"));

const Loader = lazy(() => import("../../components/Loader"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path='/Sebastian.Siman/' element={<Home />}>
            <Route path='about' element={<About />} />
            <Route path='certificates' element={<Certificates />} />
            <Route path='cv' element={<CV />} />
            <Route path='projects' element={<ListProjects />}>
              <Route path=':projectName' element={<ProjectModalWrapper />} />
            </Route>
            <Route path='project/:projectName' element={<ProjectDetail />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </Suspense>
  );
}
