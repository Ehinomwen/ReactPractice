import React from "react";
import food1 from './food1.jpg'
export default function Navbar(){
    return(
        <div>
            <header>
                <nav>
                    <img src={food1} alt="food1" className="logo" />
                    <h3>ReactFacts</h3>
                    <h4>React Course-Project1</h4>
                    
                </nav>
            </header>
        </div>
    )
}