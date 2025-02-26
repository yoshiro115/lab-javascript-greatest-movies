// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  //   return moviesArray.map((movies) => movies.director);
  let directors = moviesArray.map(function (movie) {
    return movie.director;
  });
  //bonus no repeat:
  let cleanDirectors = directors.filter(function (dire, index) {
    return directors.indexOf(dire) === index;
  });
  return cleanDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movies) =>
      movies.director === `Steven Spielberg` && movies.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const scoreAvarage = moviesArray.reduce((acc, movie) => {
    // if (movie.score) {
    //   return acc + movie.score;
    // } else {
    //   return acc;
    // }
    return movie.score ? acc + movie.score : acc;
  }, 0);
  return parseFloat((scoreAvarage / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((movies) =>
    movies.genre.includes("Drama")
  );
  result = scoresAverage(dramaMovies);
  return result;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
  let yearArray = moviesArray.map((movies) => movies);
  let yearArrayOrdered = yearArray.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return yearArrayOrdered;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
  let titleArray = moviesArray.map((movies) => movies.title);
  let titleArrayOrdered = titleArray.sort((a, b) => a.localeCompare(b));
  return titleArrayOrdered.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let changeMoviesArray = moviesArray.map((movies) => {
    let durationHours = movies.duration;
    let hour = durationHours[1] === "h" ? durationHours.substring(0, 1) : "0";
    let min = durationHours[3] ? durationHours.slice(3, 5) : "0";
    let newDuration = parseInt(hour) * 60 + parseInt(min);
    // ! spread operateur to copie object and create a new one but i change duration
    return { ...movies, duration: newDuration };
  });
  return changeMoviesArray;
}
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }
  let yearArray = moviesArray.map((movies) => movies.year);
  let yearArrayCrescent = yearArray.sort((a, b) => a - b);
  let yearArrayNoRepeat = yearArrayCrescent.filter(
    (year, index) => yearArrayCrescent.indexOf(year) === index
  );
  let yearAvg = yearArrayNoRepeat.map((year) => {
    let byYearMovies = moviesArray.filter((movies) => movies.year === year);
    return { year: year, avg: scoresAverage(byYearMovies) };
  });
  let bestYear = yearAvg.sort((a, b) => b.avg - a.avg);
  //   console.log(bestYear);
  return `The best year was ${bestYear[0].year} with an average score of ${bestYear[0].avg}`;
}
