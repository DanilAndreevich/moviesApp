"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(arg) {
    if (arg.count < 10) {
        alert('Просмотренно довольно мало фильмов');
    } else if (arg.count >= 10 & arg.count <=30 ) {
        alert('Вы классический зритель');
    } else if (arg.count >=31) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

rememberMyFilms(personalMovieDB);

function detectPersonalLevel(arg) {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
              raiting = prompt('На сколько оцените его?','');
        if (lastFilm != null && raiting != null && lastFilm != '' && raiting != '' && lastFilm.length < 50) {
            arg[lastFilm] = raiting;
        } else {
            i--;
        }
    }
}

detectPersonalLevel(personalMovieDB.movies);

function showMyDB(privat,db) {
    if ( privat == false){
        console.log(db);
    }
}

showMyDB(personalMovieDB.privat, personalMovieDB);

function writeYourGenres(arg) {
    for (let i = 1; i < 4; i++) {
        const Genre = prompt(`Ваш любимый жанар под номером ${i}`);
            arg.push(Genre);
    }
}
writeYourGenres(personalMovieDB.genres);