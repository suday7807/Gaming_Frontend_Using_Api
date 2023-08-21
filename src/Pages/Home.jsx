import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "./Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesByGenreId from "../Components/GamesByGenreId";

const Home = () => {
  const [allGameList, setAllGameList] = useState();
  const [gamesListByGenres, setGamesListByGenres] = useState([]);
  const[selectedGenresName, setSelectedGenresName] = useState('Action')

  useEffect(() => {
    getAllGamesList();
    getGamesListByGenreId(4);
  }, []);

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGameList(resp.data.results);
     
    });
  };

  const getGamesListByGenreId = (id) => {
    console.log("GERENID",id)
    GlobalApi.getGamesListByGenreId(id).then((resp) => {
      console.log("Game List by Genra Id", resp.data.results);
      setGamesListByGenres(resp.data.results);
    });
  };

  return (
    <div className="grid grid-cols-4 px-4">
      <div className=" hidden md:block">
        <GenreList genresId={(setGenresId)=>getGamesListByGenreId(setGenresId)}
          selectedGenresName={(name)=>setSelectedGenresName(name)}/>
      </div>
      <div className=" col-span-4 md:col-span-3">
        {allGameList?.length > 0 && gamesListByGenres.length > 0 ? (
          <div>
            <Banner gameBanner={allGameList[0]} />
            <TrendingGames gameList={allGameList} />
            <GamesByGenreId gameList={gamesListByGenres} 
            selectedGenresName={selectedGenresName} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
