import React  from "react";

const CategoryCard = ({ category, imgLink, description, setSelectedCategory, setIsLoading }) => {
  



    const handleClick = (e) => {
        const temp = e.target.name;
        setSelectedCategory(temp);
        setIsLoading(true)
    }

    return (
        <div name={category} onClick={handleClick}
            className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-64 bg-[#2f3640] text-gray-50 p-5 rounded-[8px]"
        >
            <div className="">
                <div
                    className="group-hover:scale-110 w-full h-60 bg-blue-500 duration-500 rounded-[8px]"
                >
                    <img onClick={handleClick} name={category} className='h-full w-full rounded-[8px]' src={imgLink} alt={category} />
                </div>
                <div
                    className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12"
                >
                    <div
                        className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-500"
                    ></div>
                    <span className="text-xl font-bold">{category.toUpperCase()}</span>
                    <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                        {description}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default CategoryCard
