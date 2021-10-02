export function api(endpoint, options) {
  return new Promise((res, rej) => {
    fetch(
      `https://api.themoviedb.org/3/${endpoint}?api_key=3cba95d220b545b9996fa206ce1363f6`
    )
      .then((r) => {
        console.log(r.ok);
        if (!r.ok) {
          rej(r.status);
        }
        return r.json();
      })
      .then(res);
  });
}
