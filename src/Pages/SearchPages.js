
import React, {useEffect, useState} from 'react'

import axios from "axios";
import Header from "../Components/Header";
import MealsList from "../MealsList";




function SearchPage() {
    const [meals,setMeals] = useState([])
    const [searchValue,setSearchValue] = useState('')

    // useEffect(() => {
    //     axios('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    //         .then(({data}) =>
    //             setMeals(data.meals))
    // },[])

    const handleSearch = () => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
            .then(({data}) =>
                setMeals(data.meals) )
    }

    return (
        <div className={'container'}>
            <Header/>
            <div>
                <div>
                    <input
                        type="text"
                        onChange={(e) => setSearchValue(e.target.value)} placeholder="Search Meals"/>
                    <button onClick={handleSearch}>Search</button>
                </div>

            </div>
            <MealsList meal={meals}/>
        </div>
    );
}

export default SearchPage;
