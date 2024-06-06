import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

function layout() {
    return (
        <>
            <main className="content">
                <Navbar />
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default layout;
