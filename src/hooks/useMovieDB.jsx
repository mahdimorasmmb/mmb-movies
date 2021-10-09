import React, { useEffect, useState } from "react";

export default function useMovieDB(endpoint, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${endpoint}?api_key=3cba95d220b545b9996fa206ce1363f6&${new URLSearchParams(
        options?.query
      ).toString()}`
    )
      .then((r) => r.json())
      .then(setData)
      .finally(() => {
        setLoading(false);
      });
  }, [endpoint, options]);

  return { data, loading };
}
