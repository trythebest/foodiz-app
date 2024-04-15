import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";
import { Button, CardActionArea, CardActions, CardContent, CardMedia, Modal, Typography } from "@mui/material";


export default function Card({data}){
    const navigate=useNavigate();
   
    // console.log({detail});
    return(
        <div className="container">
            <div className="d-card">
                <div className="d-details">
                  <img src={data.strMealThumb} alt="image"></img>
                  <p className="meal">{data.strMeal}</p>
                </div> 
                <button className="d-btn" onClick={()=>navigate(`/view/${data.idMeal}`)}>WHY NOT TRY IT?</button>
                
            </div> 
        
        </div>
        // <div><img src={`${data.strMealThumb}`} alt="image"/></div>
        // <Card sx={{maxWidth:350}}>
        //     <CardActionArea>
        //         <CardMedia 
        //         component="img"
        //         height="200"
        //         image={`${data.strMealThumb}`}
        //         alt={`${data.strMeal}`}
        //         />    
        //         <CardContent>
        //             <Typography>
        //                 {data.strMeal}
        //             </Typography>
        //             </CardContent>      
        //     </CardActionArea>
        //     <CardActions>
        //         {data.strInstructions ? (
        //             <Modal data={data}/>
        //         ):(
        //             <Button 
        //             onClick={()=>navigate(`/view/${data.idMeal}`)}
        //             variant="contained"
        //             >
        //                 Why not try it?
        //                 </Button>
        //         )}
        //     </CardActions>
        // </Card>
    )
}