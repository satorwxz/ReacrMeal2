import React from 'react';
import MealCard from "./Components/MealCard";

const MealsList = ({meal}) => {
    return (
        <div className="container">

            <div className="row">
                {
                    meal.map(el =>
                        <div className={"col-4"}>
                            <MealCard meal={el}/>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MealsList;