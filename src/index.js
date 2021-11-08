import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import Axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    // yield takeEvery('TEST_SAGAS', testSagas);
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('DETAIL_INFO_GET',getMovieDetails);
    yield takeEvery('GET_ITEM_GENRE',specificGenreGet);
    yield takeEvery('GET_GENRES',getGenres);
    yield takeEvery('SUBMIT_NEW_MOVIE',postNewMovie);
}

// Sagas go here
// function* testSagas() {
//     console.log("Sagas Seaworthy");
// }

function* postNewMovie(action) {
    try {
        console.log("In postNewMovie with", action.payload);
        yield Axios.post('/api/movie', action.payload);
      } catch (error) {
        console.log(error);
      }
}


function* getGenres() {
    console.log("Getting Genres");
    try {
        const genreList = yield Axios.get('/api/genre');
        yield put({type: 'SET_GENRES', payload: genreList.data})
    } catch (error) {
        console.log(error);
    }
}

function* getMovies() {
    console.log("Getting Movies");
    try {
        const movieList = yield Axios.get('/api/movie');
        yield put({type: 'SET_MOVIES', payload: movieList.data})
    } catch (error) {
        console.log(error);
    }
}

// NOTICE: Get a better idea of how to do a compount GET request or just move it to another route
function* getMovieDetails(action) {
    console.log("Getting Details of Movie.id",action.payload);
    try {
        const movieDetails = yield Axios.get(`/api/detail/${action.payload}`);
        yield put({type: 'SET_DETAILS', payload: movieDetails.data})
    } catch (error) {
        console.log(error);
    }
}

function* specificGenreGet(action) {
    try {
        const movieDetails = yield Axios.get(`/api/moviegenre/${action.payload}`);
        yield put({type: 'SET_DETAIL_PAGE_GENRE', payload: movieDetails.data})
    } catch (error) {
        console.log(error);
    }
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// DETAIL_PAGE_CALL

const details = (state = {id: -1, poster: '', description: '', title: ''}, action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            console.log("Here's the detail payload",action.payload);
            const tempObj = action.payload[0];
            // const tempObj = {
            //     id: action.payload.id,
            //     poster: action.payload.poster,
            //     description: action.payload.description,
            //     title: action.payload.title
            // }
            return tempObj;
        default:
            return state;
    }
}

const detailPageGenre = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAIL_PAGE_GENRE':
            const tempArray = [];
            for (let i = 0; i < action.payload.length; i++) {
                console.log(action.payload[i].name);
                tempArray.push(action.payload[i].name);
            }
            return tempArray;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details,
        detailPageGenre
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();