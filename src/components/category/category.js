import React, { useEffect, useState } from "react";
import { API } from "../../api";
import { Box, Container, ListItemButton, ListItemIcon, ListItemText, Tab } from "@mui/material";
import { FlagCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


export default function Category() {

    const [category, setCategory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getcountry() {
            await fetch(`${API}/list.php?a=list`)
                .then((data) => data.json())
                .then((country) => setCategory(country.meals));
        }
        getcountry();

    }, [])
    return (
        <Container>
            <Box>
                <Box sx={{borderBottom:2, borderColor:"purple"}}>
                    <Tab label="Browse By Country" sx={{fontWeight:"bold"}}/>
                </Box>
                {category.map((country, e) => {
                    return (
                        <ListItemButton key={e} onClick={()=>navigate(`/Category/${country.strArea}`)}>
                            <ListItemIcon>
                                <FlagCircle/>
                            </ListItemIcon>
                            <ListItemText primary={country.strArea}/>

                        </ListItemButton>
                    )
                })}
            </Box>
        </Container>


    )

}