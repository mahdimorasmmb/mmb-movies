export function apiAccount(session) {
  return new Promise((res, rej) => {
    fetch(
      `https://api.themoviedb.org/3/account?api_key=3cba95d220b545b9996fa206ce1363f6&session_id=${session}`
    )
      .then((r) => {
        if (!r.ok) {
          rej(r.status);
        }
        return r.json();
      })
      .then(res);
  });
}
