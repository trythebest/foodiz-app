import React, { useContext, useEffect, useState } from "react";
import Card from "./card";
import { Box, Grid } from "@mui/material";
import "./card.css";
import { API } from "../../api";
import { MyContext } from "../../context";


export default function DisplayCard() {
    let different=()=>(String.fromCharCode(0|(Math.random()*15+97)));
    const {dish , setDish} = useContext(MyContext);

   useEffect(()=>{
    async function getdish(){
    await fetch(`${API}/search.php?f=${different()}`)
       .then((meal)=>meal.json())
       .then((meals)=> setDish(meals.meals));
    }
    getdish();
    
   },[])
   if(!dish){
    return(
        <div>
            <img  src="https://gettingunstuck.gse.harvard.edu/static/img/strategy/strategyArtboard_7.png" alt="no data"/>
            
        </div>
    )
};

    return (
        <Box className="box" sx={{flexGrow:1}}>
            <Grid container spacing={2}>
                {dish.map((detail)=>{
                    return(
                        <Grid item xs={12} sm={6} md={3}>
                        <Card data={detail} />
                        </Grid>
                    )
                })}
            </Grid>
        </Box>



    )
}