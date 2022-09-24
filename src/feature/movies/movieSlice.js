import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {APIKEY} from '../../common/api/movieApiKey'
import movieApi from '../../common/api/movieApi'

export const fetchAsyncMovies=createAsyncThunk('movie/fetchAsyncMovies',
async () => {
    const movieText='Harry'
    const response = await movieApi.get(
        `?apiKey=${APIKEY}&s=${movieText}&type=movie`)
  
    return response.data
}
)
export const fetchAsyncShows=createAsyncThunk('movie/fetchAsyncShows',
async () => {
    const seriesText='friends'
    const response = await movieApi.get(
        `?apiKey=${APIKEY}&s=${seriesText}&type=series`)
  
    return response.data
}
)
export const fetchAsyncMovieOrShowDetail=createAsyncThunk('movie/fetchAsyncMovieOrShowDetail',
async (id) => {
    
    const response = await movieApi.get(`?apiKey=${APIKEY}&i=${id}&Plot=full`)
  
    return response.data
}
)


const initialState={
    movies:{},
    shows:{},
    selectedMovieOrShow:{},
    
}

const movieSlice= createSlice({
    name:'movies',
    initialState,
    reducers:{
        addMovies:(state,{payload})=>{
            state.movies=payload;

        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=> {
            console.log('movies pending');
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=> {
console.log('fetched successfully')
return {...state, movies: payload}
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=> {
console.log('fetched successfully')
return {...state, shows : payload}
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]:(state,{payload})=> {
console.log('fetched successfully')
return {...state,selectedMovieOrShow : payload}
        },
    
    },
   
})

export const {addMovies} =movieSlice.actions;
export const getAllMovies = (state)=> state.movies.movies
export const getAllShows = (state)=> state.movies.shows
export const getSelectedMovieOrShow = (state)=> state.movies.selectedMovieOrShow

export default movieSlice.reducer;