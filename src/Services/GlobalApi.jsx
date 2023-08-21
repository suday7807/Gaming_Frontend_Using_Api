import axios from "axios"

const key = "749410278441466e85bc0c692ec34629"
const axiosCreate = axios.create({
    baseURL: 'https://api.rawg.io/api'
})

const getGenreList=axiosCreate.get('/genres?key='+key);
const getAllGames=axiosCreate.get('/games?key='+key);
const getGamesListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)


export default{
    getGenreList,
    getAllGames,
    getGamesListByGenreId
} 