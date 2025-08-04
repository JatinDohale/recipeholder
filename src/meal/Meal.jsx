import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


const Meal = () => {
  const [recipe, setRecipe] = useState({})
  const { state } = useLocation();
  const ingredients = [];// Dynamically collect ingredients and measures

  useEffect(() => {
    try {
      const fetchMeal = async () => {
        const rawData = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${state}`);
        const data = await rawData.json();
        setRecipe(...data.meals);
        console.log(data.meals[0]["strInstructions"])

      }
      fetchMeal()
    }catch(e){
      console.log(e);
    }
  }, [])


  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure ? measure : ""} ${ingredient}`);
    }
  }


  return (
    <div className="w-screen md:h-screen bg-[linear-gradient(181deg,_rgba(255,255,255,1)_0%,_rgba(176,204,247,1)_39%,_rgba(106,160,247,1)_73%,_rgba(59,130,246,1)_100%)]">
      <h1 className="text-3xl py-2 md:py-0 font-bold text-center h-[10%] bg-blue-500 text-white flex items-center justify-center">{recipe.strMeal}</h1>

      <div className='  flex flex-col md:flex-row items-center  h-[90%] mx-auto'>
        <div className='md:w-[40%] md:h-full flex items-center justify-center'>
          <img id='mealImage'
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="size-[80%] md:size-90 object-cover rounded-lg my-4 md:mb-4"
          />
        </div>

        <div className='w-full md:w-[60%] h-full'>

          <div className="mt-[5%] text-gray-600 text-sm h-[15%] text-center">
            <p><strong>Category:</strong> {recipe.strCategory}</p>
            <p><strong>Area:</strong> {recipe.strArea}</p>
          </div>

          <div className='flex flex-col md:flex-row items-center md:items-start w-full h-[75%] '>


            <div className='w-[80%] md:w-[40%] h-[90%] flex flex-col items-center m-5 p-5 bg-amber-50 rounded-2xl mealImage text-blue-700'>
              <h2 className="text-xl font-semibold self-start">Ingredients</h2>
              <ul className="list-disc list-inside mx-auto text-gray-700   overflow-y-auto scrollbar-hide">
                {ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className='w-[80%] md:w-[60%]  h-[90%] flex flex-col items-center m-5 p-5 bg-amber-50 rounded-2xl mealImage text-blue-700 '>
              <h2 className="text-xl font-semibold mb-2 self-start">Instructions</h2>
              <pre className="text-gray-700 text-wrap overflow-y-auto scrollbar-hide text-justify w-full">{recipe.strInstructions}</pre>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
};

export default Meal;
