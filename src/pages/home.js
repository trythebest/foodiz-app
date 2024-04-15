import React from "react";
import SearchBox from "../components/searchbox/searchbox";
import DisplayCard from "../components/card/displaycard";


export default function Home(){
    return(
        <div>
            <div className="home-container">
            <p className="typo">
                Welcome!
            </p>
            <p className="typo">
                Search for  your favorite recepies here...
            </p>
            <SearchBox/>
        </div>
        <DisplayCard/>
        </div>
        
        
    )
}