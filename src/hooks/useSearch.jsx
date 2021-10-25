import React, { useEffect, useState } from "react";

export default function useSearch(
  query,
  type = "movie",
  language = "en-US",
  page = "1",
  include_adult = "false"
) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/${type}?api_key=3cba95d220b545b9996fa206ce1363f6&language=${language}&query=${query}&page=${page}&include_adult=${include_adult}`
    )
      .then((r) => r.json())
      .then(setData)
      .finally(() => {
        setLoading(false);
      });
  }, [language, query, page, include_adult]);

  return { data, loading };
}
