
import React from 'react'
import {Link, Route, Routes} from "react-router-dom";
import HomePages from "../Pages/HomePages";
import SearchPages from "../Pages/SearchPages";


function Btn() {
    return (
    <div className="btn-link">
        <Link to={"/"}>Home</Link>
        <Link to={"/search"}>Search</Link>
    </div>




    );
}

export default Btn;