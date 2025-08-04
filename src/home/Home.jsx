import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import CategoryCard from '../components/CategoryCard';

const Home = () => {
  const [isMealList, setISMealList] = useState(false)
  const [mealList, setMealList] = useState([])
  const [selectedCategoryList, setSelectedCategoryList] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchMeal = async () => {
      const rawData = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`);
      const data = await rawData.json()
      setSelectedCategoryList(data.meals);
    }
    if (isLoading) {
      fetchMeal();
      setISMealList(true)
    }
    setIsLoading(false)
  }, [selectedCategory])


  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const rawData = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const data = await rawData.json();
        setMealList(data.categories)
      } catch (error) {
        console.log(error);
      }
    }
    setISMealList(false)
    fetchCategory()
  }, [])



  return (
    <>
      <Navbar setSelectedCategoryList={setSelectedCategoryList} setISMealList={setISMealList} />
      <h2 className='text-center font-bold text-3xl md:text-5xl py-10 text-blue-500'>{isMealList ? "MEALS" : "CATEGORIES"}</h2>
      <main className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-12 pt-0 gap-8 items-center justify-center overflow-y-auto scrollbar-hide'>
        {
          isMealList ? (selectedCategoryList.map((item) => {
            return <Card
              key={item.idMeal}
              title={item.strMeal}
              imgLink={item.strMealThumb}
              category={item.strCategory}
              Area={item.strArea}
            />
          }))
            : (mealList.map((item) => {
              return <CategoryCard
                key={item.idCategory}
                category={item.strCategory}
                imgLink={item.strCategoryThumb}
                desciption={item.strCategoryDescription}
                setSelectedCategory={setSelectedCategory}
                setIsLoading={setIsLoading}
              />
            }))
        }
      </main>
    </>
  )
}

export default Home;
