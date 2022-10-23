import { Routes, Route } from "react-router-dom";
import ContactMe from "../pages/ContactMe";
import Home from "../pages/Home";
import Project from "../pages/Project";
import Layout from "./Layout";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/contactme" element={<ContactMe />} />
            </Route>
        </Routes>
    );
}

export default Routers;