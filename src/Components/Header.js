import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <nav>
            <ul>
                <li>
                <Link to="/">Pic of the day</Link>
                </li>
                <li>
                <Link to="/random">Random</Link>
                </li>
                <li>
                <Link to="/custom">Custom</Link>
                </li>
            </ul>
            </nav>
        </div>
    );
}