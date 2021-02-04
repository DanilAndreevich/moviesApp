"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || personalMovieDB.count == isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function(){
        if (personalMovieDB.count < 10) {
            alert('Просмотренно довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 & personalMovieDB.count <=30 ) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >=31) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    detectPersonalLevel: function(){
        for (let i = 0; i < 2; i++) {
            const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
                  raiting = prompt('На сколько оцените его?','');
            if (lastFilm != null && raiting != null && lastFilm != '' && raiting != '' && lastFilm.length < 50) {
                personalMovieDB[lastFilm] = raiting;
            } else {
                i--;
            }
        }
    },
    showMyDB: function(){
        if (personalMovieDB.privat == true) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`Ваш любимый жанар под номером ${i}`);
            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные');
                i--;
            }else {
                personalMovieDB.genres[i-1] = genre;
            } 
        }
        personalMovieDB.genres.forEach((element, i)  => {
            console.log(`Любимый жанр ${i+1} - это ${element}`)
        });
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

console.log(personalMovieDB);
