export function searchMovieServices(
  query,
  language = "en-US",
  page = "1",
  include_adult = "false"
) {
  return new Promise((res, rej) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=3cba95d220b545b9996fa206ce1363f6&language=${language}&query=${query}&page=${page}&include_adult=${include_adult}`
    )
      .then((r) => {
        console.log(r.ok);
        if (!r.ok) {
          rej(r);
        }
        return r.json();
      })
      .then(res);
  });
}
