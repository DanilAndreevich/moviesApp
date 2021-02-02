"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let i = 0;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count >= 10 & personalMovieDB.count <=30 ) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >=31) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

for (let i = 0; i < 2; i++) {
    const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
          raiting = prompt('На сколько оцените его?','');
    if (lastFilm != null && raiting != null && lastFilm != '' && raiting != '' && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = raiting;
    } else {
        i--;
    }
}

console.log(personalMovieDB);