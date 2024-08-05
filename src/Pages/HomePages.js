
import React, {useEffect, useState} from 'react'
import axios from "axios";
import Header from "../Components/Header";
import MealsList from "../MealsList";




const HomePage = () => {
    const [meals,setMeals] = useState([])

    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php ')
            .then(({data}) =>
                setMeals(data.meals))
    },[])
    return (
        <div className={'container'}>
                <Header/>
            <MealsList meal={meals}/>
        </div>
    );
}

export default HomePage;
