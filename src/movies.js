// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newListOfDirectors = moviesArray.map(film => film.director);
    return newListOfDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMoviesBySpielberg = moviesArray.filter(film => film.genre.includes('Drama') && film.director.includes('Steven Spielberg'));
    return dramaMoviesBySpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray){
    if (moviesArray.length === 0) {
        return 0;
    }
    const totalScoreOfAllMovies = moviesArray.reduce ((accumulator, film) => {
        if (film.score === undefined) {
            return accumulator;
        }
        else {
            return accumulator + film.score
        }
    }, 0);
    
    let fullAverage = totalScoreOfAllMovies / moviesArray.length;
    return Math.round(fullAverage * 100) / 100;
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const allDramaMovies = moviesArray.filter(film => film.genre.includes('Drama'));
    return scoresAverage(allDramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesByYear = [...moviesArray.sort((a,b) => {
        if (a.year < b.year) {
            return -1;
        }
        else if (a.year > b.year) {
            return 1;
        }
        else if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
    })];
    return moviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// Another popular way to order the movies is to sort them alphabetically using the title key.
// However, in this case, we only need to print the title of the first 20. Easy peasy for an expert like you. 😉

// Create an orderAlphabetically() function that receives an array and returns an array of the first 20 titles,
// alphabetically ordered. Return only the title of each movie, and if the array you receive has less than 20 movies, return all of them.

// ⚠️ Important: Your function should return a new array, containing movie objects sorted alphabetically.
// Your function should not modify (mutate) the original array. You may need to research how to make a "copy" or "clone" an array.
function orderAlphabetically(moviesArray) {
    const moviesByYear = [...moviesArray.sort((a,b) => a.title.localeCompare(b.title))]; // use logic from iteration #5 to clone array entered as a parameter and order alphabetically 
    const listOfTitles = moviesByYear.map(film => film.title); // use logic from iteration #1 to map cloned array, modify it and return a list of titles

    if (listOfTitles.length > 20) { 
        return listOfTitles.slice(0,20); // return only the first 20 movie titles
    }
    else {
        return listOfTitles; // return entire list of movie titles
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// We got the info from the IMDB web page, but the duration info was
// saved in a format that is difficult for us to compare movies.

// Finding the longest movie is almost impossible
// using that format, so let's change it!

// Create a turnHoursToMinutes() function that receives an array as
// a parameter and, with some magic implemented by you - replaces
// the duration info of each of the movies for its equivalent in minutes.

// For example:
// {
//   "title": "The Shawshank Redemption",
//   "year": 1994,
//   "director": "Frank Darabont",
//   "duration": "2h 22min",
//   "genre": ["Crime","Drama"],
//   "score" :9.3
// }
// Should be:

// {
//   "title": "The Shawshank Redemption",
//   "year": 1994,
//   "director": "Frank Darabont",
//   "duration": 142,
//   "genre": ["Crime","Drama"],
//   "score": 9.3
// }

// ⚠️ Important: Your function should return a new array, containing movieobjects
// with the duration time in minutes. Your function should not
// modify (mutate) the original array.

function turnHoursToMinutes(moviesArray) {
    const newListOfAllMovies = [...moviesArray];
    return newListOfAllMovies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
// We always hear so much about classic movies, but we want to
// know which year has the best average score so that we can
// declare the BEST YEAR FOR CINEMA officially!

// Go ahead and find which year has the best average score for
// the movies released that year! Create bestYearAvg() function that
// receives an array of movies and gives us an answer to which year
// was the best year for cinema and what was its average score.
// The bestYearAvg() should return a string with the following structure:

// The best year was <YEAR> with an average score of <RATE>

function bestYearAvg(moviesArray) {
    if (moviesArray.length ===0) {
        return null;
    }
}
