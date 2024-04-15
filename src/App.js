import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Card from './components/card/card';
// import DisplayCard from './components/card/displaycard';
import Header from './components/header/header.js';
import Home from './pages/home.js';
import View from './components/card/view.js';
import Category from './components/category/category.js';
import CatView from './components/category/CategoryView.js';
import { ThemeProvider, createTheme } from '@mui/material';
import { useContext } from 'react';
import { MyContext } from './context.js';

function App() {
  const {mode}=useContext(MyContext);
  const darkTheme= createTheme({
    palette:{
      mode:mode,
    },
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <div className={`${mode==="dark"?"App dark":"App"}`}>
      <Header/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/view/:id" element={<View/>}/>
         <Route path='/Category' element={<Category/>}/>
         <Route path='/Category/:name' element={<CatView/>}/>

      </Routes>

    </div>
    </ThemeProvider>
  );
}

export default App;
