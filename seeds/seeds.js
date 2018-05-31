
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {
          title: "The Lion King",
          year: 1994,
          rating: 8.5,
          director: "Rob Minkoff & Roger Allers",
          poster_url: "https://ia.media-imdb.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SY1000_CR0,0,673,1000_AL_.jpg"
        },
        {
          title: "The Way of the Gun",
          year: 2000,
          rating: 6.7,
          director: "Christopher McQuarrie",
          poster_url: "https://ia.media-imdb.com/images/M/MV5BMTAyNjEyMDEwMzBeQTJeQWpwZ15BbWU4MDczMjY1NDEy._V1_SY1000_CR0,0,646,1000_AL_.jpg"
        },
        {
          title: "Orfeu Negro",
          year: 1959,
          director: "Marcel Camus",
          rating: 9,
          poster_url: "https://ia.media-imdb.com/images/M/MV5BN2NkNTUyMjgtZmI3MS00N2RmLWI5OWYtNTY2ZjkxNTI1OWU1XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY1000_CR0,0,742,1000_AL_.jpg"
        },
        {
          title: "Men in Black",
          year: 1997,
          director: "Barry Sonnenfeld",
          rating: 9,
          poster_url: "https://tse2.mm.bing.net/th?id=OIP.QIqbQ4jWWkdggUQTssmBhgHaKj&pid=15.1&P=0&w=300&h=300"
        },
        {
          title: "Inception",
          director: "Christopher Nolan",
          year: 2010,
          rating: 8,
          poster_url: "https://www.amazon.co.uk/Inception-Poster-Movie-Gordon-Levitt-Cotillard/dp/B003TIYD4O"
        }
      ]);
    });
};
