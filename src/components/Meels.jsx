import useHttp from "../hooks/useHttp.js";
import MealItem from "./MealItem";

const requestConfig = {};

export default function Meels() {
    const {
          data: loadedMeals,
          isLoading,
          error
        } = useHttp('http://localhost:3000/meals', requestConfig, []);

    if(isLoading) {
        return <p>Fetching meals...</p>
    }
    
    return (
       <ul id="meals">
           {loadedMeals.map((meal) => (
              <li key={meal.id}>
                  <MealItem meal={meal}/>
              </li>
            ))}
       </ul>
    );
}