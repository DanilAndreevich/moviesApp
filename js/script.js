"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

let lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
    raiting = prompt('На сколько оцените его?',''),
    lastFilmRepeat = prompt('Один из последних просмотренных фильмов?', ''),
    raitingRepeat = prompt('На сколько оцените его?','');

personalMovieDB.movies[lastFilm] = raiting;
personalMovieDB.movies[lastFilmRepeat] = raitingRepeat;

console.log(personalMovieDB);