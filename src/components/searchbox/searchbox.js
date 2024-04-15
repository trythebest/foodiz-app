import React, { useContext, useEffect, useState } from "react";
import"./search.css";
import SearchLog from "./Search";
import { API } from "../../api";
import { Button } from "@mui/material";
import { MyContext } from "../../context";


export default function SearchBox(){
    const [text,setText]=useState("");
    const {setDish}=useContext(MyContext);
    const handleSubmit=(e)=>{
       e.preventDefault();
       fetch(`${API}/search.php?s=${text}`)
       .then((data)=>data.json())
       .then((dish)=>setDish(dish.meals))


    }
    return(
        <form onSubmit={handleSubmit} className="search-box">
           <SearchLog text={text} setText={setText}/>
           <Button type="submit" variant="contained">
            search
           </Button>

        </form>


    )
}



