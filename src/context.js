import React, { createContext, useState } from "react";

export const MyContext = createContext("");

const AppContext = ({ children }) => {
    const [dish, setDish] = useState([]);
    const [mode, setMode] = useState("light");
    return (
        <MyContext.Provider
            value={{ dish, setDish, mode, setMode }}
        >{children}</MyContext.Provider>
    )
}

export default AppContext;