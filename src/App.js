
import React, {useEffect, useState} from 'react'
import MealCard from "./Components/MealCard";
import Header from "./Components/Header";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import HomePages from "./Pages/HomePages";
import SearchPages from "./Pages/SearchPages";
import Info from "./Pages/Info";


function App() {

    const [meal,setMeals] = useState([])

    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php ')
            .then(({data}) =>
                setMeals(data.meals))
    },[])
  return (
    <div>
        <Routes>
            <Route path={'/'} element={<HomePages/>} />
            <Route path={'/search'} element={<SearchPages/>} />
            <Route path={'/info/:id'} element={<Info/>} />
        </Routes>
    </div>
  );
}

export default App;
