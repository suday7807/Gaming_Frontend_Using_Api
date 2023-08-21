import React, { useEffect } from "react";

const GamesByGenreId = ({ gameList, selectedGenresName }) => {
  useEffect(() => {
    console.log("GameList", gameList);
  }, []);
  return (
    <div>
      <h2 className=" font-bold text-[30px] text-white mt-5">{selectedGenresName} Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {gameList.map((item) => (
          <div className=" hover:scale-105 duration-300 ease-in-out cursor-pointer bg-[#76a8f75e] p-3 rounded-lg pb-10 h-full">
            <img
              src={item.background_image}
              alt=""
              className="w-full h-[80%] object-cover rounded-xl"
            />
            <h2 className="text-[20px] text-white font-bold">
              {item.name}
              <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">
                {item.metacritic}
              </span>
            </h2>
            <h2>
              ⭐{item.rating}       
              🔊{item.reviews_count}  
              🔥{item.suggestions_count}  
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesByGenreId;
