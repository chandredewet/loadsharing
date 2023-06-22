import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <>
            <Navigation />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;