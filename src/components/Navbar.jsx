import React, { useState  } from 'react';
import Button from './Button'

const Navbar = ({setSelectedCategoryList , setISMealList}) => {
    const [search, setSearch] = useState("")
    const countryList = [ "Indian" ,"Mexican" , "Chinese" , "Italian"]
    //   const [cheaker2, setCheaker2] = useState(false)


    const handleChange =(e)=>{
        setSearch(e.target.value)
    }

    const FilterMeals = async () => {
        const rawData = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const data = await rawData.json();
        setSelectedCategoryList(data.meals)
        setISMealList(true)
    }
    
    const handleClick = () =>{
        FilterMeals();
    }

    

    return (
        <>
            <header className='md:flex items-center justify-between px-12 py-4 bg-blue-500 text-amber-50'>
                <article>
                    <h1 className='font-bold text-3xl text-center'>
                        <i className='text-red-500 '>Recipe</i>Holder
                    </h1>
                </article>
                <aside>
                    <div className="flex items-center justify-center ">
                        <div className="relative h-13 w-100 flex items-center justify-between bg-[#2f3640] rounded-3xl gap-2 shadow-lg">
                            <input

                                type="text"
                                placeholder="Search Meal"
                                onChange={handleChange}
                                className="bg-transparent text-white text-md px-6 py-2  w-full rounded-full outline-none placeholder-white scrollbar-hide"
                            />
                            <button onClick={handleClick}
                                className="absolute right-2 size-10 rounded-full text-white bg-gradient-to-r from-[#2AF598] to-[#009EFD] transition-all duration-300 hover:bg-black hover:shadow-lg hover:-translate-y-1 active:shadow-none active:translate-y-0"
                            >
                                🔍
                            </button>
                        </div>
                    </div>
                </aside>
                <nav className='hidden lg:block'>
                    <ul id='containents' className='flex items-center gap-[2vw] text-lg'>
                        {countryList.map((item,index,)=>{
                            return <Button key={index} setISMealList={setISMealList} setSelectedCategoryList={setSelectedCategoryList} country={item}/>
                        })}
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar
