const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getListOfTitles = function(){
  let filmTitles = [];

  this.films.map(film => {
    filmTitles.push(film.title);
  });
  return filmTitles;
};


Cinema.prototype.findByTitle = function(title){
  let result = ""
  this.films.find(film => {
    if(title === film.title){
      result = film.title;
    }
    
  });
  return result;
};

Cinema.prototype.filterByGenre = function(genre){
  let filmsGenre = [];
  this.films.filter(film => {
    if(film.genre === genre){
      filmsGenre.push(film);
    }
  });
  return filmsGenre;
};

Cinema.prototype.checkByYear = function(year){
  const result = this.films.some(film => film.year === year);
  return result;
}

Cinema.prototype.checkByLength = function(runningTime){
  const result = this.films.some(film => film.length > runningTime);
  return result;
};

Cinema.prototype.totalRunningTime = function(){
  
  let runningTotal = 0;
  this.films.forEach(film => {
    runningTotal += film.length;
  });
  return runningTotal;
};

Cinema.prototype.filterByYear = function(year){
  let filmsYear = [];
  this.films.filter(film => {
    if(film.year === year){
      filmsYear.push(film);
    }
  });
  return filmsYear;
};




module.exports = Cinema;
