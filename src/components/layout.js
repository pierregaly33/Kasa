import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

function layout() {
    return (
        <>
            <main className="content">
                <Navbar />
                <Outlet />
            </main>
        </>
    );
}

export default layout;
