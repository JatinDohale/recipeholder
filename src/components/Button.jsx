import React from 'react';

const Button = ({ country ,setSelectedCategoryList ,setISMealList }) => {
const handleClick =async(e)=>{
    const meal = await e.target.value;
     const rawData = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${meal}`);
        const data = await rawData.json();
        setSelectedCategoryList(data.meals)
        setISMealList(true)
}


    return (
        <button onClick={handleClick} value={country} className="w-[100px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-800 before:to-blue-400 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
            {country}
        </button>
    );
}

export default Button;
