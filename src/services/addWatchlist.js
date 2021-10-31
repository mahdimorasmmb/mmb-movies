export function addWatchList(
  account_id,
  media_type,
  session_id,
  media_id,
  watchlist
) {
  return new Promise((res, rej) => {
    fetch(
      `https://api.themoviedb.org/3/account/${account_id}/watchlist?api_key=3cba95d220b545b9996fa206ce1363f6&session_id=${session_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          media_type,
          media_id,
          watchlist,
        }),
      }
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
