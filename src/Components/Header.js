
import React from 'react'
import MealDB from "./MealDB";
import Btn from "./Btn";

function Header() {
    return (
        <header>
            <nav className="navbar">

                <div className={'meal-db'}>
                    <MealDB/>
                </div>

                <img src="../Assets/logo-small.png" className="navbar-brand" alt=""/>
                <Btn/>
            </nav>
        </header>


    );
}

export default Header;