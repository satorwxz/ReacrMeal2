import React, {useEffect, useState} from 'react';
import Header from "../Components/Header";
import {useParams} from "react-router-dom";
import axios from "axios";

const Info = () => {
    const {id} = useParams();
    const [meal, setMeal] = useState({});
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(({data}) => {
                setMeal(data.meals[0])
            })
    },[id])
    return (
        <div>
            <Header/>
            <div className={'meal-wrapper'}>
                <img src={meal.strMealThumb} alt=""/>
                <div>
                    <h2>{meal.strMeal}</h2>
                </div>
            </div>
        </div>
    );
};

export default Info;