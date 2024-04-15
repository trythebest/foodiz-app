import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../api";
import Card from "../card/card";
import "../card/card.css";
import { Container, Grid, Typography } from "@mui/material";


export default function CatView(){
    const [area, setArea] = useState([]);
    const {name} = useParams();
    useEffect(()=>{
        async function getcountry(){
            await fetch(`${API}/filter.php?a=${name}`)
            .then((data)=> data.json())
            .then((dishes)=>  setArea(dishes.meals));
            // .catch((err)=>console.log(err))
        }
        getcountry();
    },[])
    return(
        <Container minWidth="md">
            <Typography
            style={{padding:"10px"}}
            gutterBottom
            variant="h2"
            component="h1"
            ><u>{name} Dishes</u></Typography>
            <Grid container spacing={2}>
            {area.map((dish)=>{
                return(
                    <Grid item xs={12} sm={6} md={4} >
                    <Card data={dish}  />
                    </Grid>
                )
            })}
            </Grid>
             
        </Container>
           
        
    )
}