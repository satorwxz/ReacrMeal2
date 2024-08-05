
import React from 'react'
import {Link} from "react-router-dom";

const MealCard = ({meal}) => {

    return (
                            <div className={"card width: 18rem;"}>
                                <img src={meal.strMealThumb} className={'card-img-top'} alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">{meal.strMeal}</h5>
                                    <p className={'card-text'}>{meal.strCategory}</p>
                                    <Link to={`/info/${meal.idMeal}`} className={'btn btn-primary'}>More Info.</Link>
                                </div>
                            </div>


    );
}

export default MealCard;