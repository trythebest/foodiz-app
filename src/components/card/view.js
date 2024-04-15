import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../api";
import axios from "axios";
import ReactPlayer from "react-player";
import { Box, Card, Container, List, ListItemText, Paper, Tab } from "@mui/material";
import "./card.css";


export default function View() {
    const { id } = useParams();
    const [mani, setMani] = useState([]);
    const match= mani.strInstructions;
    useEffect(() => {
        // axios.get(`${API}/lookup.php?i=${id}`).then(({data})=>{
        //     setMani(data.meals);
        // })
        async function getData() {
            await fetch(`${API}/lookup.php?i=${id}`)
                .then((data) => data.json())
                .then((recipe) => setMani(recipe.meals[0]));
        }
        getData();
        // fetch(`${API}/lookup.php?i=${52820}`)
        // .then((data)=> data.json())
        // .then((recipe)=>setMani(recipe.meals));
    }, []);
    // console.log(mani[0].strMeal);

    return (
        <Container className="view" maxWidth="xl">
            <Box sx={{ maxwidth: "auto", minHeight: "auto" }}>
                <Paper elevation={3}>
                    <ReactPlayer width="100%" controls url={mani.strYoutube} />
                    <Box sx={{ width: "100%", borderBottom: 2, borderColor: "green" }}>
                        <Tab className="inst-follow" label="Instruction To be Followed" />
                    </Box>
                   <p>
                   {mani.strInstructions}

                   </p>
                    
                    
                </Paper>

            </Box>
        </Container>

    )
}