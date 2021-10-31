export function addWatchList(
  media_type,
  account_id,
  session_id,
  page = 1,
  options = {}
) {
  return new Promise((res, rej) => {
    fetch(
      `https://api.themoviedb.org/3/account/${account_id}/watchlist/${media_type}?api_key=3cba95d220b545b9996fa206ce1363f6&session_id=${session_id}&language=en-US&sort_by=created_at.asc&page=${page}`,
      { ...options }
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
