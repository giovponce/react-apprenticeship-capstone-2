import React from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";


export default function Header() {
    return (
        <div>
            <Navigation />
            <MobileNavigation />       
        </div>
    );
}