import React from "react";
import "./Card.css"; // we will keep some custom CSS for keyframes
import { useNavigate } from 'react-router-dom';

export default function Card({ title, imgLink, category, Area }) {
const navigate = useNavigate();

  const handleClick = async (e) => {
    const meal = e.target.name.replaceAll(" ", "_");
    console.log(meal)
    navigate('/meal', { state: meal });
  }


  return (
    <div onClick={handleClick} value={title} className="relative w-[250px] h-[250px] overflow-visible group perspective rounded-[24px]">
      <div className="w-full h-full transition-transform duration-300 transform-style-3d group-hover:rotate-y-180 shadow-md rounded-[24px]">


        {/* Front */}
        <div className="absolute inset-0 bg-[#151515] rounded-[24px] backface-hidden overflow-hidden transform rotate-y-180 text-white">
          <div className="absolute w-full h-full p-2 flex flex-col justify-between">
            <div className="shadow-[0px_0px_10px_5px_rgba(0,0,0,0.5)] w-full p-2 bg-black/60  rounded-[24px]">
              <div className="flex items-center justify-between text-xs">
                <p className="w-full font-bold text-xl">{title}</p>
              </div>
              {category != null && <p className="text-[16px] text-white/60 mt-1">{category} &nbsp; | &nbsp; {Area}</p>}
            </div>
          </div>
        </div>


        {/* Back */}
        <div className="absolute inset-0 bg-[#000000] rounded-[24px] backface-hidden flex items-center justify-center overflow-hidden">
          <div className="absolute w-[160px] h-[160%] bg-gradient-to-r from-transparent via-[#ff9966] to-transparent animate-rotate"></div>
          <div className="absolute w-[100%] h-[100%] bg-[#151515] rounded-[24px] flex flex-col items-center text-white gap-5">
            {imgLink == " " || imgLink == undefined ? <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              height="50"
              width="50"
              fill="#fff"
            >
              <path d="M20.84375 0.03125C20.191406 0.0703125 19.652344 0.425781 19.21875 1.53125C18.988281 2.117188 18.5 3.558594 18.03125 4.9375C17.792969 5.636719 17.570313 6.273438 17.40625 6.75C17.390625 6.796875 17.414063 6.855469 17.40625 6.90625C17.398438 6.925781 17.351563 6.949219 17.34375 6.96875L17.25 7.25C18.566406 7.65625 19.539063 8.058594 19.625 8.09375C22.597656 9.21875 28.351563 11.847656 33.28125 16.78125C38.5 22 41.183594 28.265625 42.09375 30.71875C42.113281 30.761719 42.375 31.535156 42.75 32.84375C43.34375 32.664063 44.953125 32.09375 46.3125 31.625C47.109375 31.351563 47.808594 31.117188 48.15625 31C49.003906 30.714844 49.542969 30.292969 49.8125 29.6875C50.074219 29.109375 50.066406 28.429688 49.75 27.6875C49.605469 27.347656 49.441406 26.917969 49.25 26.4375C47.878906 23.007813 45.007813 15.882813 39.59375 10.46875C33.613281 4.484375 25.792969 1.210938 22.125 0.21875C21.648438 0.0898438 21.234375 0.0078125 20.84375 0.03125Z M16.46875 9.09375L0.0625 48.625C-0.09375 48.996094 -0.00390625 49.433594 0.28125 49.71875C0.472656 49.910156 0.738281 50 1 50C1.128906 50 1.253906 49.988281 1.375 49.9375L40.90625 33.59375C40.523438 32.242188 40.222656 31.449219 40.21875 31.4375C39.351563 29.089844 36.816406 23.128906 31.875 18.1875C27.035156 13.34375 21.167969 10.804688 18.875 9.9375C18.84375 9.925781 17.8125 9.5 16.46875 9.09375ZM17 16C19.761719 16 22 18.238281 22 21C22 23.761719 19.761719 26 17 26C15.140625 26 13.550781 24.972656 12.6875 23.46875L15.6875 16.1875C16.101563 16.074219 16.550781 16 17 16ZM31 22C32.65625 22 34 23.34375 34 25C34 25.917969 33.585938 26.730469 32.9375 27.28125L32.90625 27.28125C33.570313 27.996094 34 28.949219 34 30C34 32.210938 32.210938 34 30 34C27.789063 34 26 32.210938 26 30C26 28.359375 26.996094 26.960938 28.40625 26.34375L28.3125 26.3125C28.117188 25.917969 28 25.472656 28 25C28 23.34375 29.34375 22 31 22ZM21 32C23.210938 32 25 33.789063 25 36C25 36.855469 24.710938 37.660156 24.25 38.3125L20.3125 39.9375C18.429688 39.609375 17 37.976563 17 36C17 33.789063 18.789063 32 21 32ZM9 34C10.65625 34 12 35.34375 12 37C12 38.65625 10.65625 40 9 40C7.902344 40 6.960938 39.414063 6.4375 38.53125L8.25 34.09375C8.488281 34.03125 8.742188 34 9 34Z"></path>
            </svg> :
              <img src={imgLink} alt={title} name={title} />
            }
          </div>
        </div>
      </div>
    </div>
  );
}
